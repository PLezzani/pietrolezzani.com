/*
 * case-transition.js
 * The first half of the passage from the home to a case, rebuilt from the
 * reference (metalab.com, home to /work/uber). On click the card's picture
 * grows until it fills the window, while the words on the card fade, and only
 * then does the browser navigate. The case page picks the picture up full
 * screen and slides it away downwards: that second half lives in the case
 * page itself, in CSS, so the two halves meet on the same full-screen image.
 *
 * Timings and curves are the reference's: 1.5s on a power4 in-out for the
 * growth, 0.3s for the words. A link opened in a new tab, a modified click,
 * a missing animation API or a request for reduced motion all get a plain
 * link, untouched.
 */
(function () {
	var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
	var GROW = 1500;
	var EASE = 'cubic-bezier(0.83, 0, 0.17, 1)'; // power4 in-out
	var busy = false;

	function reset() {
		busy = false;
		var layer = document.querySelector('.case-transition');
		if (layer) layer.remove();
		Array.prototype.forEach.call(document.querySelectorAll('.case-card.is-leaving'), function (c) {
			c.classList.remove('is-leaving');
		});
	}

	// the hover zoom the picture may carry at the moment of the click
	function currentScale(el) {
		var m = /matrix\(([^,]+)/.exec(getComputedStyle(el).transform || '');
		return m ? parseFloat(m[1]) || 1 : 1;
	}

	Array.prototype.forEach.call(document.querySelectorAll('.case-card'), function (card) {
		var link = card.querySelector('.case-card-link');
		var img = card.querySelector('.case-card-image');
		if (!link || !img) return;

		link.addEventListener('click', function (e) {
			if (busy || reduce.matches || e.defaultPrevented) return;
			if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
			if (!('animate' in Element.prototype)) return;
			e.preventDefault();
			busy = true;

			// The case page needs to know the picture is on its way, and it must
			// not guess it from the referrer: a link opened in a new tab has the
			// same referrer and no picture in flight. So the URL carries the mark,
			// and the case page strips it before anything else reads it.
			var target = new URL(link.href, location.href);
			target.searchParams.set('from', 'home');
			var href = target.href;
			var r = img.getBoundingClientRect();
			var scale = currentScale(img);

			// A copy of the picture laid exactly over the card's own, so the
			// first frame is the card as it was. The card stays on top of it
			// and fades its words away while the copy grows out from under.
			var layer = document.createElement('div');
			layer.className = 'case-transition';
			layer.setAttribute('aria-hidden', 'true');
			var pic = document.createElement('img');
			pic.src = img.currentSrc || img.src;
			pic.alt = '';
			var veil = document.createElement('span');
			veil.className = 'case-transition-veil';
			layer.appendChild(pic);
			layer.appendChild(veil);
			document.body.appendChild(layer);
			card.classList.add('is-leaving');

			var timing = { duration: GROW, easing: EASE, fill: 'forwards' };
			var grow = layer.animate([
				{ top: r.top + 'px', left: r.left + 'px', width: r.width + 'px', height: r.height + 'px' },
				{ top: '0px', left: '0px', width: window.innerWidth + 'px', height: window.innerHeight + 'px' }
			], timing);
			pic.animate([{ transform: 'scale(' + scale + ')' }, { transform: 'scale(1)' }], timing);
			veil.animate([{ opacity: 1 }, { opacity: 0 }], timing);

			var gone = false;
			function go() {
				if (gone) return;
				gone = true;
				window.location.assign(href);
			}
			grow.onfinish = go;
			setTimeout(go, GROW + 150);
		});
	});

	// Coming back from the case through the history: the page may be restored
	// exactly as it was left, with the picture still filling the window.
	window.addEventListener('pageshow', function (e) { if (e.persisted) reset(); });
})();
