# Guida al tuo sito — Giacomo Favitta

## 1. Cosa c'è dentro la cartella

- `index.html` → la home con le porte (Musicista, Insegnante, Producer, Blog, Portfolio)
- `musicista.html`, `insegnante.html`, `producer.html` → le tre pagine-profilo
- `portfolio.html` → Solista / Duo / Trio con spazi per video e audio
- `blog.html` → il blog
- `style.css` → la grafica (non serve toccarlo)
- `i18n.js` → tutti i testi nelle tre lingue (non serve toccarlo)
- `articoli/` → qui vivono gli articoli del blog

## 2. Pubblicare il sito su GitHub (dal browser, senza programmi)

1. Crea un account su github.com (Sign up).
2. In alto a destra: "+" → "New repository".
3. Nome del repository: scrivi esattamente `iltuonome.github.io` (usa il tuo username GitHub al posto di "iltuonome"). Metti "Public" → "Create repository".
4. Clicca "uploading an existing file". Trascina dentro TUTTI i file e la cartella `articoli`. In fondo: "Commit changes".
5. Vai su "Settings" → "Pages". Sotto "Branch" scegli `main` e `/ (root)` → "Save".
6. Dopo circa un minuto il sito è online su `https://iltuonome.github.io`

## 3. Mettere la tua foto

1. Prepara una foto quadrata, chiamala `ritratto.jpg`.
2. Caricala nel repository (stesso punto in cui hai messo gli altri file).
3. Apri `musicista.html` su GitHub, clicca la matita (Edit).
4. Trova questa riga:
   `<div class="portrait">La tua foto<br>(ritratto.jpg)</div>`
5. Sostituiscila con:
   `<img class="portrait" src="ritratto.jpg" alt="Giacomo Favitta">`
6. "Commit changes". Ripeti per `insegnante.html` e `producer.html`.

## 4. Aggiungere un articolo al blog

Ogni articolo sono DUE piccoli passi:

PASSO A — scrivi l'articolo
- Crea un file di testo con estensione `.md` (es. `viaggio-a-madrid.md`).
- Scrivilo in Markdown (vedi l'esempio in `articoli/primo-articolo.md`).
- Caricalo nella cartella `articoli/`.

PASSO B — aggiungilo alla lista
- Apri `articoli/lista.json`, clicca la matita.
- Aggiungi un blocco come questo (la virgola separa gli articoli):

```
[
  {
    "file": "viaggio-a-madrid.md",
    "title": "Viaggio a Madrid",
    "date": "Luglio 2026",
    "excerpt": "Una riga di anteprima."
  },
  {
    "file": "primo-articolo.md",
    "title": "Il primo passo nello spazio",
    "date": "Giugno 2026",
    "excerpt": "Benvenuti nel mio diario."
  }
]
```

- L'articolo più in alto nella lista appare per primo. "Commit changes".

## 5. Aggiungere video YouTube o brani SoundCloud al portfolio

Apri `portfolio.html`, clicca la matita.

VIDEO YOUTUBE:
- Trova il blocco con `media-ph` (c'è un commento che lo spiega).
- Prendi il codice del video: in `youtu.be/abc123XYZ` il codice è `abc123XYZ`.
- Cancella la riga `<div class="media-ph" id="solo_vph"></div>`
- Togli i simboli di commento dalla riga dell'iframe e metti il codice al posto di `VIDEO_ID`.

SOUNDCLOUD:
- Sul brano: Share → Embed → copia il link che sta dopo `url=`.
- Incollalo al posto di `SOUNDCLOUD_TRACK_URL` nell'iframe SoundCloud, togliendo i simboli di commento.

## 6. Cambiare i testi

Tutti i testi (italiano, inglese, spagnolo) sono in `i18n.js`. Apri il file, cerca la frase da cambiare e modificala. Le tre lingue sono nei blocchi `it:`, `en:`, `es:`.

---
Il pulsante in alto a destra (IT / EN / ES) cambia lingua in tutto il sito e ricorda la scelta.
