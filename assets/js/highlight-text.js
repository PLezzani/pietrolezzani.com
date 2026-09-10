/*
 * highlight-text.js
 * The bridge sentence is read to the visitor by the scroll. The section is
 * taller than the screen and its content stays pinned while the page moves,
 * so the scroll becomes a progress bar: each word goes from the muted tone to
 * the full one in reading order, staggered so the sentence finishes a little
 * before the pin lets go.
 *
 * The muted tone is never transparent and is applied only once this script
 * has split the words, so a browser without script, or one that fails to load
 * this file, sees the whole sentence in full ink and loses an effect, not a
 * word. Under prefers-reduced-motion the CSS unpins the section and this
 * script leaves every word in full ink.
 */
(function () {
	var section = document.querySelector('.bridge');
	var el = section && section.querySelector('[data-highlight]');
	if (!el) return;

	var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
	var fine = window.matchMedia('(hover: hover) and (pointer: fine)');
	var raf = null;

	// A soft spotlight of weight. It follows the pointer when there is one and
	// otherwise drifts across the sentence with the scroll, so the effect is
	// there on a phone too. The font is variable between 400 and 600; the
	// sentence sits at 500 and a word under the spotlight rises toward 600.
	var hover = false, px = 0, py = 0;           // pointer, when over the section
	var sx = window.innerWidth / 2, sy = window.innerHeight / 2; // spotlight, eased

	// Wrap every word once. Whitespace between spans keeps the line breaks
	// where the browser wants them.
	var text = el.textContent.replace(/\s+/g, ' ').trim();
	el.innerHTML = text.split(' ').map(function (w) {
		return '<span class="hl-w">' + w + '</span>';
	}).join(' ');
	var words = Array.prototype.slice.call(el.querySelectorAll('.hl-w'));
	el.classList.add('is-split');

	// The two tones come from the tokens, so a palette change never has to be
	// repeated here.
	function token(name) {
		var v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
		var m = /^#([0-9a-f]{6})$/i.exec(v);
		if (!m) return null;
		var n = parseInt(m[1], 16);
		return [n >> 16 & 255, n >> 8 & 255, n & 255];
	}
	var ink = token('--color-on-surface-inverse') || [0, 0, 0];
	var muted = token('--color-on-surface-inverse-faint') || [189, 187, 181];

	function clamp(v) { return v < 0 ? 0 : v > 1 ? 1 : v; }

	// Reading order across the first 58% of the travel, each word taking 32%
	// of it to turn, eased out so a word arrives quickly and settles slowly.
	// The numbers are the reference's; the last word is done at 90%.
	function update() {
		raf = null;
		if (reduce.matches) {
			words.forEach(function (w) { w.style.color = ''; w.style.fontWeight = ''; });
			return;
		}
		var r = section.getBoundingClientRect();
		var travel = Math.max(r.height - window.innerHeight, 1);
		var o = clamp(-r.top / travel);

		// where the spotlight wants to be, and how fast it gets there
		var follow = hover && fine.matches;
		var tx = follow ? px : window.innerWidth * (0.16 + 0.68 * o);
		var ty = follow ? py : window.innerHeight * (0.42 + 0.16 * Math.sin(o * Math.PI));
		var ease = follow ? 0.16 : 0.11;
		sx += (tx - sx) * ease;
		sy += (ty - sy) * ease;
		var radius = Math.min(Math.max(0.36 * Math.min(window.innerWidth, window.innerHeight), 210), 390);

		var n = words.length;
		for (var i = 0; i < n; i++) {
			var t = clamp((o - (i / n) * 0.58) / 0.32);
			t = 1 - Math.pow(1 - t, 3);
			var c = [0, 1, 2].map(function (k) { return Math.round(muted[k] + (ink[k] - muted[k]) * t); });
			words[i].style.color = 'rgb(' + c.join(' ') + ')';

			// weight rises only on words already read, by distance from the spotlight
			var b = words[i].getBoundingClientRect();
			var d = Math.hypot(sx - (b.left + b.width / 2), sy - (b.top + b.height / 2));
			var h = clamp(1 - d / radius) * t;
			h = h * h * (3 - 2 * h);
			words[i].style.fontWeight = String(Math.round(500 + 100 * h));
		}

		// keep easing while the spotlight is still travelling and the section is on screen
		if (r.top < window.innerHeight && r.bottom > 0 && Math.hypot(tx - sx, ty - sy) > 0.25) schedule();
	}
	function schedule() {
		if (raf === null) raf = window.requestAnimationFrame(update);
	}

	section.addEventListener('pointermove', function (e) { hover = true; px = e.clientX; py = e.clientY; schedule(); }, { passive: true });
	section.addEventListener('pointerleave', function () { hover = false; schedule(); });
	window.addEventListener('scroll', schedule, { passive: true });
	window.addEventListener('resize', schedule);
	if (reduce.addEventListener) reduce.addEventListener('change', schedule);
	update();
})();
