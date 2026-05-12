# THE CIRCUIT — TONE & VISUAL REFERENCE

*The language of the show, expressed as design specifications.*

---

This is the most important document for the build. Read it twice.

The pitch site does not need to look like the show. The pitch site needs to *feel* like the show. If a buyer scrolls through the site and intuits the tone of the series without watching a frame, the site has done its job.

---

## CORE TONAL PRINCIPLES

### Warm

The show is shot in late light. Wellington at four in the afternoon, when the palms throw long shadows across the sand of the international arena. Aachen at six in the evening, when the grass goes from green to gold. The Hamptons at the back end of August, the hour before the Grand Prix begins. Geneva interiors lit by lamplight, not overhead fluorescents.

The site echoes this with warm, off-white backgrounds (never pure white), and bay-deep ink (never pure black). The hero section uses a warm gradient evoking a darkened arena at dusk. Section breaks use the warm "paper-warm" color to differentiate without breaking the temperature.

### Clean

The show resists clutter at every level. No on-screen graphics during scenes. No music cues that telegraph emotion before the scene has earned it. No voiceover.

The site follows the same discipline. **No carousels. No animated counters. No "click to learn more" boxes. No CTAs with words like "Discover" or "Explore."** White space is used as deliberately as fill. Negative space is currency.

### Colorful

Colorful is the principle that prevents *clean* from becoming sterile. The sport itself is genuinely colorful — orange and white and sky-blue and kelly-green and scarlet rails set against ivory sand, against emerald grass, against navy backdrops. The Hermès orange of the warm-up tents. The federation jackets of every nation.

The site does not desaturate any of this. The accent colors (Hermès orange, scarlet, Rolex green, FEI navy) appear as small touches — never as section backgrounds, never as gradients across the page. They peek through the way they do in real life.

### Luxury

Luxury on the site is environmental, not narrational. The site never *says* "premium" or "elite" or "exclusive." It doesn't need to. The typography, the spacing, the restraint communicate it.

The principle: *Succession* shoots private jets like office hallways. *The Crown* shoots Buckingham Palace like a country home. The Circuit pitch site treats this world the same way — with quiet confidence, not awe.

### Documentary Humanity

The site must not feel like a fashion campaign. The grooms, the horses, the labor of the sport — these are part of the show's identity. Even on the pitch site, any photography that gets added later must include the working-class textures of the sport, not just the glamour. The reference to Sebastião Salgado in the design principles is not decorative.

---

## TYPOGRAPHY

Three typefaces. No others. No substitutions. No "we'll just use Inter."

### Display: Fraunces

A variable-axis modern serif. Use these axes:
- `opsz` 144 for large display sizes (headlines, titles, section labels)
- `opsz` 60 for medium sizes (card names, episode titles)
- `opsz` 14 for inline body usage
- `wght` 300–350 (always light to regular, never bold)
- `SOFT` 30 for upright; `SOFT` 60–80 for italic
- `WONK` 0 for upright; `WONK` 1 for italic

The italic-with-WONK-1 is a signature. Fraunces' wonky italic has a slightly off-kilter, hand-cut feel that gives the show's name and its key phrases their identity. Use it on:
- Emphasized words inside section titles (`<em>`)
- The italic *Circuit* in the hero
- Pull quotes
- Section subtitles
- Character role descriptors ("The Elder Statesman")

Letter-spacing: tight, around `-0.02em` at display sizes.

### Body: Instrument Sans

A humanist grotesque with character. More personality than Inter or Helvetica. Use at:
- Body weight 400 for paragraphs
- Body weight 500 for any inline emphasis
- Line height 1.6 for body paragraphs
- Line height 1.55 for the larger "lede" type
- Max measure 65 characters (`max-width: 65ch` or equivalent)

Font features: enable stylistic sets ss01 and ss02 (`font-feature-settings: "ss01", "ss02"`).

### Mono: JetBrains Mono

Used only for metadata strips — dates, locations, section eyebrows ("THE WORLD," "THE CAST"), card numbers, footer.

- Size 0.7rem (small)
- Letter-spacing 0.18em
- Uppercase
- Weight 400

This typeface should appear sparingly. It's the show's "slate card" — the moment the editorial design briefly acknowledges its own structure.

---

## COLOR PALETTE

All hex codes. Use these exactly. Define as CSS custom properties (or Tailwind 4 `@theme` tokens) and inherit everywhere.

```css
/* Sport-derived palette */
--sand:        #e8d9bd;   /* arena footing, noon */
--sand-deep:   #c9a876;   /* arena footing, golden hour */
--grass:       #3f5f3f;   /* Aachen grass, dark */
--grass-soft:  #7b8c5c;   /* Aachen grass, light */
--bay:         #5b3520;   /* horse coat brown */
--bay-deep:    #1f0f0a;   /* horse coat mane, deep ink */

/* Rail accent colors — used sparingly */
--rolex:       #006039;   /* Rolex green */
--hermes:      #e25822;   /* Hermès orange */
--fei:         #0f1e3d;   /* FEI navy */
--scarlet:     #b73239;   /* scarlet rail */
--sky:         #a8c5dc;   /* sky blue rail */

/* Neutrals */
--paper:       #f5f1e8;   /* primary background, off-white */
--paper-warm:  #ede6d4;   /* secondary background, slightly warmer */
--ink:         #0a0a0a;   /* primary text, near-black */
--ink-soft:    #2a2622;   /* secondary text */
--ink-mute:    #5a544c;   /* tertiary text, captions */
--rule:        rgba(10, 10, 10, 0.12);   /* hairline borders */
```

