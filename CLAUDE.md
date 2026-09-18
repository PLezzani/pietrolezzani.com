# CLAUDE.md — regole per lavorare su questo repository

## Cos'è questo progetto

Sito personale statico di Pietro Lezzani (pietrolezzani.com), freelance digital designer.
Origine: export statico di un sito WordPress + Elementor (tema "PixelPier" di Vamtam).
Hosting: GitHub Pages, deploy automatico ad ogni push su `main`. HTTPS forzato.
Lingua dei contenuti: inglese. Lingua di lavoro con l'utente: italiano.

## Riposizionamento (dal 2026-09-08, pubblicato il 2026-09-15)

Il sito è stato riposizionato: da "chi sono e cosa so fare" a "in quale momento del
tuo prodotto ha senso chiamarmi, e cosa hai in mano dopo". Il lavoro è stato fatto sul
branch `redesign` e portato su `main` il 15 settembre 2026. Le regole qui sotto
continuano a valere per ogni modifica futura.

**Fonte unica di verità per copy e struttura**: `aggiornamento-sito-piano-e-contenuti.md`,
nella root del progetto ma **volutamente non versionato** (vedi `.gitignore`): il repo è
pubblico e il documento contiene dati commerciali e nomi clienti non ancora pubblicabili.
Non committarlo, non citarne tariffe o soglie di prezzo dentro file versionati.
**Unica eccezione, decisa da Pietro il 15 settembre 2026**: la riga "Engagements start at
€8,000." in home. Era una delle due opzioni che il piano stesso proponeva per la pagina
(sezione 8, punto 4) ed è pubblicata di proposito. Tutto il resto (tariffe giornaliere,
storico, margini, nomi non confermati) resta fuori dai file versionati, commenti HTML
inclusi: i commenti arrivano al browser e stanno nel repo pubblico.

Regole del riposizionamento, che valgono per ogni modifica da qui in avanti:

1. **Il copy del documento è definitivo.** Non va migliorato, allungato, reso più caldo
   o più commerciale. Se una frase sembra brusca, è voluto.
2. **Nessun trattino lungo (`—`) in nessun testo**, meta description e alt inclusi.
3. **Nessun dato che non sia già nel documento.** I segnaposto restano segnaposto: se un
   numero non è confermato, la riga esce senza numero. Non si stima, non si arrotonda.
4. **Una sola azione per pagina**: prenotare la call. Nessuna CTA concorrente, nessun
   invito secondario (newsletter, download, PDF, CV).
5. **Parole bandite**: passionate, transformative, innovative, cutting-edge, visionary,
   game changer. Fuori anche il lessico da designer (UX/UI, service design) nel copy di
   vendita; dentro quello del cliente (roadmap, onboarding, board, scope, deadline).
6. **Mai dichiarare disponibilità** ("Available now" e simili).

Decisioni prese con Pietro l'8 settembre 2026:
- **URL invariati**: le pagine caso restano `/optikpi/`, `/talentware/`, `/energy-co/`.
  Niente prefisso `/work/`: sposterebbe URL appena presi in carico da Search Console.
- **`/energy-co/` diventa il caso Edison Risolve** (stesso URL, contenuto nuovo).
- **`/about/` è in scope** (decisione dell'11 settembre: la pagina esiste e è pubblicata).
- **Analytics: Cloudflare Web Analytics** (gratuito, senza cookie, nessun banner). Lo
  snippet è in fondo al body delle sei pagine nuove. Il dominio è passato ai nameserver
  Cloudflare il 14 settembre: i record della posta (Microsoft 365) sono tutti in DNS only,
  solo i quattro A e `www` passano dal proxy.
- **Pagine vecchie rimosse**: i sei `/tag/*/` e il PDF del CV non esistono più. `/work/`
  resta come rimando alla home, perché era indicizzata.
- Il dominio gemello `pietrolezzani.eu` viene spento il 17 settembre 2026: nessun
  intervento da questo repo.

## Vincoli non negoziabili

1. **Zero costi ricorrenti** oltre al rinnovo del dominio: non introdurre servizi,
   piani o dipendenze a pagamento. Servizi esterni solo con piano free esplicito.
2. **Niente build tool**: no npm, bundler, framework, generatori statici, CI custom.
   I file HTML/CSS/JS si servono così come sono.
3. **Parità visiva**: vale per la manutenzione ordinaria. **Sospesa sul branch
   `redesign`**, dove struttura e design cambiano di proposito: lì il riferimento è il
   documento di piano, non l'aspetto attuale.
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
- `energy-co/ optikpi/ talentware/` — le tre pagine caso
- `assets/` — CSS, JS, font, immagini e video del sito nuovo · `wp-content/` — resti del
  tema vecchio, ormai solo favicon e immagini OG
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
