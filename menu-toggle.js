/*
 * menu-toggle.js — apertura/chiusura del menu hamburger.
 *
 * Perché esiste: il sito è un export statico di WordPress. Il widget "nav menu"
 * di Elementor Pro carica il suo comportamento da un chunk webpack
 * (elementor-pro/assets/js/nav-menu.<hash>.bundle.min.js) che non è mai stato
 * incluso nell'export, quindi su mobile l'hamburger non rispondeva al click.
 * Il CSS del tema è già a posto: mostra il menu quando il toggle ha la classe
 * "elementor-active". Questo script si limita a mettere e togliere quella classe,
 * replicando il comportamento originale. Nessuna dipendenza.
 */
(function () {
	'use strict';

	var TOGGLE = '.elementor-menu-toggle';

	function dropdownOf(toggle) {
		var el = toggle.nextElementSibling;
		while (el && !el.classList.contains('elementor-nav-menu__container')) {
			el = el.nextElementSibling;
		}
		return el;
	}

	function setState(toggle, open) {
		var dropdown = dropdownOf(toggle);
		toggle.classList.toggle('elementor-active', open);
		toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
		if (!dropdown) return;
		dropdown.setAttribute('aria-hidden', open ? 'false' : 'true');
		if (open) {
			// Elementor anima da 0 a --menu-height: serve l'altezza reale del contenuto.
			dropdown.style.setProperty('--menu-height', dropdown.scrollHeight + 'px');
		}
	}

	function closeAll(except) {
		document.querySelectorAll(TOGGLE + '.elementor-active').forEach(function (t) {
			if (t !== except) setState(t, false);
		});
	}

	document.addEventListener('click', function (e) {
		var toggle = e.target.closest ? e.target.closest(TOGGLE) : null;

		if (toggle) {
			var open = !toggle.classList.contains('elementor-active');
			closeAll(toggle);
			setState(toggle, open);
			return;
		}

		// Un click su una voce del menu, o fuori dal menu, richiude.
		var open = document.querySelector(TOGGLE + '.elementor-active');
		if (!open) return;
		var dropdown = dropdownOf(open);
		if (!dropdown || !dropdown.contains(e.target) || e.target.closest('a')) {
			setState(open, false);
		}
	});

	// Il toggle è un div con role="button": va azionabile anche da tastiera.
	document.addEventListener('keydown', function (e) {
		if (e.key !== 'Enter' && e.key !== ' ' && e.key !== 'Spacebar') return;
		var toggle = e.target.closest ? e.target.closest(TOGGLE) : null;
		if (!toggle) return;
		e.preventDefault();
		setState(toggle, !toggle.classList.contains('elementor-active'));
	});

	document.addEventListener('keydown', function (e) {
		if (e.key === 'Escape') closeAll();
	});
})();
