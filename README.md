# Kadir Çağrı Kuzaytepe — Portfolio

Cyber-terminal themed personal portfolio built with Vite and React 19. Bilingual (English/Turkish), accessibility-focused, and optimized for showcasing computer engineering work as case studies.

## Scripts

```bash
npm install
npm run dev      # local development
npm run build    # production build to dist/
npm run preview  # preview production build
npm test         # run Vitest suite
```

## Content Updates

- UI copy and localized content: `src/i18n/en.js`, `src/i18n/tr.js`
- Locale registry: `src/data/portfolio.js`
- Global styles and theme tokens: `src/styles/main.css`
- Static assets and images: `public/img/`

## Deployment

Build the site with `npm run build` and deploy the `dist/` folder to your static host (GitHub Pages, Netlify, Vercel, etc.).

Ensure these public files are served:

- `manifest.json`
- `robots.txt`
- `sitemap.xml`
- `og-image.png` (add your share image at this path)

## Notes

- Language preference persists in `localStorage` under `portfolio-language`.
- CV download button appears only when `cvUrl` is set in locale profile data.
