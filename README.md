# pietrolezzani.com — sito statico

Sito personale di Pietro Lezzani (Freelance Digital Designer), versione statica
derivata dal precedente sito WordPress + Elementor (pietrolezzani.eu, GoDaddy).

## Struttura

- `index.html` — home page
- `about/`, `work/`, `blog/`, `contact/`, `privacy-policy/` — pagine principali
- `bunero/`, `energy-co/`, `mood/`, `optikpi/`, `symphony/`, `talentware/` — pagine progetto
- `tag/` — pagine di archivio per tag
- `wp-content/` — asset ereditati da WordPress (CSS del tema, JS, immagini in `uploads/`)
- `sitemap.xml`, `robots.txt` — SEO (dominio: https://pietrolezzani.com)

## Note tecniche

- Nessun build tool: i file si servono così come sono. Per l'anteprima locale:
  `python3 -m http.server 8000` dalla radice del repo.
- I percorsi interni sono relativi o root-relative: il sito funziona su qualsiasi host statico.
- Il form nella pagina Contact puntava a `admin-ajax.php` (WordPress) e NON funziona
  in versione statica: da sostituire con un servizio form gratuito o un link mailto.
- Clone originale di backup: `pietrolezzani-eu-clone-2026-08-20.tar.gz` (fuori dal repo).

## Storia della migrazione

- 2026-08-20: clonazione da pietrolezzani.eu, pulizia residui WordPress/GoDaddy,
  link riscritti, sitemap e robots.txt generati per pietrolezzani.com.
