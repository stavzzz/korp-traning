// ===================================
// F1 Travel - JavaScript
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initFAQ();
    initForms();
    initScrollEffects();
});

// ===================================
// Navigation
// ===================================

function initNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    // Toggle mobile menu
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
    
    // Close menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
    
    // Sticky nav effect
    const nav = document.getElementById('nav');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            nav.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });
}

// ===================================
// FAQ Accordion
// ===================================

function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
}

// ===================================
// Forms
// ===================================

function initForms() {
    const leadForm = document.getElementById('leadForm');
    const modalLeadForm = document.getElementById('modalLeadForm');
    
    if (leadForm) {
        leadForm.addEventListener('submit', handleFormSubmit);
    }
    
    if (modalLeadForm) {
        modalLeadForm.addEventListener('submit', handleFormSubmit);
    }
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    console.log('Form submitted:', data);
    
    // TODO: Integrate with backend/Google Forms/Telegram bot
    // For now, just show success message
    
    alert('Спасибо! Мы отправили программу на вашу почту и скоро свяжемся с вами.');
    
    // Close modal if it's modal form
    if (e.target.id === 'modalLeadForm') {
        closeLeadForm();
    }
    
    // Reset form
    e.target.reset();
}

// ===================================
// Lead Form Modal
// ===================================

function openLeadForm(tour = '') {
    const modal = document.getElementById('leadModal');
    const tourSelect = document.getElementById('modalTourSelect');
    
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Pre-select tour if provided
        if (tour && tourSelect) {
            const tourMap = {
                'Байкал': 'baikal',
                'Вьетнам': 'vietnam',
                'ЮАР': 'southafrica'
            };
            tourSelect.value = tourMap[tour] || '';
        }
    }
}

function closeLeadForm() {
    const modal = document.getElementById('leadModal');
    
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Close modal on backdrop click
document.addEventListener('click', (e) => {
    const modal = document.getElementById('leadModal');
    if (e.target === modal) {
        closeLeadForm();
    }
});

// Close modal on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLeadForm();
    }
});

// ===================================
// Scroll Effects
// ===================================

function initScrollEffects() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const navHeight = document.getElementById('nav').offsetHeight;
                const targetPosition = target.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Fade-in animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.card, .tour-card, .testimonial-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ===================================
// Telegram Widget (Optional)
// ===================================

function initTelegramWidget() {
    // Add floating Telegram button
    const telegramBtn = document.createElement('a');
    telegramBtn.href = 'https://t.me/Insightful_Travels';
    telegramBtn.target = '_blank';
    telegramBtn.className = 'telegram-widget';
    telegramBtn.innerHTML = '📱';
    telegramBtn.title = 'Написать в Telegram';
    document.body.appendChild(telegramBtn);
    
    // Add CSS for widget
    const style = document.createElement('style');
    style.textContent = `
        .telegram-widget {
            position: fixed;
            bottom: 24px;
            right: 24px;
            width: 60px;
            height: 60px;
            background: #0088cc;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 32px;
            box-shadow: 0 4px 12px rgba(0, 136, 204, 0.4);
            z-index: 999;
            transition: all 0.3s ease;
        }
        .telegram-widget:hover {
            transform: scale(1.1);
            box-shadow: 0 6px 16px rgba(0, 136, 204, 0.6);
        }
    `;
    document.head.appendChild(style);
}

// Initialize Telegram widget
initTelegramWidget();

// ===================================
// Exit Intent Popup (Optional)
// ===================================

let exitIntentShown = false;

document.addEventListener('mouseleave', (e) => {
    if (e.clientY <= 0 && !exitIntentShown) {
        exitIntentShown = true;
        openLeadForm();
    }
});
