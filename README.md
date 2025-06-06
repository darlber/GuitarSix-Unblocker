# PDF.js Unblocker Extension

This browser extension unlocks download and preview restrictions on PDF.js viewers and embedded PDF files. It works automatically on supported pages, including [guitarra6.es](https://www.guitarra6.es/) and any site using PDF.js or embedding PDFs.

## Features

- Enables the download button in PDF.js viewers if blocked
- Opens the full PDF in a new tab, even if preview is restricted
- Detects and opens embedded PDF files (in `<embed>`, `<object>`, or `<iframe>` tags)
- Runs automatically on matching pages

## Installation

1. Download or clone this repository.
2. Open your browser's Extensions page (e.g., `chrome://extensions/` or `about:addons`).
3. Enable "Developer mode" or "Load unpacked extension".
4. Select this folder to load the extension.

## How it works

- On supported pages, the extension injects a script that:
  - Tries to enable download and extract the full PDF from PDF.js viewers.
  - If PDF.js is not found, looks for embedded PDF files and opens them in a new tab.

## Supported Sites

- Any site using PDF.js (e.g., `/web/viewer.html`)
- [guitarra6.es](https://www.guitarra6.es/) and similar sites with embedded PDFs

## File Overview

- `manifest.json` — Extension manifest (Manifest V3)
- `content.js` — Main logic for unlocking and extracting PDFs
- `icons/` — Extension icon
- `style.css` — (Optional) Styles for future UI
- `background.js` — (Legacy, not used in current version)

## Disclaimer

This extension is provided for educational purposes only. The author does not condone or encourage any misuse. Use at your own risk. The author is not responsible for any consequences arising from the use of this extension.
