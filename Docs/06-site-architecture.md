# THE CIRCUIT — SITE ARCHITECTURE

*The blueprint. What exists, in what order, on what surface.*

---

## ARCHITECTURE PRINCIPLES

**Single page, scroll-driven.** The site is one long page, not a multi-page navigation structure. This is the modern grammar of premium creative pitches. It removes the friction of clicking, it lets the user experience the project as a single sustained piece of writing, and it allows the visual rhythm of the site to do narrative work the prose alone cannot.

**No navigation menu in the traditional sense.** A minimal sticky header — the title *The Circuit* on the left, a single "Contact" link on the right. That is the entire chrome. The site does not need wayfinding because the scroll *is* the wayfinding.

**Sections separated by visual breaks.** The page is structured as a sequence of nine acts. Each act has its own background color or treatment, giving the site cinematic pacing.

**No mid-page interactivity that isn't justified.** No carousels. No "click to learn more" boxes. No animated counters. The single justified piece of interactivity is the cast section, where each character expands inline to reveal their full bio. Everything else is reading and scrolling.

**Mobile-first build, desktop-enhanced.** The site is designed mobile-first because the first look will be on a phone. Desktop layouts then add generous margins, multi-column character grids, and larger hero imagery, but no content the mobile user does not also receive.

---

## THE PAGE, IN SEQUENCE

### ACT ONE — THE OPEN (Hero)

**Component:** `Hero.astro`

**Background:** `--bay-deep` with a radial warm gradient overlay (suggests a darkened arena interior). Film-grain SVG overlay at ~35% opacity.

**Content:**
- Title: "The *Circuit*" — display serif, `opsz` 144, weight 300, italic+WONK on "Circuit", colored `--sand-deep`. Massive — `clamp(4rem, 14vw, 14rem)`.
- Subtitle: "A premium documentary series." — italic Fraunces, ~`opsz` 144, color rgba paper at 75% opacity.
- Meta strip at the bottom: "Two seasons" and "The road to Los Angeles 2028" in JetBrains Mono.
- Optional: a vertical "Scroll" label in mono on the right edge (desktop only).

**Animation:** Staggered fade-up entrance — title at 0.1s, subtitle at 0.5s, meta at 0.9s. 1.2s duration, custom ease.

**Layout:** Minimum 100vh / 100svh. Title and subtitle in the middle band. Meta strip pinned to the bottom.

---

### ACT TWO — THE LOGLINE

**Component:** `Logline.astro`

**Background:** `--paper`. Generous white space.

**Content:** Just the logline, centered, in display serif. ~32–48px depending on viewport. The word "horses that bind them" gets italic+WONK+bay color treatment. Above the logline, a small mono eyebrow: "LOGLINE".

**Layout:** Min-height ~70vh. The logline gets its own quiet stage — no image, no embellishment.

---

### ACT THREE — THE WORLD

**Component:** `World.astro`

**Background:** `--paper-warm`.

**Content:**
- Eyebrow: "THE WORLD"
- Section title: "There is a world most people *have never seen.*" — section-title scale, with italic+WONK on the emphasized portion.
- Four paragraphs of the world-building prose from `/docs/01-logline-and-onepager.md`, the one starting "It moves in a circle..."
- Pull-quote at the bottom: "The horse is the only Olympic athlete that doesn't know it's competing. That, more than anything, is what makes this sport cinema." — italic Fraunces, centered, with hairline rules above and below.

**Layout:** Max-width 64rem. Prose max-measure 65ch. First paragraph's first line gets a small-caps treatment.

---

### ACT FOUR — THE CAST

**Component:** `Cast.astro`, with child components `CastGroup.astro` and `CastCard.astro`

**Background:** `--paper`.

**Content:**

Header:
- Eyebrow: "THE CAST"
- Title: "Fifteen anchors. *Four archetypes. One world.*"
- Intro paragraph (one to three sentences).

Four groups in sequence:

**I — The Legends.** McLain Ward, Kent Farrington, Laura Kraut, Karl Cook.

**II — The Heirs.** Jessica Springsteen, Eve Jobs, Jennifer Gates Nassar, Georgina Bloomberg.

**III — The Rising.** Lillie Keenan, Brian Moggre, Mimi Gochman.

**IV — The Power Brokers.** Robert Ridland, Jan Tops, Ilan Ferder, Jill & Sydney Shulman.

