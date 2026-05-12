# MASTER PROMPT — THE CIRCUIT

*Read this file first. Read the other documents in /docs only after you've read this.*

---

## What you are building

You are building the pitch site for **The Circuit** — a premium documentary series in development. The site's only audience is development executives at premium streaming companies (Netflix, Apple TV+, HBO Max, Amazon, Hulu, Disney+) and the showrunner-level production companies that work with them (Box to Box Films, Imagine Documentaries, Religion of Sports, Words + Pictures, SpringHill).

The site is a sales document. Its only job is to make a buyer want a meeting. It is not a brochure, not a marketing page, not a landing page. It is a piece of creative writing, set in type, on a screen.

## How to read this project

There are eight files in `/docs`. Read them all before you start writing code:

```
00-master-prompt.md            ← This file. Read first.
01-logline-and-onepager.md     ← The pitch in prose.
02-character-bible.md          ← Fifteen anchor figures in the show.
03-season-one-episodes.md      ← Eight episodes, 2027.
04-season-two-episodes.md      ← Eight episodes, 2028. Olympic finale.
05-tone-and-visual-reference.md ← Design language. Read this twice.
06-site-architecture.md        ← What the site contains, section by section.
07-reference-implementation.html ← A working first-pass HTML build. See note below.
```

The reference implementation (file 07) is a working single-page HTML build that already executes most of the site. It is **not** the codebase you are continuing. It is a **design comp** — a visual reference for the aesthetic, typography, color palette, motion language, and content structure. You should:

1. Read it.
2. Open it in a browser and look at it.
3. Match or improve on its visual and tonal quality.
4. **Rebuild it properly** in the project structure described below.

Do not copy its code verbatim. Build something better-organized.

## The aesthetic, in one sentence

**Premium documentary, not reality television.** The site should sit on the same shelf as Apple TV+ documentary pages, A24 film sites, Criterion Collection essays, and high-end editorial like *The Drift*, *T Magazine*, and *Cereal*. It should feel like it was hand-built by one person with taste, not assembled from a template.

If a buyer scrolls through the site and intuits the tone of the show without watching a frame, the site has done its job.

## Non-negotiable design principles

These come from `/docs/05-tone-and-visual-reference.md`. They are not suggestions:

1. **Restraint over decoration.** No carousels. No animated counters. No glassmorphism. No "Discover" buttons. No CTAs that say "Learn More." No purple gradients. No 3D parallax. No generic "AI aesthetic" patterns.

2. **Typography does the work.** Use **Fraunces** (display serif, variable, with the wonky italic axis) and **Instrument Sans** (body) and **JetBrains Mono** (metadata strips). Do not substitute Inter, Roboto, Space Grotesk, or any other generic font. The italic Fraunces with `WONK=1` is part of the show's visual identity.

3. **Color comes from the sport.** Off-white paper backgrounds (`#f5f1e8`), bay-deep ink (`#1f0f0a`), sand accents (`#c9a876`), and a restricted "rail color" palette (Rolex green, Hermès orange, FEI navy, scarlet, sky) used only as small accents. Never as section backgrounds, never as gradients across the whole page. See file 05 for the full palette with hex codes.

4. **Motion is slow and earned.** 600–900ms eased transitions. Staggered fade-up on hero load. Scroll-triggered opacity reveals only — no parallax, no scroll-jacking. Respect `prefers-reduced-motion`.

5. **No stock photography placeholders that look like stock photography.** The reference implementation uses palette-derived gradient tiles with film-grain overlay where photos would go. This is intentional. Real photography will come in a later pass. Do not add Unsplash mountain photos.

6. **The horses matter.** Anywhere the site references horses, treat them as named characters, not decoration. The phrase "the horse is the only Olympic athlete that doesn't know it's competing" is a key line in the show's identity. Don't bury it.

7. **No marketing copywriting.** The prose in the strategy documents is the prose. Do not "improve" it, do not add CTA verbs, do not turn paragraphs into bullet points. The voice of the show is the voice of the site. If you want to change a sentence, ask first.

## Stack — what to build with

Use **Astro 5+ with Tailwind CSS 4**. Reasoning:

- Astro ships zero JS by default, which is correct for a content-driven site.
- Component-based architecture, so each section of the site is its own file.
- The cast-expansion interaction can be an island of vanilla JS or a small Alpine.js sprinkle. Do not pull in React.
- Tailwind 4 with the `@theme` directive lets us define the color palette and type scale once and inherit everywhere.
- Build output is static HTML/CSS/JS, deployable to Vercel or Netlify with zero configuration.

Self-host the typefaces from Google Fonts via `@fontsource/fraunces`, `@fontsource/instrument-sans`, `@fontsource/jetbrains-mono`. Do not link to fonts.googleapis.com in production — it's slower and adds a third-party dependency.

## Project structure to create

