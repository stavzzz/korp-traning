// Reveal on scroll
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.addEventListener('DOMContentLoaded', () => {
  // mark sections and cards for reveal
  const revealTargets = document.querySelectorAll(
    '.section__title, .section__lead, .feature, .audience__card, .stack__card, .integration, .subagent__item, .extra, .price-card, .timeline__item, .deliverable'
  );
  revealTargets.forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
  });

  // smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
