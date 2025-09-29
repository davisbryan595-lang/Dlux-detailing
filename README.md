# D-LUX Detailing — Albuquerque, NM

Production-ready single-page site built with Next.js App Router, TypeScript, and Tailwind CSS v4 tokens themed from the attached logo.

- Phone: (505) 557-0590 (tel:+15055570590)
- Email: Do620322@gmail.com (mailto:Do620322@gmail.com)

## Images
All cinematic images are generated with WEBP/JPG and mobile/medium/large sizes in `/public/img/**`. Logo is imported from the provided source.

## Contact Form
This project posts to Formspree. Replace the placeholder ID in `components/contact-form.tsx`:

\`\`\`ts
const FORMSPREE_ID = "your-formspree-id" // replace with your ID (e.g., "abcdxyz1")
\`\`\`

If the request fails, a mailto fallback opens with pre-filled content.

## Development & Deploy
- Designed for the v0 Next.js runtime; no additional config required.
- Publish with the “Publish” button in v0 to Vercel.
- For a local Next.js export, download ZIP and follow DEPLOY.md.

## Accessibility
Skip link, semantic landmarks, labelled controls, and prefers-reduced-motion respected.

## Checklist of images (filenames, alts, captions)
See `IMAGES-CHECKLIST.md`.
