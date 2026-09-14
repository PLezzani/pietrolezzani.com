/*
 * nav-menu.js
 * On a phone the two page links move out of the bar and behind a burger, so
 * that the name, the one action and the way to the rest of the site stop
 * competing for a strip 320px wide.
 *
 * The markup is the plain one, three items side by side, and it works on its
 * own down to the narrowest screen. This script is the only thing that takes
 * the links out of the bar, and it builds the button itself: without script,
 * or with a script that fails, the links are simply there, and no burger
 * pretends to open something that nothing can open.
 *
 * The action never enters the menu. It is the one thing the site asks for and
 * it stays in sight at every width.
 */
(function () {
	var header = document.querySelector('.site-header');
	var nav = header && header.querySelector('.site-nav');
	if (!nav) return;

	var links = Array.prototype.slice.call(nav.querySelectorAll('.nav-link'));
	var action = nav.querySelector('.btn');
	if (!links.length) return;

	var narrow = window.matchMedia('(max-width: 720px)');
	var panel = null, toggle = null;

	function setOpen(open) {
		if (!panel) return;
		panel.hidden = !open;
		toggle.setAttribute('aria-expanded', String(open));
	}

	function isOpen() { return panel && !panel.hidden; }

	function build() {
		if (panel) return;

		panel = document.createElement('div');
		panel.className = 'site-nav-panel';
		panel.id = 'site-menu';
		panel.hidden = true;
		links.forEach(function (a) { panel.appendChild(a); });
		header.appendChild(panel);

		toggle = document.createElement('button');
		toggle.type = 'button';
		toggle.className = 'nav-toggle';
		toggle.setAttribute('aria-expanded', 'false');
		toggle.setAttribute('aria-controls', 'site-menu');
		toggle.setAttribute('aria-label', 'Menu');
		toggle.innerHTML = '<span class="nav-toggle-bars" aria-hidden="true"></span>';
		nav.appendChild(toggle);

		toggle.addEventListener('click', function () { setOpen(!isOpen()); });
		// a link that has just been followed leaves an open menu behind it on
		// the next page in the history cache, so it closes itself
		panel.addEventListener('click', function (e) {
			if (e.target.closest('a')) setOpen(false);
		});
	}

	function teardown() {
		if (!panel) return;
		setOpen(false);
		links.forEach(function (a) { nav.insertBefore(a, action || null); });
		panel.remove(); panel = null;
		toggle.remove(); toggle = null;
	}

	function apply() { narrow.matches ? build() : teardown(); }

	document.addEventListener('keydown', function (e) {
		if (e.key === 'Escape' && isOpen()) { setOpen(false); toggle.focus(); }
	});
	document.addEventListener('click', function (e) {
		if (isOpen() && !header.contains(e.target)) setOpen(false);
	});
	// the header slides away on the way down and would carry an open menu with
	// it, out of reach and with no way back except scrolling up
	window.addEventListener('scroll', function () { if (isOpen()) setOpen(false); }, { passive: true });

	apply();
	if (narrow.addEventListener) narrow.addEventListener('change', apply);
})();
