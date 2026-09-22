# Kopi Kita — cafe template

A reusable cafe/coffee-shop site template. Plain HTML/CSS/JS, no build step,
deploys as-is to Cloudflare Pages/Workers, Netlify, or any static host.

## Files

- `index.html` — page structure and copy
- `styles.css` — all styling, theme controlled by CSS variables at the top
- `script.js` — mobile nav, hero entrance, newsletter form handling
- `privacy.html`, `terms.html` — **not included**, add per client (see below)

## Customizing for a new client

1. **Search the project for `[` brackets** — every `[Placeholder]` (business
   name, address, phone, founder name, year, etc.) needs a real value.
2. **Re-theme the palette** — edit the custom properties at the top of
   `styles.css` (`--ink`, `--paper`, `--rust`, `--moss`, `--brass`). Keep the
   rest of the CSS untouched; everything references these variables.
3. **Swap fonts if the brand calls for it** — update the Google Fonts link in
   `index.html` and the `--font-display` / `--font-body` variables. Avoid
   Inter, Geist, and Space Grotesk per the standing design rules for this
   project.
4. **Menu** — edit the two `<ul class="menu-list">` blocks. Add or remove
   `<li>` rows freely; the dotted leader line is pure CSS.
5. **Gallery** — the five tiles are solid-color placeholders (no stock
   photography, to avoid licensing issues). Replace with the client's own
   photos as `<img>` tags once they have them, or keep the tile treatment as
   a deliberate illustrated style — either works with the existing grid.
6. **Hero ticket / cup illustration** — hand-drawn inline SVG, no icon
   library. Recolor via `currentColor` + the `--ink` / `--rust` variables.

## Before a client site goes live — legal checklist

This template ships **without** privacy/terms pages because their content is
specific to each business (what data they collect, whether they run ads or
analytics, refund terms for any online ordering, etc.). Do not launch a
client site without going through this list:

- [ ] Write and link a real **privacy policy** (`privacy.html`) — the footer
      and newsletter form already link to it, so create the file at that path.
- [ ] Write and link a real **terms of service** (`terms.html`)
- [ ] If the business takes online orders/deposits, add a **refund policy**
- [ ] If any third-party script sets cookies (analytics, embedded maps,
      booking widgets), add a **cookie policy** and a **consent banner**
      before those scripts load — don't add either if nothing sets cookies
- [ ] Confirm the newsletter/contact form's consent checkbox and copy match
      what the business actually does with the data
- [ ] Replace the Google Maps link with the business's real listing
- [ ] Add real business registration details to the footer if required in
      their jurisdiction
- [ ] Run a contrast check on the final palette if you change it
      (`--ink` on `--paper` currently passes AA for body text)
- [ ] Test keyboard navigation: tab through nav, mobile menu, and the
      newsletter form
- [ ] Add real `alt` text to any `<img>` photos you add (the current SVGs
      are marked `aria-hidden` because they're decorative)

## Design constraints this template follows

No harsh gradients, no icon-library icons, no pure white backgrounds, no
rainbow palettes, no drop shadows, no three-card feature rows, no emoji, no
glassmorphism, no em dashes in copy, no Inter/Geist/Space Grotesk, no
checkmark bullet lists, no fake testimonials, no bento grids, no fake
terminal UI, no "it's not X, it's Y" copy, no three-tier pricing table, no
soft/pill corner radii, no purple+black palette, no radial glow orbs, no dot
grids, no sparkle icons, no animated arrows, no decorative hover animation,
no neon colors, no generic pastel palette.
