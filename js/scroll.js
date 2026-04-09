// ============= SMOOTH SCROLL & SCROLL-TO-TOP ============= 

// Smooth Scroll Function
function smoothScroll(e) {
    if (e.preventDefault) e.preventDefault();
    
    const target = e.target.getAttribute('href') || '#about';
    const element = document.querySelector(target);
    
    if (element) {
        const headerOffset = 60;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// Scroll to Top Button
document.addEventListener('DOMContentLoaded', function() {
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Initialize CTA buttons with smooth scroll
document.addEventListener('DOMContentLoaded', function() {
    // Removed conflicting event listener
});
