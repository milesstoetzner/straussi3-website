# Straussi3 Website

Website of the Straussi3, the student dormitory Straußäcker III in Stuttgart, in German and English.

- Link: https://straussi3.de
- Link (alternative): https://milesstoetzner.github.io/straussi3-website (redirects to straussi3.de)
- Repo: https://github.com/milesstoetzner/straussi3-website
- Subtenancy: https://untermiete.straussi3.de

## Development

```sh
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview  # serve the production build
npm run lint
```

## Structure

- `src/content/de.tsx`, `src/content/en.tsx` – all page texts per language (same shape, typed in `src/i18n/types.ts`)
- `src/content/impressum.md`, `src/content/datenschutz.md` – legal pages (German only, as on the original site)
- `src/i18n/LanguageContext.tsx` – language state, persisted in `localStorage`, defaults to the browser language
- `src/pages/` – one component per page, `src/components/` – header, footer, hero, embeds
- `src/assets/` – photos from the original site and the logo, redrawn as SVG (`logo.svg`, also used as favicon)
- `src/content/instagram.ts` – Instagram posts shown on the home page (shortcodes from post URLs)
- `src/search/` – client-side search over all page texts; results jump to the section's heading
- `src/components/ConsentEmbed.tsx` – consent gate for third-party embeds (Google Maps, Google Sheets, Instagram)

## Routes

`/`, `/hausmeister`, `/wore`, `/wohnen`, `/impressum`, `/datenschutz`. The old `/english-version/*` URLs
redirect to the matching page and switch the language to English.

The app is a single-page app, so the web server must serve `index.html` for all of these paths.

## Deployment

Every push to `main` runs `.github/workflows/deploy.yml`, which lints, builds and publishes `dist/` to
GitHub Pages. In the repository settings, set **Pages → Source** to **GitHub Actions** once.

The site is built for `https://<user>.github.io/<repo>/`. To serve it from a custom domain
(e.g. `straussi3.de`), add the domain to `public/CNAME`; the workflow then builds for `/` and
GitHub Pages picks the domain up from that file.
