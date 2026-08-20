# CLAUDE.md — regole per lavorare su questo repository

## Cos'è questo progetto

Sito personale statico di Pietro Lezzani (pietrolezzani.com), freelance digital designer.
Origine: export statico di un sito WordPress + Elementor (tema "PixelPier" di Vamtam).
Hosting: GitHub Pages, deploy automatico ad ogni push su `main`. HTTPS forzato.
Lingua dei contenuti: inglese. Lingua di lavoro con l'utente: italiano.

## Vincoli non negoziabili

1. **Zero costi ricorrenti** oltre al rinnovo del dominio: non introdurre servizi,
   piani o dipendenze a pagamento. Servizi esterni solo con piano free esplicito.
2. **Niente build tool**: no npm, bundler, framework, generatori statici, CI custom.
   I file HTML/CSS/JS si servono così come sono.
3. **Parità visiva**: l'aspetto grafico non deve cambiare, salvo richiesta esplicita.
4. **SEO protetta**: non rimuovere/alterare canonical, sitemap.xml, robots.txt,
   meta tag senza motivo dichiarato. Se un intervento cambia URL o pagine,
   aggiornare `sitemap.xml` nello stesso commit.

## Regole operative (importanti: l'HTML è generato da Elementor)

- Il markup è verboso e fragile: **modifiche chirurgiche**, mai riscritture di intere
  pagine o sezioni. Individuare il nodo minimo e toccare solo quello.
- Lo stile è agganciato alle **classi CSS Elementor**, non ai tag: per correggere la
  gerarchia heading si cambia il tag (es. `h4`→`h1`) **mantenendo identiche le classi**.
- Il footer e il menu sono **replicati in ogni file HTML** (nessun include): una
  modifica al footer va applicata a tutte le pagine, idealmente via script/replace
  ripetibile, e verificata con grep.
- Non toccare `wp-content/` (asset del tema) se non per ottimizzare immagini
  mantenendo gli stessi nomi file.
- Non aggiungere `localStorage`/cookie/tracking senza richiesta esplicita.
- Encoding: file UTF-8; attenzione alle entità HTML già presenti (`&#8211;` ecc.).

## Struttura

- `index.html` — home · `about/ work/ blog/ contact/ privacy-policy/` — pagine
- `bunero/ energy-co/ mood/ optikpi/ symphony/ talentware/` — progetti portfolio
- `tag/*/` — archivi per tag · `wp-content/` — CSS/JS/immagini ereditati
- `sitemap.xml`, `robots.txt`, `CNAME` (non toccare CNAME), `AUDIT.md` (backlog)

## Flusso di lavoro

1. Prendere **una voce alla volta** da `AUDIT.md` (rispettare priorità P0→P2 e i ⚠️
   che richiedono decisioni dell'utente: se mancano, chiedere prima di procedere).
2. Anteprima locale: `python3 -m http.server 8000` e controllo visivo.
3. Verificare il criterio di accettazione (AC) della voce, spuntare la casella.
4. Un commit per voce: `AUDIT-XX: descrizione breve`. Push su `main` = pubblicazione.
5. Interventi rischiosi (multi-pagina, ristrutturazioni): branch dedicato, merge dopo verifica.

## Comandi utili

- Cerca residui template: `grep -ri "pixelpier\|1-800-356\|Seventh Ave" --include="*.html" .`
- Link _blank senza rel: `grep -r 'target="_blank"' --include="*.html" . | grep -v 'rel='`
- Immagini pesanti: `find wp-content/uploads -size +300k -exec du -h {} \; | sort -rh`
