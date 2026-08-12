const cfg = window.SCHLOSSPARK_CONTENT || {};

// Mobiles Menü
const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('#nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }));
}

const setText = (selector, value) => {
  if (value == null) return;
  document.querySelectorAll(selector).forEach(el => { el.textContent = value; });
};

const setHref = (selector, value) => {
  if (!value) return;
  document.querySelectorAll(selector).forEach(el => { el.href = value; });
};

const setImage = (selector, src) => {
  if (!src) return;
  document.querySelectorAll(selector).forEach(el => { el.src = src; });
};

const escapeHtml = (value = '') => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;');

const formatDate = (value) => {
  if (!value) return '';
  const [year, month, day] = String(value).split('-').map(Number);
  if (!year || !month || !day) return value;
  const date = new Date(year, month - 1, day);
  return new Intl.DateTimeFormat('de-DE', {
    day: 'numeric', month: 'long', year: 'numeric'
  }).format(date);
};

// Hero und Grundtexte
setText('[data-hero-eyebrow]', cfg.hero?.eyebrow);
setText('[data-hero-title]', cfg.hero?.title);
setText('[data-hero-lead]', cfg.hero?.lead);
setText('[data-hero-mission]', cfg.hero?.mission);
setText('[data-about-title]', cfg.about?.title);

const aboutText = document.querySelector('[data-about-text]');
if (aboutText && Array.isArray(cfg.about?.paragraphs)) {
  aboutText.innerHTML = cfg.about.paragraphs
    .map(text => `<p>${escapeHtml(text)}</p>`)
    .join('');
}

// Termin
setText('[data-next-walk-long]', cfg.nextWalk?.dateLong || formatDate(cfg.nextWalk?.date));
setText('[data-next-walk-short]', cfg.nextWalk?.dateShort || formatDate(cfg.nextWalk?.date));
setText('[data-next-walk-description]', cfg.nextWalk?.description);

// Umfrage- und Verteilerlinks
setHref('[data-survey-link]', cfg.surveyUrl);
document.querySelectorAll('[data-survey-link]').forEach(el => {
  el.target = '_blank';
  el.rel = 'noopener';
});

const mailingLinks = document.querySelectorAll('[data-mailing-list-link]');
if (cfg.mailingListUrl) {
  mailingLinks.forEach(el => {
    el.href = cfg.mailingListUrl;
    el.textContent = 'Zum Verteiler';
    el.classList.remove('disabled');
    el.removeAttribute('aria-disabled');
    el.target = '_blank';
    el.rel = 'noopener';
  });
} else {
  mailingLinks.forEach(el => el.addEventListener('click', event => event.preventDefault()));
}

// Schwerpunkte
const focusTarget = document.querySelector('[data-focus-topics]');
if (focusTarget && Array.isArray(cfg.focusTopics)) {
  focusTarget.innerHTML = cfg.focusTopics.map(item => `
    <article>
      <span aria-hidden="true">${escapeHtml(item.emoji || '•')}</span>
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.text)}</p>
    </article>
  `).join('');
}

// Umfrage
setText('[data-survey-intro]', cfg.survey?.intro);
setText('[data-survey-stand-label]', cfg.survey?.standLabel);
setText('[data-survey-response-count]', cfg.survey?.responseCount);
setText('[data-priorities-title]', cfg.survey?.prioritiesTitle);
setText('[data-priorities-note]', cfg.survey?.prioritiesNote);

const highlightTarget = document.querySelector('[data-survey-highlights]');
if (highlightTarget && Array.isArray(cfg.survey?.highlights)) {
  highlightTarget.innerHTML = cfg.survey.highlights.map(item => `
    <article class="highlight-card">
      <strong>${escapeHtml(item.value)}</strong>
      <span>${escapeHtml(item.label)}</span>
    </article>
  `).join('');
}

const priorityTarget = document.querySelector('[data-survey-priorities]');
if (priorityTarget && Array.isArray(cfg.survey?.priorities)) {
  priorityTarget.innerHTML = cfg.survey.priorities.map(item => {
    const percent = Number(item.percent) || 0;
    return `
      <div class="priority-row">
        <div class="priority-head">
          <span>${escapeHtml(item.label)}</span>
          <strong>${percent.toFixed(1).replace('.', ',')} %</strong>
        </div>
        <div class="priority-track" aria-hidden="true">
          <div class="priority-fill" style="width:${Math.min(100, Math.max(0, percent))}%"></div>
        </div>
      </div>`;
  }).join('');
}

const contextTarget = document.querySelector('[data-survey-context]');
if (contextTarget && Array.isArray(cfg.survey?.context)) {
  contextTarget.innerHTML = cfg.survey.context
    .map(item => `<li>${escapeHtml(item)}</li>`)
    .join('');
}

// Neuigkeiten
const newsTarget = document.querySelector('[data-news-list]');
if (newsTarget && Array.isArray(cfg.news)) {
  const sortedNews = [...cfg.news]
    .sort((a, b) => String(b.date).localeCompare(String(a.date)))
    .slice(0, 8);
  newsTarget.innerHTML = sortedNews.map(item => `
    <article class="news-item">
      <time datetime="${escapeHtml(item.date)}">${escapeHtml(formatDate(item.date))}</time>
      <p>${escapeHtml(item.text)}</p>
    </article>
  `).join('');
}

// Kontakt / Impressum
setText('[data-contact-name]', cfg.contact?.name);
setText('[data-contact-email]', cfg.contact?.email);
setText('[data-contact-phone]', cfg.contact?.phone);
setText('[data-contact-address1]', cfg.contact?.addressLine1);
setText('[data-contact-address2]', cfg.contact?.addressLine2);
setHref('[data-contact-email-link]', cfg.contact?.email ? `mailto:${cfg.contact.email}` : '');
setHref('[data-contact-phone-link]', cfg.contact?.phone ? `tel:${cfg.contact.phone.replace(/[^+\d]/g, '')}` : '');

// Flyer und Fuchs
setImage('#brand-logo', cfg.flyer?.foxLogo);
setImage('#hero-flyer-preview', cfg.flyer?.front);
setImage('#flyer-front', cfg.flyer?.front);
setImage('#flyer-back', cfg.flyer?.back);
