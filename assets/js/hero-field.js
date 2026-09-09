/*
 * hero-field.js
 * Interactive ground for the hero: a grid of identical small squares, and one
 * region near the pointer where a few of them are chosen and turn accent.
 * No dependencies, no build step. Respects prefers-reduced-motion (renders once,
 * still) and stops drawing while the hero is off screen.
 *
 * Phase 2: replace the canvas with a <video class="hero-media"> reel and delete
 * this file. The CSS for .hero-media is already in site.css.
 */
(function () {
	var canvas = document.querySelector('.hero-field');
	if (!canvas || !canvas.getContext) return;
	var hero = canvas.parentNode;
	var ctx = canvas.getContext('2d');
	var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	var SPEED = 1.5;     // drift and pointer follow, relative to the first pass
	var LIFE = 1;        // amplitude of the resting wave, 0 leaves the field static
	var GAP = 28;        // grid pitch, px
	var SIZE = 2;        // square side at rest, px
	var RADIUS = 170;    // reach of the pointer, px
	var CREAM = [254, 252, 246];
	var BLUE = [0, 111, 237];

	var w = 0, h = 0, cols = 0, rows = 0, ox = 0, oy = 0;
	var px = -9999, py = -9999;   // drawn pointer (eased)
	var tx = -9999, ty = -9999;   // target pointer
	var idle = true, visible = true, raf = 0;

	function resize() {
		var r = canvas.getBoundingClientRect();
		var dpr = Math.min(window.devicePixelRatio || 1, 2);
		w = r.width; h = r.height;
		canvas.width = Math.round(w * dpr);
		canvas.height = Math.round(h * dpr);
		ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
		cols = Math.ceil(w / GAP) + 1;
		rows = Math.ceil(h / GAP) + 1;
		ox = (w - (cols - 1) * GAP) / 2;
		oy = (h - (rows - 1) * GAP) / 2;
		if (reduce) { tx = px = w * 0.72; ty = py = h * 0.5; draw(0); }
	}

	function draw(now) {
		ctx.clearRect(0, 0, w, h);
		var t = reduce ? 0 : now / 1000;
		if (idle && !reduce) {
			// Nobody is pointing, which on a phone is always. The travel is wide on
			// purpose: the amplitudes are fractions of the viewport, so a timid one
			// moves a few dozen pixels on a narrow screen and reads as standing still.
			tx = w * (0.50 + 0.36 * Math.cos(t * 0.19 * SPEED));
			// Vertically it stays above the masked band: a chosen region that fades
			// out on its own reads as a fault rather than as an edge.
			ty = h * (0.42 + 0.22 * Math.sin(t * 0.14 * SPEED));
		}
		var ease = Math.min(0.10 * SPEED, 0.9);
		px += (tx - px) * ease;
		py += (ty - py) * ease;
		for (var j = 0; j < rows; j++) {
			for (var i = 0; i < cols; i++) {
				var x = ox + i * GAP, y = oy + j * GAP;
				var dx = x - px, dy = y - py;
				var d = Math.sqrt(dx * dx + dy * dy);
				var k = d < RADIUS ? 1 - d / RADIUS : 0;
				k = k * k;
				// A slow diagonal wave over the whole field, so something is moving
				// where the region is not. Two bands cross a desktop viewport, about
				// one crosses a phone, and it is the only motion a reader without a
				// pointer ever gets.
				var wave = LIFE * Math.sin(x * 0.013 + y * 0.009 - t * 0.85 * SPEED);
				var s = SIZE + 0.7 * wave + 3 * k;
				var a = 0.17 + 0.10 * wave + 0.78 * k;
				var c0 = CREAM[0] + (BLUE[0] - CREAM[0]) * k;
				var c1 = CREAM[1] + (BLUE[1] - CREAM[1]) * k;
				var c2 = CREAM[2] + (BLUE[2] - CREAM[2]) * k;
				// the chosen squares step slightly away from the pointer
				var push = 6 * k / (d || 1);
				ctx.fillStyle = 'rgba(' + (c0 | 0) + ',' + (c1 | 0) + ',' + (c2 | 0) + ',' + a.toFixed(3) + ')';
				ctx.fillRect(x + dx * push - s / 2, y + dy * push - s / 2, s, s);
			}
		}
	}

	function loop(now) {
		raf = 0;
		if (!visible) return;
		draw(now);
		raf = window.requestAnimationFrame(loop);
	}
	function start() { if (!raf && !reduce && visible) raf = window.requestAnimationFrame(loop); }

	hero.addEventListener('pointermove', function (e) {
		var r = canvas.getBoundingClientRect();
		tx = e.clientX - r.left; ty = e.clientY - r.top; idle = false;
		if (reduce) draw(0);
	});
	hero.addEventListener('pointerleave', function () { idle = true; });

	if ('IntersectionObserver' in window) {
		new IntersectionObserver(function (entries) {
			visible = entries[0].isIntersecting;
			if (visible) start();
		}).observe(hero);
	}
	document.addEventListener('visibilitychange', function () {
		if (document.hidden) visible = false; else { visible = true; start(); }
	});

	window.addEventListener('resize', resize);
	resize();
	start();
})();
