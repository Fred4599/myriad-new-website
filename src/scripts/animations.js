/**
 * Scroll-triggered animations: add .visible when element enters viewport.
 * Expects elements with class "animate-on-scroll" and one of:
 * anim-fade-up, anim-fade-down, anim-fade-left, anim-fade-right,
 * anim-scale-in, anim-slide-left, anim-slide-right, anim-pop-in
 */
const observerOptions = { rootMargin: '-100px 0px', threshold: 0 };

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const stagger = el.dataset.staggerDelay;
      if (stagger) {
        const delay = parseFloat(stagger) * 1000;
        setTimeout(() => el.classList.add('visible'), delay);
      } else {
        el.classList.add('visible');
      }
    }
  });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));

/**
 * Hero photo carousel: 6 slides from Myriad photos, prev/next buttons, auto-advance 0.5s
 */
(function () {
  const carousel = document.getElementById('hero-carousel');
  if (!carousel) return;
  const cards = Array.from(carousel.querySelectorAll('.hero-stack-card'));
  const total = cards.length;
  if (total === 0) return;

  let currentFront = 0;
  const ADVANCE_INTERVAL_MS = 500;

  function applyPositions() {
    const front = currentFront;
    const mid = (currentFront + 1) % total;
    const back = (currentFront + 2) % total;
    cards.forEach((card) => {
      const slide = parseInt(card.dataset.slide, 10);
      card.classList.remove('hero-stack-back', 'hero-stack-mid', 'hero-stack-front', 'hero-stack-hide', 'swipe-out');
      if (slide === front) card.classList.add('hero-stack-front');
      else if (slide === mid) card.classList.add('hero-stack-mid');
      else if (slide === back) card.classList.add('hero-stack-back');
      else card.classList.add('hero-stack-hide');
      card.setAttribute('aria-hidden', slide !== front);
    });
  }

  function goNext() {
    const prevFront = currentFront;
    const frontCard = cards.find((c) => parseInt(c.dataset.slide, 10) === prevFront);
    if (frontCard) frontCard.classList.add('swipe-out');
    setTimeout(() => {
      if (frontCard) frontCard.classList.remove('swipe-out');
      currentFront = (currentFront + 1) % total;
      applyPositions();
    }, 400);
  }

  function goPrev() {
    currentFront = (currentFront - 1 + total) % total;
    applyPositions();
  }

  applyPositions();
  setInterval(goNext, ADVANCE_INTERVAL_MS);

  const prevBtn = document.getElementById('hero-carousel-prev');
  const nextBtn = document.getElementById('hero-carousel-next');
  if (prevBtn) prevBtn.addEventListener('click', () => goPrev());
  if (nextBtn) nextBtn.addEventListener('click', () => goNext());
})();

/**
 * Mobile menu toggle
 */
const menuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
  });
}

/**
 * FAQ accordion: only one open at a time (optional enhancement)
 */
document.querySelectorAll('.faq-accordion [data-accordion-item]').forEach((item) => {
  const trigger = item.querySelector('[data-accordion-trigger]');
  const content = item.querySelector('[data-accordion-content]');
  if (!trigger || !content) return;
  trigger.addEventListener('click', () => {
    const isOpen = item.getAttribute('aria-expanded') === 'true';
    document.querySelectorAll('.faq-accordion [data-accordion-item]').forEach((other) => {
      other.setAttribute('aria-expanded', 'false');
      other.querySelector('[data-accordion-content]')?.classList.add('hidden');
    });
    if (!isOpen) {
      item.setAttribute('aria-expanded', 'true');
      content.classList.remove('hidden');
    }
  });
});
