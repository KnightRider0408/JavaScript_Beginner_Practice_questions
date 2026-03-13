/* ── NewsFlash · app.js ──────────────────────────────── */

const API_BASE = 'https://hn.algolia.com/api/v1/search';

/* ── DOM refs ─────────────────────────────────────────── */
const searchInput = document.getElementById('searchInput');
const searchBtn   = document.getElementById('searchBtn');
const chipRow     = document.getElementById('chipRow');
const newsGrid    = document.getElementById('newsGrid');
const loader      = document.getElementById('loader');
const errorBox    = document.getElementById('errorBox');
const resultsMeta = document.getElementById('resultsMeta');

/* ── State ────────────────────────────────────────────── */
let currentTopic  = 'startup';
let activeChip    = chipRow.querySelector('.chip.active');

/* ── Helpers ──────────────────────────────────────────── */

function showLoader() {
  loader.classList.add('visible');
  errorBox.classList.remove('visible');
  newsGrid.innerHTML = '';
  resultsMeta.textContent = '';
}

function hideLoader() {
  loader.classList.remove('visible');
}

function showError(msg) {
  hideLoader();
  errorBox.textContent = '⚠️  ' + msg;
  errorBox.classList.add('visible');
}

function getDomain(url) {
  try {
    return new URL(url).hostname.replace('www.', '');
  } catch {
    return null;
  }
}

function timeAgo(unixTs) {
  if (!unixTs) return '';
  const diff = Math.floor((Date.now() / 1000) - unixTs);
  if (diff < 60)   return `${diff}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400)return `${Math.floor(diff / 3600)}h ago`;
  return `${Math.floor(diff / 86400)}d ago`;
}

/* ── Render a single card ─────────────────────────────── */
function createCard(hit, index) {
  const {
    title,
    url,
    author,
    points,
    num_comments,
    created_at_i,
    objectID
  } = hit;

  const domain      = url ? getDomain(url) : null;
  const storyUrl    = url || `https://news.ycombinator.com/item?id=${objectID}`;
  const commentsUrl = `https://news.ycombinator.com/item?id=${objectID}`;
  const score       = points ?? 0;
  const comments    = num_comments ?? 0;
  const ago         = timeAgo(created_at_i);

  const card = document.createElement('article');
  card.className = 'card';
  card.style.animationDelay = `${index * 45}ms`;

  card.innerHTML = `
    <div class="card-top">
      <span class="card-rank">#${index + 1}</span>
      <h2 class="card-title">
        <a href="${storyUrl}" target="_blank" rel="noopener">${title || 'Untitled'}</a>
      </h2>
    </div>
    <div class="card-meta">
      <span class="meta-pill"><span class="pill-icon">▲</span> <span class="score-val">${score}</span> pts</span>
      <span class="meta-pill"><span class="pill-icon">💬</span> ${comments} comments</span>
      ${ago ? `<span class="meta-pill"><span class="pill-icon">🕑</span> ${ago}</span>` : ''}
      ${author ? `<span class="meta-pill"><span class="pill-icon">👤</span> ${author}</span>` : ''}
      ${domain ? `<a class="domain-badge" href="${storyUrl}" target="_blank" rel="noopener">${domain}</a>` : ''}
    </div>
  `;

  /* clicking the card body (not links) opens the story */
  card.addEventListener('click', (e) => {
    if (e.target.tagName !== 'A') {
      window.open(storyUrl, '_blank', 'noopener');
    }
  });
  card.style.cursor = 'pointer';

  return card;
}

/* ── Fetch & render ───────────────────────────────────── */
async function fetchNews(query) {
  if (!query) return;
  currentTopic = query;
  showLoader();

  try {
    const res = await fetch(
      `${API_BASE}?query=${encodeURIComponent(query)}&tags=story&hitsPerPage=20`
    );
    if (!res.ok) throw new Error(`HTTP ${res.status} – ${res.statusText}`);

    const data = await res.json();
    hideLoader();

    const hits = data.hits || [];

    if (hits.length === 0) {
      resultsMeta.textContent = `No stories found for "${query}".`;
      newsGrid.innerHTML = `<p style="color:var(--muted);text-align:center;padding:3rem 0">Nothing here — try a different topic!</p>`;
      return;
    }

    resultsMeta.textContent = `Showing ${hits.length} of ${data.nbHits?.toLocaleString() ?? '?'} stories for "${query}"`;

    const fragment = document.createDocumentFragment();
    hits.forEach((hit, i) => fragment.appendChild(createCard(hit, i)));
    newsGrid.appendChild(fragment);

  } catch (err) {
    showError(`Could not load news. ${err.message}`);
  }
}

/* ── Chip interaction ─────────────────────────────────── */
chipRow.addEventListener('click', (e) => {
  const chip = e.target.closest('.chip');
  if (!chip) return;

  if (activeChip) activeChip.classList.remove('active');
  chip.classList.add('active');
  activeChip = chip;

  const topic = chip.dataset.topic;
  searchInput.value = '';
  fetchNews(topic);
});

/* ── Search button / Enter key ────────────────────────── */
function handleSearch() {
  const q = searchInput.value.trim();
  if (!q) return;

  /* deactivate any active chip */
  if (activeChip) { activeChip.classList.remove('active'); activeChip = null; }
  fetchNews(q);
}

searchBtn.addEventListener('click', handleSearch);
searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') handleSearch();
});

/* ── Initial load (default: startup) ─────────────────── */
fetchNews('startup');
