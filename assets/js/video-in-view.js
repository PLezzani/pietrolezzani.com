/*
 * video-in-view.js
 * A product loop weighs more than everything else on the page, so it is not
 * fetched until the reader reaches it: the markup carries preload="none" and
 * a poster, and this script starts the video only when it comes into view,
 * pausing it when it leaves.
 *
 * Without this script, or without IntersectionObserver, the video simply
 * shows its poster with native controls: it can still be played, it just
 * does not play by itself. The same happens when the reader asks for reduced
 * motion, where nothing should start moving on its own.
 */
(function () {
	var videos = Array.prototype.slice.call(document.querySelectorAll('video[data-in-view]'));
	if (!videos.length) return;

	var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');

	function handOver() {
		videos.forEach(function (v) { v.pause(); v.setAttribute('controls', ''); });
	}
	if (reduce.matches || !('IntersectionObserver' in window)) { handOver(); return; }

	var io = new IntersectionObserver(function (entries) {
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
