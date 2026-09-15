/*
 * case-arrival.js
 * The second half of the passage from the home to a case. The page opens
 * with the card's picture at full screen, painted by CSS before anything
 * else, and this script moves that same picture down and in until it sits
 * exactly on the case's own hero, same place, same size, same crop. Then it
 * steps aside and the real hero is simply there: the reader sees one picture
 * that travelled from the card to the top of the case, not a copy leaving.
 *
 * The hero's position depends on how many lines the title takes at this
 * width, which is why this is measured rather than written in CSS, and why it
 * waits for the fonts: the title settles only once its face has loaded.
 */
(function () {
	var root = document.documentElement;
	if (!root.classList.contains('from-home')) return;

	var hero = document.querySelector('.case-figure img');
	var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
	function release() { root.classList.remove('from-home'); }
	if (!hero || reduce.matches || !('animate' in Element.prototype)) { release(); return; }

	// The picture travels towards a hero measured where the page stands now, so
	// a scroll while it is in flight would have it land beside its target. The
	// page is held still for as long as the arrival lasts and not a moment
	// longer: every way out of the animation passes through unlock, including
	// the fallback, and a last timer releases the page even if none of them is
	// ever reached. Nothing is done to overflow, because hiding the scrollbar
	// would shift the layout by its width and move the very hero being aimed
	// at; the reader's gestures are refused instead.
	var scrollKeys = { 32: 1, 33: 1, 34: 1, 35: 1, 36: 1, 38: 1, 40: 1 };
	function refuse(e) { if (e.cancelable) e.preventDefault(); }
	function refuseKey(e) {
		var t = e.target || {};
		if (t.isContentEditable || t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.tagName === 'SELECT') return;
		if (scrollKeys[e.keyCode]) refuse(e);
	}
	var locked = false;
	function lock() {
		if (locked) return;
		locked = true;
		window.addEventListener('wheel', refuse, { passive: false });
		window.addEventListener('touchmove', refuse, { passive: false });
		window.addEventListener('keydown', refuseKey);
	}
	function unlock() {
		if (!locked) return;
		locked = false;
		window.removeEventListener('wheel', refuse, { passive: false });
		window.removeEventListener('touchmove', refuse, { passive: false });
		window.removeEventListener('keydown', refuseKey);
	}
	lock();
	setTimeout(unlock, 3000);

	var started = false;
	function start() {
		if (started) return;
		started = true;

		var r = hero.getBoundingClientRect();
		var sx = window.scrollX, sy = window.scrollY;
		var w = window.innerWidth, h = window.innerHeight;

		// Placed in page coordinates, not on the screen, so that if the reader
		// scrolls while it moves, the picture and the hero it is heading for
		// move together.
		var layer = document.createElement('div');
		layer.className = 'case-transition is-arriving';
		layer.setAttribute('aria-hidden', 'true');
		layer.style.top = sy + 'px';
		layer.style.left = sx + 'px';
		layer.style.width = w + 'px';
		layer.style.height = h + 'px';
		var pic = document.createElement('img');
		pic.src = hero.currentSrc || hero.src;
		pic.alt = '';
		layer.appendChild(pic);
		document.body.appendChild(layer);

		// the CSS cover gives way to the copy in the same frame: they are the
		// same picture in the same place, so nothing is seen to change
		release();

		var move = layer.animate([
			{ top: sy + 'px', left: sx + 'px', width: w + 'px', height: h + 'px' },
			{ top: (r.top + sy) + 'px', left: (r.left + sx) + 'px', width: r.width + 'px', height: r.height + 'px' }
		], { duration: 1200, delay: 100, easing: 'cubic-bezier(0.76, 0, 0.24, 1)', fill: 'forwards' }); // power3 in-out

		var gone = false;
		function end() { if (!gone) { gone = true; layer.remove(); unlock(); } }
		move.onfinish = end;
		setTimeout(end, 1600);
	}

	var fonts = document.fonts && document.fonts.ready;
	if (fonts) fonts.then(start);
	setTimeout(start, fonts ? 400 : 0);
})();
