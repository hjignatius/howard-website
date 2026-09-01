# howardignatius.com

Landscape and night photography by Howard Ignatius. Next.js 16 (App Router,
React 19, Tailwind v4), deployed on Vercel. Migrated off Squarespace.

## Pages

| Route | Source | Notes |
| --- | --- | --- |
| `/` | `src/app/page.tsx` | Gallery of 34 photographs with lightbox |
| `/about` | `src/app/about/page.tsx` | Bio |
| `/nocturnography` | `src/app/nocturnography/page.tsx` | "Finding Light In Darkness" essay |
| `/contact` | `src/app/contact/page.tsx` | Form → `/api/contact` |

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Photographs

Images live in `public/images/gallery/` at original resolution (~47 MB total)
and are described by `src/data/gallery.ts` — title, caption, and intrinsic
dimensions. Next.js `<Image>` handles resizing and format negotiation.

**To add a photograph:** drop the JPEG into `public/images/gallery/`, then add
an entry to `src/data/gallery.ts`. `width` and `height` must match the file's
real pixel dimensions or the layout will shift while loading:

```bash
sips -g pixelWidth -g pixelHeight public/images/gallery/your-photo.jpg
```

Ten of the 34 photographs have no title — they carry filename-derived slugs and
render untitled. Fill in `title` in `src/data/gallery.ts` to name one.

## Contact form

`POST /api/contact` validates input, then sends via the
[Resend](https://resend.com) REST API. It requires three environment variables
(see `.env.example`):

- `RESEND_API_KEY` — from the Resend dashboard
- `CONTACT_TO_EMAIL` — where submissions are delivered
- `CONTACT_FROM_EMAIL` — must be on a domain verified in Resend

Without these the route returns 500 and the form shows a friendly error; the
rest of the site is unaffected. A hidden `company` honeypot field silently
absorbs bot submissions.

Set the same three variables in **Vercel → Project → Settings → Environment
Variables** for production.

## Content provenance

Copy and images were migrated from the Squarespace site. Typos in the original
were corrected, and the contact and nocturnography pages were reworded where
they referenced the old Squarespace layout. The blog (3 posts, last updated
2015) and workshops page were intentionally not migrated.
