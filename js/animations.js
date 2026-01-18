// Scroll Reveal Animation
function initScrollReveal() {
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger on load
}

function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 150;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    });
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', initScrollReveal);
