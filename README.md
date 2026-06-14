# NURÉA Draft Website

Static draft website ready for GitHub + Netlify.

## Files
- `index.html` — main website
- `styles.css` — brand styling
- `app.js` — filters, language toggle, modals, WhatsApp links, rituals
- `data/products.json` — product catalog data and prices
- `assets/products/` — selected product visuals
- `assets/brand/` — brand/logo images supplied in the chat

## Before publishing
1. Replace `WHATSAPP_NUMBER` inside `app.js` with the real NURÉA WhatsApp number.
2. Review all draft prices in `data/products.json`.
3. Review product image mapping and swap any wrong primary image.
4. Review policy and FAQ wording.
5. Add final ritual images when available.

## Netlify
Deploy directly from this folder. The included `netlify.toml` publishes the root folder.
