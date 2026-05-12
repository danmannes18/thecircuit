// Cast-card expand/collapse. One bio open globally at a time.
// Bios live in a JSON <script id="cast-bios"> emitted by Cast.astro.

interface Bio {
  name: string;
  role: string;
  home: string;
  achievements: string;
  bio: string[];
  narrativeFunction: string;
}

type BioMap = Record<string, Bio>;

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

function renderBio(bio: Bio): string {
  const meta = [
    { label: 'Home', value: bio.home },
    { label: 'Notes', value: bio.achievements },
    { label: 'Role', value: bio.role },
  ];
  const metaHtml = meta
    .map(
      (m) =>
        `<div class="bio__meta-row"><dt>${escapeHtml(m.label)}</dt><dd>${escapeHtml(m.value)}</dd></div>`,
    )
    .join('');
  const bodyHtml = bio.bio.map((p) => `<p>${escapeHtml(p)}</p>`).join('');
  return `
    <div class="bio__inner">
      <p class="bio__name">${escapeHtml(bio.name)}</p>
      <dl class="bio__meta">${metaHtml}</dl>
      <div class="bio__body">${bodyHtml}</div>
      <p class="bio__function">
        <span class="bio__function-label">Narrative function</span>
        ${escapeHtml(bio.narrativeFunction)}
      </p>
    </div>
  `;
}

function closeAll(panels: NodeListOf<HTMLElement>, cards: NodeListOf<HTMLButtonElement>) {
  panels.forEach((p) => {
    p.classList.remove('is-open');
    // Clear after the transition so the DOM stays light.
    window.setTimeout(() => {
      if (!p.classList.contains('is-open')) p.innerHTML = '';
    }, 650);
  });
  cards.forEach((c) => c.setAttribute('aria-expanded', 'false'));
}

export function initCast() {
  if (typeof window === 'undefined') return;
  const dataNode = document.getElementById('cast-bios');
  if (!dataNode) return;
  let bios: BioMap;
  try {
    bios = JSON.parse(dataNode.textContent || '{}') as BioMap;
  } catch {
    return;
  }

  const cards = document.querySelectorAll<HTMLButtonElement>('[data-card]');
  const panels = document.querySelectorAll<HTMLElement>('[data-cast-bio]');
  if (!cards.length || !panels.length) return;

  const panelByGroup = new Map<string, HTMLElement>();
  panels.forEach((p) => {
    const id = p.getAttribute('data-cast-bio');
    if (id) panelByGroup.set(id, p);
  });

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  cards.forEach((card) => {
    card.addEventListener('click', () => {
      const key = card.getAttribute('data-card');
      if (!key) return;
      const bio = bios[key];
      if (!bio) return;

      const grid = card.closest('[data-cast-grid]') as HTMLElement | null;
      const groupId = grid?.getAttribute('data-cast-grid');
      const panel = groupId ? panelByGroup.get(groupId) : null;
      if (!panel) return;

      const wasOpen = card.getAttribute('aria-expanded') === 'true';

      closeAll(panels, cards);
      if (wasOpen) return;

      panel.innerHTML = renderBio(bio);
      // Force layout then open — keeps the transition smooth.
      void panel.offsetHeight;
      panel.classList.add('is-open');
      card.setAttribute('aria-expanded', 'true');

      // Auto-scroll the card to upper third of viewport.
      window.setTimeout(
        () => {
          const rect = card.getBoundingClientRect();
          const targetY = window.scrollY + rect.top - Math.max(96, window.innerHeight * 0.18);
          window.scrollTo({
            top: targetY,
            behavior: prefersReduced ? 'auto' : 'smooth',
          });
        },
        prefersReduced ? 0 : 60,
      );
    });
  });

  // Close on Escape.
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const anyOpen = document.querySelector('[data-card][aria-expanded="true"]');
      if (anyOpen) {
        closeAll(panels, cards);
        (anyOpen as HTMLElement).focus();
      }
    }
  });
}
