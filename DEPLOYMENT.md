# Deployment Guide — The Digital Plant

This project is prepared for deployment on Vercel.

## 1. Install and test locally

```bash
npm install --no-audit --no-fund
npm run preflight
npm run build
npm run dev
```

Open:

```bash
http://localhost:3000
```

## 2. Create a GitHub repository

```bash
git init
git add .
git commit -m "Launch The Digital Plant"
```

Create a GitHub repository, then:

```bash
git remote add origin https://github.com/YOUR_USERNAME/the-digital-plant.git
git branch -M main
git push -u origin main
```

## 3. Import into Vercel

- Open Vercel
- Add New Project
- Import the GitHub repository
- Framework preset: Next.js
- Build command: `npm run build`
- Install command: `npm install`

## 4. Add environment variables

In Vercel Project Settings → Environment Variables:

```bash
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GA_ID=
NEWSLETTER_PROVIDER=
NEWSLETTER_API_KEY=
NEWSLETTER_PUBLICATION_ID=
CONTACT_PROVIDER=
CONTACT_API_KEY=
CONTACT_TO_EMAIL=hello@yourdomain.com
CONTACT_FROM_EMAIL=website@yourdomain.com
```

At launch, only `NEXT_PUBLIC_SITE_URL` is required.

## 5. Connect the domain

In Vercel Project Settings → Domains, add your domain.

Then update DNS at the registrar using the records Vercel provides.

## 6. Before public launch

Check:

- Home page loads
- Articles load
- Category pages load
- Tools work
- Resources download
- `/sitemap.xml` loads
- `/robots.txt` loads
- `/rss.xml` loads
- Privacy and Terms pages load
- Contact and newsletter forms return a safe response
- Mobile layout looks good
- `npm run build` passes

## 7. Post-launch

Submit the domain to:

- Google Search Console
- Bing Webmaster Tools

Then add analytics and newsletter provider integration.