```
/
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── tailwind.config.js          (or @theme block in global.css for Tailwind 4)
├── public/
│   └── favicon.svg
├── src/
│   ├── pages/
│   │   └── index.astro         ← the entire single-page site
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Hero.astro          ← Act 1
│   │   ├── Logline.astro       ← Act 2
│   │   ├── World.astro         ← Act 3
│   │   ├── Cast.astro          ← Act 4 (uses CastCard.astro)
│   │   ├── CastCard.astro
│   │   ├── Arc.astro           ← Act 5 (uses Season.astro)
│   │   ├── Season.astro
│   │   ├── Look.astro          ← Act 6
│   │   ├── WhyNow.astro        ← Act 7
│   │   ├── Team.astro          ← Act 8
│   │   ├── Contact.astro       ← Act 9
│   │   └── Footer.astro
│   ├── data/
│   │   ├── cast.ts             ← The fifteen bios as a typed array
│   │   └── episodes.ts         ← Both seasons as typed arrays
│   ├── styles/
│   │   └── global.css          ← Tailwind directives + @theme + base styles
│   └── lib/
│       └── reveal.ts           ← IntersectionObserver reveal logic
└── /docs                        ← The strategy documents (this folder)
```

## Build order

Follow this sequence strictly. Do not jump ahead.

### Phase 1 — Foundation
1. Scaffold the Astro project (`npm create astro@latest`).
2. Install Tailwind, the typefaces, and Astro integrations.
3. Set up the color palette and type scale in `global.css` using Tailwind 4's `@theme` directive.
4. Create the empty component files with placeholder content.
5. Wire `index.astro` to render every component in order.
6. Get `npm run dev` working. Check that the page loads, the typefaces load, and the colors are right. **Commit.**

### Phase 2 — Content
1. Move the cast bios from the reference implementation into `src/data/cast.ts` as a typed array.
2. Move the episode lists from `/docs/03` and `/docs/04` into `src/data/episodes.ts`.
3. Populate each component with the prose from the relevant strategy doc. Do not paraphrase. Use the prose as written.
4. **Commit.**

### Phase 3 — Typography & layout
1. Get every section's type rhythm right. Compare against the reference implementation.
2. Tune spacing, line-height, max-width on prose, and section padding.
3. Test on mobile (375px), tablet (768px), and desktop (1440px).
4. **Commit.**

### Phase 4 — Interaction
1. Build the cast-card expansion. One bio open at a time per group. Inline expansion (no modal). Smooth auto-scroll so the card stays visible after click.
2. Add the IntersectionObserver-driven `[data-reveal]` fade-up on scroll.
3. Hero staggered entrance animation.
4. **Commit.**

### Phase 5 — Polish
1. Lighthouse audit. Target 95+ on all four metrics.
2. Accessibility check — keyboard navigation, focus states, alt text, ARIA on the cast cards.
3. `prefers-reduced-motion` honored everywhere.
4. Favicon (a single Fraunces lowercase "c" in `#c9a876` on `#1f0f0a` is the right call).
5. Open Graph meta tags (image can be a placeholder for now).
6. **Commit.**

### Phase 6 — Deployment
1. Deploy to Vercel (recommended) or Netlify via their GitHub integration.
2. Add a custom domain if one's been chosen. `thecircuit.show` is the target if available.
3. **Commit.**

## What "done" looks like

The site is done when all of the following are true:

- All nine acts from `/docs/06-site-architecture.md` are present, in order.
- All fifteen cast members from `/docs/02-character-bible.md` are present, with click-to-expand bios.
- All sixteen episodes (eight per season) from `/docs/03` and `/docs/04` are listed with one-line synopses.
- The typography uses Fraunces, Instrument Sans, and JetBrains Mono — and only those.
- The color palette matches `/docs/05` exactly.
- The page passes Lighthouse with 95+ on every metric.
- The page works on mobile and respects reduced-motion preferences.
- The site is deployed to a live URL.

## How to behave while building

- **Read all eight docs before writing your first line of code.** Treat the strategy as canon. The user has spent serious time getting the writing right.
- **Ask before you change prose.** If a sentence reads awkwardly to you, flag it and ask. Don't rewrite it.
- **Don't add features that weren't asked for.** No newsletter signup. No video embeds. No "Latest News" section. The site is what's in `/docs/06`. Nothing more.
- **Commit often.** After each phase. Use clear commit messages.
- **When in doubt, look at the reference implementation.** It's the closest thing to a spec for the visual feel.
- **If something is genuinely ambiguous,** ask the user. Don't guess on important decisions.

## One last thing

This is a piece of premium creative work being made for an audience that decides what gets to be on television. They will look at this site for sixty seconds and form a permanent impression of the project. The standard isn't "good website." The standard is **"this is the most beautiful pitch site I've seen this year."**

Build accordingly.
