/*
 * nav-scroll.js
 * The header leaves on the way down and comes back on the way up, so a long
 * page reads without a bar over it while the one action is always one small
 * scroll away. No dependencies.
 *
 * Two things it deliberately does not do:
 * - it stays put under prefers-reduced-motion, where a sliding bar is motion
 *   the reader has asked not to receive;
 * - it never hides while the top of the page is in view.
 */
(function () {
	var header = document.querySelector('.site-header');
	if (!header) return;
	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

	var THRESHOLD = 8;      // px, ignores trackpad jitter and rubber banding
	var last = window.scrollY;
	var hidden = false;
	var ticking = false;

	function hide() { if (!hidden) { hidden = true; header.classList.add('is-hidden'); } }
	function show() { if (hidden) { hidden = false; header.classList.remove('is-hidden'); } }

	function update() {
		ticking = false;
		var y = Math.max(window.scrollY, 0);
		// near the top the header always stands
		if (y <= header.offsetHeight) { show(); last = y; return; }
		var delta = y - last;
		// below the threshold nothing happens and last is not moved, so small
		// steps accumulate instead of being thrown away
		if (Math.abs(delta) < THRESHOLD) return;
		if (delta > 0) hide(); else show();
		last = y;
	}

	window.addEventListener('scroll', function () {
		if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
	}, { passive: true });

	// a hidden header must come back the moment something inside it takes focus
	header.addEventListener('focusin', show);
})();
