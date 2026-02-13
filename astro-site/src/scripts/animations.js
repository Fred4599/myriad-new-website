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
