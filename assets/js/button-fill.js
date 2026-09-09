/*
 * button-fill.js
 * The hover colour spreads from wherever the cursor crossed the edge, instead
 * of replacing the whole button at once.
 *
 * All this file does is record the entry point. The growth itself is a CSS
 * transition on a registered custom property, so if this script never loads,
 * or the browser has no @property, the button still turns accent on hover:
 * it just does it the way it did before.
 */
(function () {
	var btns = document.querySelectorAll('.btn-primary');
	if (!btns.length) return;
	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

	Array.prototype.forEach.call(btns, function (b) {
		b.addEventListener('pointerenter', function (e) {
			// a keyboard focus or a synthetic event has no position: leave the
			// default centre origin alone rather than filling from a corner
			if (!e.clientX && !e.clientY) return;
			var r = b.getBoundingClientRect();
			b.style.setProperty('--btn-x', Math.round(e.clientX - r.left) + 'px');
			b.style.setProperty('--btn-y', Math.round(e.clientY - r.top) + 'px');
		});
	});
})();
