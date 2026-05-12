// Cast-card expand/collapse. Bio panel inserts inline in the grid,
// directly below the clicked card's row.

interface Bio {
  name: string;
  role: string;
  home: string;
  achievements: string;
  bio: string[];
  narrativeFunction: string;
  discipline?: string;
  instagram?: string;
  wikipedia?: string;
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

  const socialLinks: string[] = [];
  if (bio.instagram) {
    socialLinks.push(
      `<a class="bio__social-link" href="https://instagram.com/${escapeHtml(bio.instagram)}" target="_blank" rel="noopener noreferrer">@${escapeHtml(bio.instagram)} ↗</a>`,
    );
  }
  if (bio.wikipedia) {
    socialLinks.push(
      `<a class="bio__social-link" href="${escapeHtml(bio.wikipedia)}" target="_blank" rel="noopener noreferrer">Wikipedia ↗</a>`,
    );
  }
  const socialHtml = socialLinks.length
    ? `<div class="bio__social">${socialLinks.join('')}</div>`
    : '';

  return `
    <div class="bio__inner">
      <p class="bio__name">${escapeHtml(bio.name)}</p>
      <dl class="bio__meta">${metaHtml}</dl>
      <div class="bio__body">${bodyHtml}</div>
      ${socialHtml}
      <p class="bio__function">
        <span class="bio__function-label">Narrative function</span>
        ${escapeHtml(bio.narrativeFunction)}
      </p>
    </div>
  `;
}

// Returns the last card in the same visual row as the clicked card.
// We insert the bio panel after this element so it appears below the full row.
function getLastCardInRow(card: HTMLButtonElement, grid: HTMLElement): HTMLElement {
  const clickedTop = card.getBoundingClientRect().top;
  const allCards = [...grid.querySelectorAll<HTMLButtonElement>('[data-card]')];
  const rowCards = allCards.filter(
    (c) => Math.abs(c.getBoundingClientRect().top - clickedTop) < 4,
  );
  return rowCards[rowCards.length - 1] ?? card;
}

function closeAll(cards: NodeListOf<HTMLButtonElement>) {
  document.querySelectorAll<HTMLElement>('.bio-panel').forEach((p) => {
    p.classList.remove('is-open');
    window.setTimeout(() => {
      if (!p.classList.contains('is-open')) p.remove();
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
  if (!cards.length) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  cards.forEach((card) => {
    card.addEventListener('click', () => {
      const key = card.getAttribute('data-card');
      if (!key) return;
      const bio = bios[key];
      if (!bio) return;

      const grid = card.closest<HTMLElement>('[data-cast-grid]');
      if (!grid) return;

      const wasOpen = card.getAttribute('aria-expanded') === 'true';

      closeAll(cards);
      if (wasOpen) return;

      // Find the last card in the same visual row so the panel spans below it
      const anchor = getLastCardInRow(card, grid);

      const panel = document.createElement('div');
      panel.className = 'bio-panel';
      panel.setAttribute('aria-live', 'polite');
      panel.innerHTML = renderBio(bio);

      anchor.insertAdjacentElement('afterend', panel);
      void panel.offsetHeight; // force layout before transition
      panel.classList.add('is-open');
      card.setAttribute('aria-expanded', 'true');

      // Only scroll if the panel is already below the fold — don't move the
      // viewport when the expansion is already visible.
      if (!prefersReduced) {
        window.setTimeout(() => {
          const panelRect = panel.getBoundingClientRect();
          if (panelRect.top > window.innerHeight - 80) {
            window.scrollTo({
              top: window.scrollY + panelRect.top - 120,
              behavior: 'smooth',
            });
          }
        }, 60);
      }
    });
  });

  // Close on Escape.
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const anyOpen = document.querySelector('[data-card][aria-expanded="true"]');
      if (anyOpen) {
        closeAll(cards);
        (anyOpen as HTMLElement).focus();
      }
    }
  });
}