### Section background assignment

- **Hero:** `--bay-deep` with a radial warm-gradient overlay
- **Logline:** `--paper`
- **World:** `--paper-warm`
- **Cast:** `--paper`
- **Arc (Seasons):** `--bay-deep` (dark, for contrast against the rest of the page)
- **Look:** `--paper`
- **Why Now:** `--paper-warm`
- **Team:** `--paper`
- **Contact:** `--bay-deep`
- **Footer:** `--ink` (the deepest value, for closure)

This rhythm — paper, paper-warm, paper, dark, paper, paper-warm, paper, dark, ink — gives the scroll a visual cadence without resorting to gimmicks.

---

## SPACING & RHYTHM

```css
--gutter:    clamp(1.25rem, 4vw, 2.5rem);     /* page edge padding */
--section-y: clamp(5rem, 12vh, 9rem);          /* vertical padding per section */
--measure:   65ch;                              /* max-width for prose */
```

Section padding is generous. Premium documentary sites breathe. The site should never feel cramped on desktop.

---

## MOTION

```css
--ease: cubic-bezier(0.22, 0.61, 0.36, 1);
```

### Allowed motion

1. **Hero entrance:** staggered fade-up of title, subtitle, and meta strip. 1.2s ease, delays of 0.1s / 0.5s / 0.9s.
2. **Scroll-triggered reveals:** elements with `[data-reveal]` attribute fade-up (opacity 0 → 1, translateY 1.5rem → 0) when they enter the viewport. 900ms ease. Use IntersectionObserver with `threshold: 0.12`, `rootMargin: '0px 0px -8% 0px'`.
3. **Cast card expansion:** smooth height animation from 0 to content height. 600ms ease.
4. **Hover states:** subtle background-color changes on cast cards. 400ms ease.
5. **Auto-scroll after card click:** the expanded card auto-scrolls so it stays in the upper-third of the viewport. Smooth behavior.

### Forbidden motion

- Parallax of any kind.
- Scroll-jacking.
- Cursor-following effects.
- Animated counters ("0 → 15").
- Marquee text.
- Carousel/slider components.
- 3D transforms.
- Tilt on hover.
- Anything that draws attention to itself rather than to the content.

### Reduced motion

`@media (prefers-reduced-motion: reduce)`: disable all entrance animations, all transitions, and `scroll-behavior: smooth`. The site must be fully usable without motion.

---

## IMAGERY

**Phase 1 (current build):** No real photography. The reference implementation uses palette-derived gradient tiles with SVG film-grain overlay where photos would go. This is intentional — placeholder photography that doesn't read as placeholder.

Each "image" in the moodboard section is a tile with:
- A gradient using two palette colors
- An SVG noise filter overlay at ~35% opacity, mix-blend-mode: overlay
- A small caption in JetBrains Mono, mix-blend-mode: difference

**Phase 2 (future):** Real photography to be sourced from Getty Images, Sportfot, Kind Media, or commissioned originals. The site is designed so that each placeholder tile is a single `<img>` swap away from real photography.

Do not use Unsplash mountain photos. Do not use AI-generated horse images. Do not use stock photography that looks like stock photography.

---

## SITE-WIDE LITTLE THINGS

### Selection color

```css
::selection {
  background: var(--bay-deep);
  color: var(--paper);
}
```

### Smooth scroll

`scroll-behavior: smooth` on `html`, disabled under reduced-motion.

### Body font features

```css
body {
  font-feature-settings: "ss01", "ss02";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}
```

### The mix-blend-mode header trick

The fixed header at the top of the page uses `mix-blend-mode: difference` with `color: var(--paper)`. This means the header text automatically inverts against whatever section it's currently over — paper-colored text on dark sections, dark text on paper sections. No JS required.

---

## REFERENCE ARTISTS AND WORKS

The following are coordinates on a tonal map. Reference these in your head while you build.

- **Slim Aarons** — Palm Beach color, late-light warmth, the unembarrassed embrace of the leisure class.
- **Sebastião Salgado** — Reverence for labor. The grooms. The hands.
- **Sally Mann** — Intimacy of family and animal. Southern soft light.
- **Annie Leibovitz** (recent *Vogue* editorial work) — Wealthy people in their own environments.
- **Errol Morris** documentaries — Interview style. Direct address. Wide compositions.
- **Roger Deakins** cinematography — Patience with landscape. Late-day light.

### Reference websites that match the target

- Apple TV+ show pages (e.g., *Severance*, *The Morning Show*)
- A24 film pages (e.g., *The Brutalist*, *Civil War*)
- The Criterion Collection
- *T: The New York Times Style Magazine* editorial features
- *The Drift*
- *Cereal* magazine
- Are.na project sites

### Reference websites to NOT match

- Generic SaaS landing pages
- Most agency portfolio sites
- Anything with a hero that says "We are a creative studio dedicated to..."
- Anything with floating purple gradient blobs
- Anything with bento grids of features

---

## WHAT THE PITCH SITE NEEDS TO DELIVER

Putting all of the above into operational terms, the pitch site for *The Circuit* must, on first load, communicate:

1. **Premium documentary, not reality television.**
2. **The world is already there.** The site is not a sales pitch — it is a window.
3. **The horses matter.**
4. **The two-season Olympic arc is the structural promise.**
5. **Quiet confidence.** No exclamation points. No hyperbole.
