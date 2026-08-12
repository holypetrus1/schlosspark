const cfg = window.SCHLOSSPARK || {};

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

// Links & wechselnde Angaben aus content.js einsetzen
const setText = (selector, value) => {
  if (!value) return;
  document.querySelectorAll(selector).forEach(el => { el.textContent = value; });
};
const setHref = (selector, value) => {
  if (!value) return;
  document.querySelectorAll(selector).forEach(el => { el.href = value; });
};

setText('[data-next-walk-long]', cfg.nextWalk?.dateLong);
setText('[data-next-walk-short]', cfg.nextWalk?.dateShort);
setText('[data-next-walk-description]', cfg.nextWalk?.description);

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

setText('[data-contact-name]', cfg.contact?.name);
setText('[data-contact-email]', cfg.contact?.email);
setText('[data-contact-phone]', cfg.contact?.phone);
setText('[data-contact-address1]', cfg.contact?.addressLine1);
setText('[data-contact-address2]', cfg.contact?.addressLine2);
setHref('[data-contact-email-link]', cfg.contact?.email ? `mailto:${cfg.contact.email}` : '');
setHref('[data-contact-phone-link]', cfg.contact?.phone ? `tel:${cfg.contact.phone.replace(/[^+\d]/g, '')}` : '');

// Flyer/Fuchs: vorbereitet, aber erst sichtbar wenn Dateien vorhanden und enabled=true.
if (cfg.flyer?.enabled) {
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
