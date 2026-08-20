# Audit contenuti & esperienza — pietrolezzani.com

Data: 2026-08-20 · Base: commit `9f1d791` · Metodo: analisi statica di tutte le 23 pagine
(contenuti, SEO on-page, accessibilità WCAG 2.1 AA, struttura, performance).

**Come usare questo file**: è un backlog. Ogni voce ha ID, priorità, file coinvolti e
criterio di accettazione (AC). Lavorare una voce per volta, un commit per voce
(messaggio: `AUDIT-XX: descrizione`). Spuntare la casella a fix verificato.
Le voci marcate ⚠️ richiedono input/decisioni di Pietro prima di procedere.

---

## P0 — Critici: contenuti demo del template visibili al pubblico

Il tema acquistato ("PixelPier" di Vamtam) ha lasciato contenuti dimostrativi
mai sostituiti. Oggi il sito comunica dati di contatto e identità **di qualcun altro**.

- [x] **AUDIT-01 · Footer con contatti demo su tutte le pagine (tranne home)** ✅ 2026-08-20
  Fatto: tel `+39 392 0896035`, email `info@pietrolezzani.com`, indirizzo rimosso.
  Nota: restano 2 menzioni "PixelPier" nel corpo di About → coperte da AUDIT-03.
  Il footer mostra: tel `1-800-356-8933` (numero USA demo, 22 occorrenze),
  email `studio@pixelpier.com` (22 occ.), indirizzo "Seventh Ave 7, New York City".
  ⚠️ Servono i contatti reali da usare (email; telefono e indirizzo: mostrare o no?).
  File: tutte le pagine tranne `index.html` (footer replicato in ogni HTML).
  AC: `grep -ri "pixelpier\|1-800-356\|Seventh Ave" --include="*.html" .` → 0 risultati
  nei contenuti visibili (i path del tema `pixelpiernyc` in CSS/asset sono ok e restano).

- [x] **AUDIT-02 · Social placeholder nel footer** ✅ 2026-08-20
  Fatto: rimosse le voci Behance e Twitter; corretti anche gli URL generici
  `instagram.com` / `linkedin.com` (presenti su tutte le pagine tranne home e contact)
  con i profili reali. Restano solo Instagram + LinkedIn, coerenti su tutto il sito.
  Link generici `https://twitter.com/home` e `https://www.behance.net` (86 occ. ciascuno).
  LinkedIn e Instagram sono invece corretti (`/in/pietrolezzani/`, `pietro_lezzani`).
  ⚠️ Decidere: Pietro ha profili Behance/X reali da linkare, o si rimuovono le due icone?
  File: tutte le pagine con footer. AC: nessun link social punta a homepage generiche.

- [ ] **AUDIT-03 · Pagina About = testo demo dell'agenzia**
  L'intera pagina parla di "PixelPier", "award-winning agency based in New York",
  team, uffici ("Office space / 2023"), con foto stock del demo.
  ⚠️ Serve la bio reale di Pietro (chi è, cosa fa, per chi; eventuali foto proprie).
  Riscrivere i testi mantenendo layout e struttura dei blocchi (stesse sezioni, stessi tag).
  File: `about/index.html`. AC: zero riferimenti a PixelPier/team/New York; il testo
  parla di Pietro in prima persona (coerente con "Freelance Digital Designer").

- [ ] **AUDIT-04 · Privacy Policy = placeholder WordPress**
  Contiene letteralmente "Suggested text:", cita `pixelpiernyc.vamtam.com`, commenti
  e Gravatar (funzioni che il sito statico non ha). Pietro opera in Italia → GDPR.
  Nuovo testo semplice e veritiero: sito statico, nessun cookie proprio, nessun form
  di commento; hosting GitHub Pages (citare i log tecnici di GitHub); titolare e contatto.
  ⚠️ Confermare titolare (nome/contatto) e cosa raccoglie davvero il form contatti (AUDIT-06).
  File: `privacy-policy/index.html`. AC: niente "Suggested text", niente URL demo,
  informativa coerente con le funzioni reali del sito.

