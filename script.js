/* ============================================
   VINCENT MATLHOLWA — PORTFOLIO JS
   Multi-page version
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    initNav();
    initScrollTop();
    initFadeIn();
});

function initNav() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navLinks.classList.toggle('open');
        });
    }

    window.addEventListener('scroll', () => {
        if (navbar) {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        }
    });
}

function initScrollTop() {
    const scrollTop = document.getElementById('scrollTop');
    if (!scrollTop) return;

    window.addEventListener('scroll', () => {
        scrollTop.classList.toggle('visible', window.scrollY > 500);
    });
    scrollTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function initFadeIn() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll(
        '.service-card, .project-card, .skill-category, .contact-item, .about-text, .about-card, .contact-form-wrap, .home-card, .home-project-card, .cta-block, .prof-item'
    ).forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

function handleSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    const subjectLabels = {
        'web-dev': 'Web Development Project',
        'pwa': 'Progressive Web App',
        'it-support': 'IT Support',
        'cv': 'CV Creation',
        'office': 'Office Activation',
        'other': 'General Inquiry'
    };

    const whatsappMsg = `Hi Vincent! I'm ${name} (${email}).\n\nSubject: ${subjectLabels[subject] || subject}\n\n${message}`;
    const encoded = encodeURIComponent(whatsappMsg);
    window.open(`https://wa.me/27677834591?text=${encoded}`, '_blank');

    e.target.reset();
    alert('Opening WhatsApp to send your message!');
}
