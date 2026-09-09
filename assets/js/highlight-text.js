/*
 * highlight-text.js
 * A sentence brightens line by line as it scrolls up the screen: each line is
 * clipped to a gradient that sweeps left to right, so the words go from the
 * muted tone to the full one in reading order.
 *
 * The base tone is never transparent. The reference this comes from hides the
 * text entirely until the sweep reaches it, which would put the loudest sentence
 * on the page behind a state only script can undo. Here the sentence is legible
 * from the first frame and the sweep only strengthens it, so a browser without
 * script, or one that fails to load this file, loses an effect and not a word.
 */
(function () {
	var el = document.querySelector('[data-highlight]');
	if (!el) return;
	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

	var text = el.textContent.replace(/\s+/g, ' ').trim();
	var lines = [];
	var ticking = false;

	// Wrap every word, read where the browser put each one, then group the words
	// that share a top edge. The line breaks belong to the browser, not to us.
	function split() {
		el.innerHTML = text.split(' ').map(function (w) {
			return '<span class="hl-w">' + w + '</span>';
		}).join(' ');

		var groups = [], last = null;
		Array.prototype.forEach.call(el.querySelectorAll('.hl-w'), function (w) {
			var top = w.offsetTop;
			if (last === null || Math.abs(top - last) > 2) { groups.push([]); last = top; }
			groups[groups.length - 1].push(w.textContent);
		});

		el.innerHTML = groups.map(function (g) {
			return '<span class="hl-line">' + g.join(' ') + '</span>';
		}).join('');
		lines = Array.prototype.slice.call(el.querySelectorAll('.hl-line'));
		update();
	}

	function update() {
		ticking = false;
		if (!lines.length) return;
		var r = el.getBoundingClientRect();
		var vh = window.innerHeight;
		var from = vh * 0.80;                 // rect.top when the sweep starts
		var to = vh * 0.45 - r.height;        // rect.top when it is finished
		var p = (from - r.top) / (from - to);
		p = p < 0 ? 0 : p > 1 ? 1 : p;
		var n = lines.length;
		for (var i = 0; i < n; i++) {
			// each line runs through its own slice of the travel, in reading order
			var q = p * n - i;
			q = q < 0 ? 0 : q > 1 ? 1 : q;
			lines[i].style.setProperty('--hl', (q * 100).toFixed(2) + '%');
		}
	}

	window.addEventListener('scroll', function () {
		if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
	}, { passive: true });

	var resizeTimer;
	window.addEventListener('resize', function () {
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(split, 150);
	});

	split();
	el.classList.add('is-split');
})();