- [x] **AUDIT-05 · Email demo residua nella pagina Contact** ✅ 2026-08-20
  Fatto: `mailto:andréwkaplan@gmail.com` → `info@pietrolezzani.com` in `contact/` e
  `index.html` (la CTA era presente anche in home); uniformata anche l'email visibile,
  ora `info@pietrolezzani.com` su tutto il sito.
  2 occorrenze di `mailto:andréwkaplan@gmail.com` (con carattere corrotto "é").
  File: `contact/index.html`. AC: sostituita con l'email reale o rimossa.

- [ ] **AUDIT-17 · Progetti portfolio demo o incompleti** *(segnalato da Pietro, verificato)*
  Due gruppi:
  **(a) Interamente demo — Bunero, Mood, Symphony**: cliente fittizio "Beyond Brewery",
  sito `flowcrafts.com`, anno 2022, testi del birrificio demo ("raising a glass to the
  art of brewing"); Mood ha anche il campo Services vuoto.
  ⚠️ Decidere per ciascuno: sostituire con un progetto reale (servono testi/immagini)
  oppure **rimuovere la pagina** — in tal caso: togliere le card da `/work/`, dalla home
  e dalle pagine tag; rimuovere gli URL da `sitemap.xml`; accettare il 404 sull'URL
  dismesso (GitHub Pages non fa redirect server-side; le pagine non sono ancora
  indicizzate da Google, quindi l'impatto SEO è nullo se fatto ora).
  **(b) Reali ma incompleti — Energy Co, OptiKPI, Talentware**: dati reali (cliente,
  anno, sito), ma tutti e tre contengono lo stesso paragrafo demo sotto "Challenge"
  ("In response to the dynamic shifts in their industry landscape… our client
  recognized the imperative for a comprehensive brand refresh"), identico a quello
  delle pagine demo. OptiKPI ha la tagline ripetuta due volte di fila. ⚠️ Servono i
  testi reali per Challenge/Goal/Result; rimuovere il duplicato in OptiKPI.
  File: le 6 pagine progetto + `work/index.html` + `index.html` + `tag/*` + `sitemap.xml`.
  AC: `grep -ri "Beyond Brewery\|flowcrafts\|raising a glass\|In response to the dynamic shifts" --include="*.html" .`
  → 0 risultati; ogni progetto pubblicato ha Services/Client/Year compilati e testi propri.

## P1 — Alti: funzionalità e SEO

- [ ] **AUDIT-06 · Form contatti non funzionante**
  Il form fa POST agli endpoint WordPress (`admin-ajax.php`) che non esistono più.
  Bug ereditati: campo "message" con `type="tel"`; nessuna `<label>` (solo placeholder).
  Opzioni gratuite: (a) Formspree piano free → cambio di `action` + method, minimo
  impatto sul markup; (b) sostituire il form con CTA mailto. ⚠️ Scegliere opzione ed email
  di destinazione. File: `contact/index.html`.
  AC: invio testato con successo; ogni campo ha label o `aria-label`; message è textarea/text.

- [ ] **AUDIT-07 · Meta description assenti in tutte le 12 pagine principali**
  Scrivere descrizioni uniche di 150–160 caratteri (home: chi è Pietro + valore;
  progetti: cliente + tipo di intervento; ecc.). Aggiungere `<meta name="description">`
  nell'`<head>` di ciascuna pagina. AC: presente e unica in ogni pagina; nessuna vuota.

- [ ] **AUDIT-08 · Gerarchia heading rotta**
  Home: doppio H1 ("Pietro" + "Lezzani"). Pagine progetto: nessun H1 (il titolo del
  progetto è un `<h4>`; etichette come "Services/Client/Year" sono `<h6>`; il logo "P L"
  è un `<h2>`). Correggere i tag mantenendo identiche le classi CSS (l'aspetto non
  cambia: lo stile è legato alle classi Elementor, non al tag).
  File: `index.html` + 6 pagine progetto (+ verifica sulle altre).
  AC: esattamente 1 H1 per pagina; nessun salto di livello illogico; parità visiva.

- [ ] **AUDIT-09 · 4 link rotti `/services#...` nella pagina About**
  Pre-esistenti (404 anche sul vecchio sito). ⚠️ Decidere: rimuovere i link, o farli
  puntare a `/work/`? File: `about/index.html` (probabilmente si risolve con AUDIT-03).
  AC: zero link interni a percorsi inesistenti.

- [ ] **AUDIT-10 · Blog vuoto**
  La pagina Blog non ha articoli (un solo `<article>` placeholder che linka la home),
  ma è nel menu di ogni pagina. ⚠️ Decidere: (a) togliere "Blog" dal menu e la pagina
  dal sitemap finché non ci sono contenuti; (b) pubblicare un primo articolo.
  AC: nessuna pagina raggiungibile dal menu è vuota o placeholder.

- [ ] **AUDIT-11 · Anteprime social assenti (Open Graph incompleto)**
  Nessuna `og:image` né `twitter:card`: condividendo il sito su LinkedIn/WhatsApp
  non appare alcuna immagine. Aggiungere og:image (es. ritratto o cover con logo,
  1200×630) + `twitter:card=summary_large_image` su tutte le pagine; og:image
  specifica per i progetti (la cover di ciascuno). AC: anteprima corretta nel
  validator LinkedIn Post Inspector.

## P2 — Medi: performance, accessibilità, pulizia

- [ ] **AUDIT-12 · Immagini sovrappeso**
  Le peggiori: `PietroMargot3.png` 3,0 MB (+ varianti 1,3 MB / 784 KB),
  `Project-cover-OptiKPI-min.png` 1,3 MB, `EnergyCo-Project-cover-min.png` 920 KB,
  `tech-device-with-nature-background-scaled.jpg` 860 KB.
  Ricomprimere (JPEG/WebP qualità ~80, PNG→JPEG dove non serve trasparenza),
  mantenendo gli stessi nomi file per non toccare gli HTML.
  AC: nessuna immagine >300 KB (tolleranza per 1–2 hero); parità visiva a occhio.

- [ ] **AUDIT-13 · Alt text mancanti su immagini significative**
  ~60 immagini con `alt=""`: per quelle informative (ritratti, screenshot progetti,
  cover) scrivere alt descrittivi; le puramente decorative (blur, texture) possono
  restare con alt vuoto (corretto per WCAG). File: tutte le pagine.
  AC: ogni immagine informativa ha alt significativo; decorative con `alt=""`.

- [ ] **AUDIT-14 · 406 link `target="_blank"` senza `rel`**
  Aggiungere `rel="noopener noreferrer"` a tutti (sicurezza/privacy, fix meccanico).
  AC: `grep -r 'target="_blank"' --include="*.html" . | grep -v 'rel='` → 0.

- [ ] **AUDIT-15 · Pagine tag: valutare indicizzazione**
  10 pagine `/tag/...` con contenuto scarso/duplicato (griglie di card). Opzioni:
  (a) aggiungere `<meta name="robots" content="noindex,follow">` e toglierle dal
  sitemap; (b) lasciarle se utili alla navigazione. ⚠️ Decidere.
  AC: coerenza tra sitemap, robots meta e navigazione.

- [ ] **AUDIT-16 · Nota performance (nessuna azione ora)**
  Eredità Elementor: 35 CSS collegati in ogni pagina, HTML da ~110–140 KB.
  Consolidare andrebbe contro il vincolo di semplicità e rischierebbe la parità
  visiva: si accetta. Rivalutare solo se Lighthouse (da eseguire nel browser)
  segnala problemi reali di caricamento su mobile.

---

## Verifiche trasversali dopo ogni intervento

1. Anteprima locale: `python3 -m http.server 8000` → controllo visivo delle pagine toccate.
2. `grep` dell'AC della voce completata.
3. Se cambiano URL o pagine: aggiornare `sitemap.xml` di conseguenza.
4. Commit singolo `AUDIT-XX: ...` → push → ricontrollo su https://pietrolezzani.com.

## Cosa serve da Pietro (bloccanti per le voci ⚠️)

- Email (ed eventuale telefono/indirizzo) da mostrare pubblicamente → AUDIT-01, 05, 06
- Profili Behance/X reali oppure ok a rimuovere le icone → AUDIT-02
- Bio/testi About (anche in bozza: posso rifinirli io) e foto proprie → AUDIT-03
- Dati del titolare per la privacy → AUDIT-04
- Progetti: per Bunero/Mood/Symphony scegliere tra sostituzione (con materiali reali)
  o rimozione; per Energy Co/OptiKPI/Talentware fornire testi Challenge/Goal/Result → AUDIT-17
- Decisioni: form (Formspree vs mailto) · destino link /services · Blog sì/no · tag noindex sì/no
