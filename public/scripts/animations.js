(function () {
  function run() {
    var observerOptions = { rootMargin: '-100px 0px', threshold: 0 };
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var stagger = el.dataset.staggerDelay;
          if (stagger) {
            var delay = parseFloat(stagger) * 1000;
            setTimeout(function () { el.classList.add('visible'); }, delay);
          } else {
            el.classList.add('visible');
          }
        }
      });
    }, observerOptions);
    document.querySelectorAll('.animate-on-scroll').forEach(function (el) { observer.observe(el); });

    var menuBtn = document.getElementById('mobile-menu-btn');
    var mobileMenu = document.getElementById('mobile-menu');
    if (menuBtn && mobileMenu) {
      var iconOpen = document.getElementById('menu-icon-open');
      var iconClose = document.getElementById('menu-icon-close');
      menuBtn.addEventListener('click', function () {
        var isHidden = mobileMenu.classList.toggle('hidden');
        if (iconOpen && iconClose) {
          iconOpen.classList.toggle('hidden', !isHidden);
          iconClose.classList.toggle('hidden', isHidden);
        }
      });
      mobileMenu.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          mobileMenu.classList.add('hidden');
          if (iconOpen && iconClose) { iconOpen.classList.remove('hidden'); iconClose.classList.add('hidden'); }
        });
      });
    }

    document.querySelectorAll('.faq-accordion [data-accordion-item]').forEach(function (item) {
      var trigger = item.querySelector('[data-accordion-trigger]');
      var content = item.querySelector('[data-accordion-content]');
      if (!trigger || !content) return;
      trigger.addEventListener('click', function () {
        var isOpen = item.getAttribute('aria-expanded') === 'true';
        document.querySelectorAll('.faq-accordion [data-accordion-item]').forEach(function (other) {
          other.setAttribute('aria-expanded', 'false');
          other.classList.remove('open');
          other.querySelector('[data-accordion-content]').classList.add('hidden');
        });
        if (!isOpen) {
          item.setAttribute('aria-expanded', 'true');
          item.classList.add('open');
          content.classList.remove('hidden');
        }
      });
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run);
  else run();
})();
