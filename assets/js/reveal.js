/*
 * reveal.js
 * Text arrives rather than being already there: a short rise and fade, once.
 * The hero plays on load, everything else when it comes into view.
 *
 * Failure is handled in CSS, not here. The hidden state carries a delayed
 * keyframe that reveals the element on its own, and this file cancels it by
 * marking the document ready. If the file never loads, the page still reads.
 */
(function () {
	var root = document.documentElement;
	root.classList.add('reveal-ready');   // cancels the CSS failsafe

	var all = [].slice.call(document.querySelectorAll('.reveal'));
	if (!all.length) return;

	function show(el) { el.classList.add('is-in'); }

	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
		all.forEach(show);
		return;
	}

	// The hero plays on load, and so does anything marked to arrive with it: the
	// band under the hero is part of the first screen, and waiting for it to be
	// scrolled into view made it appear long after the sentence above it.
	var onLoad = [], later = [];
	all.forEach(function (el) {
		(el.closest('.hero') || el.hasAttribute('data-reveal-load') ? onLoad : later).push(el);
	});

	// Two frames, not one. The first paints the hidden state, the second starts
	// the transition from it. With a single frame a browser that runs this
	// before its first paint has nothing to move from, and the text is simply
	// there: that is what was happening on a phone.
	window.requestAnimationFrame(function () {
		window.requestAnimationFrame(function () { onLoad.forEach(show); });
	});

	if (!('IntersectionObserver' in window)) { later.forEach(show); return; }

	// fires a little before the element is fully in view, so the movement is
	// finished by the time the reader has it in front of them
	var io = new IntersectionObserver(function (entries) {
		entries.forEach(function (e) {
			if (!e.isIntersecting) return;
			show(e.target);
			io.unobserve(e.target);
		});
	}, { rootMargin: '0px 0px -12% 0px' });

	later.forEach(function (el) { io.observe(el); });
})();
