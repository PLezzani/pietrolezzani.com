/*
 * hero-field.js
 * Interactive ground for the hero: a grid of identical small squares, and one
 * region near the pointer where a few of them are chosen and turn accent.
 * No dependencies, no build step. Respects prefers-reduced-motion (renders once,
 * still) and stops drawing while the hero is off screen.
 *
 * A reel could take the same slot one day; the mask on .hero-field in site.css
 * is written to work whatever fills it.
 */
(function () {
	var canvas = document.querySelector('.hero-field');
	if (!canvas || !canvas.getContext) return;
	var hero = canvas.parentNode;
	var ctx = canvas.getContext('2d');
	var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	var SPEED = 1.5;     // drift and pointer follow, relative to the first pass
	var BREATH = 0.28;   // how far the region swells and shrinks, 0 keeps it fixed
	var GAP = 28;        // grid pitch, px
	var SIZE = 2;        // square side at rest, px
	var RADIUS = 210;    // reach of the pointer, px
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
			// nobody is pointing: the region drifts on its own. It stays right of
			// centre, where the copy is not, and above the masked band, because a
			// chosen region that fades out on its own reads as a fault.
			tx = w * (0.66 + 0.16 * Math.cos(t * 0.19 * SPEED));
			ty = h * (0.44 + 0.20 * Math.sin(t * 0.14 * SPEED));
		}
		// The region breathes: its reach swells and shrinks on its own. Only squares
		// inside it are touched, so the grid outside stays exactly as it was.
		var reach = RADIUS * (1 + BREATH * Math.sin(t * 0.45 * SPEED));
		var ease = Math.min(0.10 * SPEED, 0.9);
		px += (tx - px) * ease;
		py += (ty - py) * ease;
		for (var j = 0; j < rows; j++) {
			for (var i = 0; i < cols; i++) {
				var x = ox + i * GAP, y = oy + j * GAP;
				var dx = x - px, dy = y - py;
				var d = Math.sqrt(dx * dx + dy * dy);
				var k = d < reach ? 1 - d / reach : 0;
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
