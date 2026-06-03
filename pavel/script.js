// PavelPPR — интерактив
// Scroll-reveal для секций + плавное появление
(function () {
  'use strict';

  // Reveal on scroll
  const targets = document.querySelectorAll('.card, .stage, .price-card, .timeline__step, .questions__item');

  if ('IntersectionObserver' in window) {
    targets.forEach(el => el.classList.add('reveal'));

    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    targets.forEach(el => io.observe(el));
  }

  // Smooth scroll для якорных ссылок (на старых браузерах без CSS scroll-behavior)
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const id = link.getAttribute('href');
      if (id.length > 1) {
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // Лог в консоль — для дебага (не обязательно)
  // console.log('PavelPPR landing ready');
})();