Each group has:
- A group label row with the Roman numeral, the group name, and a one-line subtitle
- A grid of cast cards (4 columns desktop, 3 on smaller laptops, 1 on mobile)

Each card shows:
- A two-digit number (01, 02, …)
- The character's name (display serif)
- Their role descriptor in italic+WONK (e.g., "The Elder Statesman", "The Matchmaker")
- A subtle "+" expand indicator

**Interaction:** Clicking a card expands an inline bio panel below the group's grid. The bio panel contains:
- A metadata strip (home, achievements)
- 1–3 paragraphs of the character's bio from `/docs/02`
- A "Narrative function" footer line

Only one bio is open at a time globally. Clicking the same card again closes it. After expansion, the page auto-scrolls so the clicked card stays in the upper third of the viewport.

**Data:** All cast bios live in `src/data/cast.ts` as a typed array. Use the bios verbatim from `/docs/02-character-bible.md`.

---

### ACT FIVE — THE ARC (Seasons)

**Component:** `Arc.astro`, with child `Season.astro`

**Background:** `--bay-deep` (dark section, breaks the rhythm). Paper-colored text.

**Content:**

Header:
- Eyebrow: "THE ARC"
- Title: "Two seasons. *Sixteen episodes. One stadium.*"
- Lede paragraph: "A complete creative spine built around the only Olympic year that matters for American equestrian sport in a generation."

Two seasons displayed side-by-side on desktop, stacked on mobile:

**Season One — 2027 — *The Circuit***
- One-paragraph summary
- Eight episodes as a numbered list with one-line synopses

**Season Two — 2028 — *Road to Los Angeles***
- One-paragraph summary
- Eight episodes as a numbered list with one-line synopses

Episode rows use the format:
- Number (mono, small) | Title (display serif, ~1.25rem) over Synopsis (body, smaller)

**Data:** Episodes live in `src/data/episodes.ts`. Sourced from `/docs/03` and `/docs/04`.

---

### ACT SIX — THE LOOK (Moodboard)

**Component:** `Look.astro`

**Background:** `--paper`.

**Content:**

Header:
- Eyebrow: "THE LOOK"
- Title: "Warm. Clean. *Colorful.* Luxurious."
- Frame paragraph (in italic display serif, ~1.5rem): "Shot in late light. The visual language pulls from Slim Aarons' Palm Beach, Sebastião Salgado's reverence for labor, and the editorial restraint of contemporary prestige television. Always documentary."

Moodboard grid:
- 12-column CSS grid on desktop, 6-column on mobile
- Nine tiles of varying spans and aspect ratios (a bento-style composition)
- Each tile is a gradient using two palette colors with an SVG film-grain overlay
- Each tile has a small caption in JetBrains Mono with `mix-blend-mode: difference`
- Captions: "Wellington — golden hour", "Aachen — grass", "Scarlet rails", "Bay coat, bay mane", "Sky — Geneva morning", "Hermès warm-up", "Sand at dusk", "FEI navy — team kit", "Rolex green — the Major"

Closing claim, centered, in display serif: "Premium documentary, *not reality television.*"

**Important:** The tiles are intentionally placeholders for real photography. Build them so swapping in real images later is a single attribute change per tile.

---

### ACT SEVEN — WHY NOW

**Component:** `WhyNow.astro`

**Background:** `--paper-warm`.

**Content:**

Header:
- Eyebrow: "THE CASE"
- Title: "Why this series. *Why now.*"

Four numbered points, each as a row:

**01. Documentary sports has become *prestige television.***
Body: Drive to Survive. Full Swing. Break Point. Quarterback. Beckham. Race for the Crown. Tour de France: Unchained. The genre has matured into the most reliable subscriber-driver in streaming. Show jumping — the most photogenic, most globally distributed of all horse sports — has never been given the premium-doc treatment.

**02. The 2028 Los Angeles Olympics is a *fixed, marketable finale.***
Body: The first home Olympics for American equestrians since 1984. A two-season series that climaxes there is a buyer's dream: a clean structure, a fixed delivery date, and a guaranteed cultural moment to release into.

**03. The cast is *already famous.***
Body: Springsteen, Jobs, Gates, Bloomberg, Selleck, Cuoco. The children of the people who built modern America are already in this world. So are the working-class kids from Texas and Chicago who out-rode them. The collision is the show.

