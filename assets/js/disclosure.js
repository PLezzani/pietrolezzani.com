/*
 * disclosure.js
 * On a phone the three situations collapse to their titles: each title
 * becomes a button, and the sentence under it opens only for the reader who
 * recognises the situation. On a wider screen nothing happens, because there
 * the sentence sits beside the title and costs no height at all.
 *
 * The markup is the plain one, sentence visible. This script is the only
 * thing that hides it, and it builds the buttons itself, so without script,
 * or with a script that fails, every sentence stays on the page and no title
 * pretends to be a control it is not.
 */
(function () {
	var rows = Array.prototype.slice.call(document.querySelectorAll('[data-disclosure]'));
	if (!rows.length) return;
	var narrow = window.matchMedia('(max-width: 720px)');

	function collapse(row) {
		var h = row.querySelector('h3'), p = row.querySelector('p');
		if (!h || !p || h.querySelector('button')) return;
		var b = document.createElement('button');
		b.type = 'button';
		b.className = 'disclosure';
		b.setAttribute('aria-expanded', 'false');
		b.setAttribute('aria-controls', p.id);
		var label = document.createElement('span');
		label.textContent = h.textContent;
		var sign = document.createElement('span');
		sign.className = 'disclosure-sign';
		sign.setAttribute('aria-hidden', 'true');
		b.appendChild(label);
		b.appendChild(sign);
		h.textContent = '';
		h.appendChild(b);
		p.hidden = true;
		b.addEventListener('click', function () {
			var open = b.getAttribute('aria-expanded') === 'true';
			b.setAttribute('aria-expanded', String(!open));
			p.hidden = open;
		});
	}

	function expand(row) {
		var h = row.querySelector('h3'), p = row.querySelector('p');
		var b = h && h.querySelector('button');
		if (b) h.textContent = b.firstChild.textContent;
		if (p) p.hidden = false;
	}

	function apply() { rows.forEach(narrow.matches ? collapse : expand); }

	apply();
	if (narrow.addEventListener) narrow.addEventListener('change', apply);
})();
