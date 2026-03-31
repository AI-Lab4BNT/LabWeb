// ============= ANIMATIONS & SCROLL EFFECTS ============= 

// Toggle Research Cards
function toggleCard(card) {
    card.classList.toggle('active');
}

// Intersection Observer for scroll animations
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideInUp 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all cards and items
    document.querySelectorAll('.research-card, .team-member, .project-item, .pub-item').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });

    // Make publication cards clickable when they contain a link/DOI
    document.querySelectorAll('.pub-item').forEach((card) => {
        const link = card.querySelector('a[href]');
        if (!link) return;

        card.classList.add('is-clickable');
        card.addEventListener('click', (e) => {
            // Let normal clicks on links work as-is
            if (e.target && e.target.closest && e.target.closest('a')) return;
            window.open(link.href, link.target || '_blank');
        });
    });
});