**04. No one else has *the access.***
Body: This is a world that runs on relationships, generational trust, and quiet introductions. Whoever gets in first owns this story.

**Layout:** Two-column grid on desktop (number on left, claim+body on right). Single column on mobile. Hairline rule between rows.

---

### ACT EIGHT — THE TEAM

**Component:** `Team.astro`

**Background:** `--paper`.

**Content:**

Header:
- Eyebrow: "THE TEAM"
- Title: "From the people *building it.*"

Body (three short paragraphs):

"The Circuit is in development with creative leadership being assembled with care. The project is being structured for partnership with a premium documentary production company in the tradition of Box to Box Films, Religion of Sports, Words + Pictures, and Imagine Documentaries.

Access conversations are underway with the cast members listed above and with the federations that govern the sport. The two-season structure is designed to align with the FEI competition calendar and the IOC's broadcast windows around the 2028 Los Angeles Games.

Inquiries from streamers, production partners, and creative collaborators are welcomed."

**Layout:** Max-width 56rem. Quiet, restrained. No team photos at this stage.

---

### ACT NINE — CONTACT

**Component:** `Contact.astro`

**Background:** `--bay-deep` with a radial sand-colored glow at center.

**Content:**

Centered:
- Italic prompt (display serif, sand colored): "For development inquiries."
- Email address in JetBrains Mono: `hello@thecircuit.show` (placeholder — replace with real address)
- Small mono detail line below: "Available for screening upon request."

The email is a `mailto:` link with a subtle bottom-border hover state.

---

### FOOTER

**Component:** `Footer.astro`

**Background:** `--ink` (deepest black). Paper at 40% opacity text.

**Content:**
- Left: "The Circuit" in JetBrains Mono
- Right: "© 2026 — In Development" in JetBrains Mono

Padding: minimal. The site closes as cleanly as it began.

---

## STICKY HEADER

**Component:** `Header.astro`

Fixed at top, always visible. Uses `mix-blend-mode: difference` with paper-colored text so it auto-inverts against any section background.

- Left: "The Circuit" in display serif, small
- Right: "Contact" in JetBrains Mono, links to `#contact`

Padding: 1.25rem vertical, gutter-padding horizontal.

---

## TECHNICAL SPECS

### Stack

- **Astro 5+** as the framework
- **Tailwind CSS 4** with `@theme` directive in `global.css` for palette and type scale
- **Self-hosted typefaces** via `@fontsource/fraunces`, `@fontsource/instrument-sans`, `@fontsource/jetbrains-mono`
- **No React, no Vue, no Svelte.** A small island of vanilla JS or Alpine.js for the cast-expand interaction is fine.

### Performance targets

- Lighthouse 95+ on all four metrics
- Largest Contentful Paint under 1.5s on a fast connection
- Total page weight under 1MB without real photography (under 4MB with)
- Zero render-blocking third-party requests

### Accessibility

- All cast cards keyboard-accessible (Enter/Space to expand)
- ARIA `aria-expanded` on cast cards
- Color contrast WCAG AA minimum
- `prefers-reduced-motion` honored everywhere
- All decorative images marked `aria-hidden`
- Semantic HTML throughout (`<section>`, `<header>`, `<article>`)

### SEO basics

- `<title>`: "The Circuit — A premium documentary series"
- Meta description: "Inside the billion-dollar world of international show jumping. Two seasons. The road to Los Angeles 2028."
- Open Graph: title, description, type=website. OG image placeholder for now.
- Theme color: `#0a0a0a`

### Hosting

- Vercel via GitHub integration (recommended) or Netlify
- Custom domain: `thecircuit.show` if available
- Optional password gate via Vercel's password protection feature

---

## ONE FINAL ARCHITECTURAL NOTE

The site should be *withholding*. It should give the buyer enough to make them want a meeting. It should not give them so much that the meeting becomes redundant.

This is the most counterintuitive part of building a pitch site. The instinct is to dump every piece of strategic thinking onto the page. The discipline is the opposite: tell them just enough that they need to talk to you to learn the rest.

The cast bios on the site are the bios from `/docs/02`, not longer versions. The episode synopses are one line each, not three. The why-now case is the four headlines plus one paragraph each, not the full strategic argument. The buyer who wants more will email. The buyer who doesn't, wouldn't have anyway.

A pitch site is not a pitch document. It is a *trailer* for a pitch document.
