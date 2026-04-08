import './style.css'

// Reveal on scroll observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Parallax effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImg = document.getElementById('hero-img');
    if (heroImg) {
        heroImg.style.transform = `translateY(${scrolled * 0.4}px) scale(1.1)`;
    }
});
