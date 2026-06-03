/* =====================================================
   Pereval — interactive
   Mobile menu, smooth scroll, form, scroll reveal
   ===================================================== */

(function () {
  'use strict';

  // ---- Mobile menu ----
  var burger = document.getElementById('burger');
  var mobileMenu = document.getElementById('mobileMenu');
  if (burger && mobileMenu) {
    burger.addEventListener('click', function () {
      var isOpen = mobileMenu.classList.toggle('is-open');
      burger.classList.toggle('is-open', isOpen);
      burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      mobileMenu.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('is-open');
        burger.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      });
    });
  }

  // ---- Smooth scroll (fallback for older browsers) ----
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var id = this.getAttribute('href');
      if (id === '#' || id.length < 2) return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      var headerHeight = document.querySelector('.header')?.offsetHeight || 72;
      var top = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });

  // ---- Header background on scroll ----
  var header = document.querySelector('.header');
  if (header) {
    var lastScroll = 0;
    window.addEventListener('scroll', function () {
      var y = window.scrollY;
      if (y > 30) {
        header.style.background = 'rgba(244, 239, 230, 0.96)';
        header.style.boxShadow = '0 4px 20px -10px rgba(26,46,42,0.15)';
      } else {
        header.style.background = '';
        header.style.boxShadow = '';
      }
      lastScroll = y;
    }, { passive: true });
  }

  // ---- Scroll reveal ----
  if ('IntersectionObserver' in window) {
    var revealEls = document.querySelectorAll(
      '.pain-list li, .flow-card, .stay-card, .program__day, .place-facts__item, .includes__col, .faq, .section__title, .section__lead, .eyebrow, .hero__title, .hero__sub, .hero__cta, .hero__chips'
    );
    revealEls.forEach(function (el) { el.classList.add('reveal'); });

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(function (el) { io.observe(el); });
  }

  // ---- Form (basic) ----
  var form = document.getElementById('bookingForm');
  var hint = document.getElementById('formHint');
  if (form && hint) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      hint.classList.remove('is-success', 'is-error');

      var data = new FormData(form);
      var name = (data.get('name') || '').toString().trim();
      var contact = (data.get('contact') || '').toString().trim();
      var date = (data.get('date') || '').toString().trim();
      var consent = data.get('consent');

      if (!name || !contact || !date || !consent) {
        hint.textContent = 'Заполни, пожалуйста, все поля и подтверди согласие.';
        hint.classList.add('is-error');
        return;
      }

      hint.textContent = 'Спасибо! Мы свяжемся с тобой в течение 24 часов и подтвердим бронь.';
      hint.classList.add('is-success');
      form.reset();
    });
  }

  // ---- Set active nav link on scroll ----
  var navLinks = document.querySelectorAll('.nav a[href^="#"]');
  if (navLinks.length && 'IntersectionObserver' in window) {
    var sections = [];
    navLinks.forEach(function (link) {
      var id = link.getAttribute('href');
      var sec = document.querySelector(id);
      if (sec) sections.push({ link: link, sec: sec });
    });
    var navIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          navLinks.forEach(function (l) { l.style.color = ''; });
          var match = sections.find(function (s) { return s.sec === entry.target; });
          if (match) match.link.style.color = 'var(--accent)';
        }
      });
    }, { rootMargin: '-50% 0px -45% 0px' });
    sections.forEach(function (s) { navIO.observe(s.sec); });
  }
})();
