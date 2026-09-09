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

	var inHero = [], later = [];
	all.forEach(function (el) { (el.closest('.hero') ? inHero : later).push(el); });

	// the hero has nothing to wait for
	window.requestAnimationFrame(function () { inHero.forEach(show); });

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
