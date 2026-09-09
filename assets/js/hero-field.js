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
		if (idle && !reduce) {
			// nobody is pointing: the chosen region drifts slowly so the page is not dead
			var t = now / 1000;
			tx = w * (0.66 + 0.16 * Math.cos(t * 0.19));
			ty = h * (0.50 + 0.30 * Math.sin(t * 0.14));
		}
		px += (tx - px) * 0.10;
		py += (ty - py) * 0.10;
		for (var j = 0; j < rows; j++) {
			for (var i = 0; i < cols; i++) {
				var x = ox + i * GAP, y = oy + j * GAP;
				var dx = x - px, dy = y - py;
				var d = Math.sqrt(dx * dx + dy * dy);
				var k = d < RADIUS ? 1 - d / RADIUS : 0;
				k = k * k;
				var s = SIZE + 3 * k;
				var a = 0.18 + 0.82 * k;
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
