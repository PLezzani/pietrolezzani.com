/*
 * video-in-view.js
 * A product loop weighs more than everything else on the page, so it is not
 * fetched until the reader reaches it: the markup carries preload="none" and
 * a poster, and this script starts the video only when it comes into view,
 * pausing it when it leaves.
 *
 * The controls are in the markup, not added here: without this script, or
 * without IntersectionObserver, the video shows its poster and can still be
 * played by hand. This file takes them away only once it has taken charge,
 * and puts them back the moment it cannot, which is what happens when the
 * reader asks for reduced motion or a phone refuses to autoplay.
 */
(function () {
	var videos = Array.prototype.slice.call(document.querySelectorAll('video[data-in-view]'));
	if (!videos.length) return;

	var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');

	var io = null;
	function handOver() {
		// the observer goes too, or it would start the loop again on the next scroll
		if (io) { io.disconnect(); io = null; }
		videos.forEach(function (v) { v.pause(); v.setAttribute('controls', ''); });
	}
	if (reduce.matches || !('IntersectionObserver' in window)) { handOver(); return; }

	// from here the script is in charge, so the bar goes
	videos.forEach(function (v) { v.removeAttribute('controls'); });

	io = new IntersectionObserver(function (entries) {
		entries.forEach(function (e) {
			var v = e.target;
			if (e.isIntersecting) {
				v.preload = 'auto';
				var p = v.play();
				// autoplay can still be refused, on a phone saving data for one
				if (p && p.catch) p.catch(function () { v.setAttribute('controls', ''); });
			} else {
				v.pause();
			}
		});
	}, { threshold: 0.25 });

	videos.forEach(function (v) { io.observe(v); });
	reduce.addEventListener && reduce.addEventListener('change', function () { if (reduce.matches) handOver(); });
})();
