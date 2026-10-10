# Straußi 3 website

React rewrite of [straussi3.de](https://www.straussi3.de/), the website of the Straußäcker III student
dormitory in Stuttgart. Texts and pictures are taken over from the original Google Sites page; the site is
available in German and English via the language switch in the header.

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
