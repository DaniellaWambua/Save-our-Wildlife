# 🌿 Save Our Wildlife

A responsive, accessible conservation campaign webpage built with semantic HTML, CSS, and vanilla JavaScript.  
Created as part of a Multimedia Applications coursework submission.

---

## 📁 Project Structure

```
wildlife/
├── index.html          # Main HTML page (structure/content)
├── css/
│   └── styles.css      # All styling — responsive & accessible
├── js/
│   └── main.js         # Video toggle behaviour
├── assets/
│   └── wildlife.mp4    # Campaign video (add your own)
└── README.md
```

> **Separation of content:** HTML handles structure, CSS handles presentation, and JavaScript handles behaviour — each in its own file.

---

## ✅ Features

| Requirement | Implementation |
|---|---|
| "Save Our Wildlife" heading | `<h1>` in `<header>` with display serif typeface |
| Embedded video with controls | `<video controls>` with `<source>` fallback |
| Description below video | Two-paragraph `<div class="description">` |
| Toggle button (hide/play) | JS toggles hidden state & play/pause |
| Accessibility | `aria-label`, `aria-pressed`, `aria-controls`, `.sr-only`, skip link, `:focus-visible`, `prefers-reduced-motion` |
| Responsive design | `clamp()` typography, `aspect-ratio: 16/9`, mobile breakpoint at 640px |

---

## 🚀 Running Locally

No build tools needed. Open `index.html` directly in a browser, or serve with:

```bash
npx serve .
```

To use your own video, place it at `assets/wildlife.mp4`.

---

## ♿ Accessibility

- Semantic landmarks: `<header>`, `<main>`, `<footer>`
- ARIA attributes on the toggle button (`aria-pressed`, `aria-controls`)
- Keyboard-navigable with visible focus rings
- Screen-reader-only labels where visual context would be lost
- Respects `prefers-reduced-motion`
- High-contrast mode support via `forced-colors` media query

---

## 📱 Responsive Design

- Fluid type scale using `clamp()`
- `aspect-ratio: 16/9` video that scales with viewport
- Full-width button on mobile
- Layout tested at 320px, 640px, 860px, and 1200px

---

*Daniella | Strathmore University — Multimedia Applications*
