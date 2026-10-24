# ASHVOLT Website

A responsive, static website for the ASHVOLT creative community project. It uses separate HTML, CSS, and JavaScript folders and includes the supplied project PDFs.

## Project structure

```text
ASHVOLT-Website/
├── index.html
├── css/
│   ├── style.css
│   ├── animations.css
│   └── responsive.css
├── js/
│   ├── main.js
│   └── animations.js
├── assets/
│   ├── icons/
│   │   ├── ashvolt-mark.svg
│   │   └── solana.svg
│   └── images/
│       ├── ashvolt-hero.svg
│       ├── ashvolt-character.svg
│       └── ghostie-character.svg
├── documents/
│   ├── ASHVOLT_AVLT_Official_Whitepaper.pdf
│   └── ASHVOLT_AVLT_Roadmap.pdf
└── README.md
```

## Preview locally

1. Extract the ZIP.
2. Open `index.html` in a modern browser.
3. For a more realistic local-server preview, open the folder in VS Code and use the Live Server extension, or run `python -m http.server 8000` from this folder and visit `http://localhost:8000`.

This is a static website; no build step or package installation is required.

## Deploy

Upload the complete project folder to a static host such as Netlify, Vercel, or GitHub Pages. Keep the folder structure intact so the CSS, JavaScript, images, and document download links continue to work.

## Update links and documents

- Social/community URLs are in `index.html` in the section with `id="community"`.
- The whitepaper download expects `documents/ASHVOLT_AVLT_Official_Whitepaper.pdf`.
- The roadmap download expects `documents/ASHVOLT_AVLT_Roadmap.pdf`.
- Keep the supplied PDFs pre-launch unless official verified details are available. The page deliberately does not claim a token contract address, launch date, supply, or financial return.
- The Solana mark is a locally included SVG. Confirm any brand usage requirements before publishing commercially.

## Notes

- No game is included in this version, as requested.
- The character illustrations in `assets/images/` are original vector artwork created for this website package. Replace them with approved official character art if you have final brand assets.
- Google Fonts are loaded from the web; if offline, the site falls back to system fonts.
