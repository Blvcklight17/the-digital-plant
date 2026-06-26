# The Digital Plant v0.4.6 Wider Interactive Hero

This version removes unnecessary install dependencies to make Windows installation cleaner.

## Clean Windows install

Open Command Prompt, preferably as Administrator, then run:

```bash
cd C:\TheDigitalPlant_v0_4_1_work
taskkill /F /IM node.exe
rmdir /s /q node_modules
del package-lock.json
npm cache clean --force
npm install --no-audit --no-fund
npm run preflight
npm run build
npm run dev
```

Open:

```bash
http://localhost:3000
```

## Why v0.4.1 exists

v0.4 used extra packages that were not necessary for launch. They were normal, but they added more dependencies and warnings on Windows. v0.4.1 uses a built-in frontmatter parser and keeps only the core dependencies:

- next
- react
- react-dom

## Deployment

See:

```bash
DEPLOYMENT.md
```


## New in v0.4.2

- Replaced the old homepage hero metric graphic with a clean smart-factory hero image.
- Added `/public/hero-smart-factory.png`.
- Added responsive hero image styling.


## New in v0.4.3

- Rebuilt the homepage hero section around the selected smart-factory image.
- Added a hero search entry point.
- Added subtle floating platform cards.
- Added homepage metric blocks.
- Added a problem-strip linking to Industrial AI, Tools, Resources, and Labs.
- Improved responsive behavior for the hero section.


## New in v0.4.4

- Simplified the homepage hero.
- Removed floating cards, metrics, search bar, and problem strip from the first view.
- Kept the selected smart-factory image in a cleaner premium visual frame.
- Preserved the main headline, supporting text, and two clear CTAs.


## New in v0.4.5

- Removed the static plant image from the homepage hero.
- Added a custom animated interactive visual.
- Added subtle mouse-responsive motion.
- Added animated nodes, links, rings, bars, and knowledge panels.
- Kept the hero cleaner than the crowded card-based version while making it much more dynamic.


## New in v0.4.6

- Made the homepage hero container wider.
- Gave the interactive visual more horizontal space.
- Reduced the text column width slightly.
- Increased visual board height from 470px to 520px.
- Spread out nodes, panels, rings, and links so the visual feels less congested.
