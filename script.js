// Mobiles Menü
const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('#nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }));
}

const setText = (selector, value) => {
  if (!value) return;
  document.querySelectorAll(selector).forEach(el => { el.textContent = value; });
};

const setHref = (selector, value) => {
  if (!value) return;
  document.querySelectorAll(selector).forEach(el => { el.href = value; });
};

const parseDate = value => {
  if (!value) return null;
  const date = new Date(`${value}T12:00:00`);
  return Number.isNaN(date.getTime()) ? null : date;
};

const germanDate = (value, includeYear = true) => {
  const date = parseDate(value);
  if (!date) return '';
  return new Intl.DateTimeFormat('de-DE', {
    day: 'numeric',
    month: 'long',
    ...(includeYear ? { year: 'numeric' } : {})
  }).format(date);
};

async function loadJson(path) {
  const response = await fetch(path, { cache: 'no-cache' });
  if (!response.ok) throw new Error(`${path}: ${response.status}`);
  return response.json();
}

function applySiteConfig(cfg = {}) {
  const walkDate = cfg.nextWalk?.date;
  if (walkDate) {
    setText('[data-next-walk-long]', germanDate(walkDate, true));
    setText('[data-next-walk-short]', germanDate(walkDate, false));
  }
  setText('[data-next-walk-description]', cfg.nextWalk?.description);

  if (cfg.surveyUrl) {
    setHref('[data-survey-link]', cfg.surveyUrl);
  }
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
    mailingLinks.forEach(el => {
      el.href = '#';
      el.textContent = 'Verteiler-Link folgt';
      el.classList.add('disabled');
      el.setAttribute('aria-disabled', 'true');
      el.addEventListener('click', event => event.preventDefault());
    });
  }

  setText('[data-contact-name]', cfg.contact?.name);
  setText('[data-contact-email]', cfg.contact?.email);
  setText('[data-contact-phone]', cfg.contact?.phone);
  setText('[data-contact-address1]', cfg.contact?.addressLine1);
  setText('[data-contact-address2]', cfg.contact?.addressLine2);
  setHref('[data-contact-email-link]', cfg.contact?.email ? `mailto:${cfg.contact.email}` : '');
  setHref('[data-contact-phone-link]', cfg.contact?.phone ? `tel:${cfg.contact.phone.replace(/[^+\d]/g, '')}` : '');

  // Flyer und Fuchs bleiben unsichtbar, bis sie im CMS aktiviert und mit Dateien befüllt sind.
  if (cfg.flyer?.enabled && cfg.flyer?.front && cfg.flyer?.back) {
    const section = document.querySelector('#flyer');
    const front = document.querySelector('#flyer-front');
    const back = document.querySelector('#flyer-back');
    if (section && front && back) {
      front.src = cfg.flyer.front;
      back.src = cfg.flyer.back;
      section.hidden = false;
    }
  }

  if (cfg.flyer?.useFoxLogo && cfg.flyer?.foxLogo) {
    const logo = document.querySelector('#brand-logo');
    if (logo) {
      logo.src = cfg.flyer.foxLogo;
      logo.classList.add('fox-logo');
    }
  }
}

function renderNews(data = {}) {
  const list = document.querySelector('#news-list');
  const section = document.querySelector('#neuigkeiten');
  if (!list || !section) return;

  const items = Array.isArray(data.items) ? data.items
    .filter(item => item?.date && item?.text)
    .sort((a, b) => String(b.date).localeCompare(String(a.date)))
    .slice(0, 6) : [];

  if (!items.length) {
    section.hidden = true;
    return;
  }

  list.replaceChildren(...items.map(item => {
    const article = document.createElement('article');
    article.className = 'news-item';

    const time = document.createElement('time');
    time.dateTime = item.date;
    time.textContent = germanDate(item.date, true);

    const text = document.createElement('p');
    text.textContent = item.text;

    article.append(time, text);
    return article;
  }));
}

async function initContent() {
  try {
    const [siteConfig, news] = await Promise.all([
      loadJson('content/site.json'),
      loadJson('content/news.json')
    ]);
    applySiteConfig(siteConfig);
    renderNews(news);
  } catch (error) {
    // Die HTML-Fallbacks bleiben sichtbar, falls die JSON-Dateien einmal nicht geladen werden können.
    console.warn('Pflegedaten konnten nicht geladen werden:', error);
  }
}

initContent();
