// ============= TOP NAVIGATION & MENU =============

function togglePeopleDropdown(event) {
    if (event) {
        event.preventDefault();
    }

    const dropdown = document.getElementById('peopleNavDropdown');
    if (dropdown) {
        dropdown.classList.toggle('show');
    }
}

function closePeopleDropdown() {
    const dropdown = document.getElementById('peopleNavDropdown');
    if (dropdown) {
        dropdown.classList.remove('show');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    // Toggle mobile navigation
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when link is clicked
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    document.addEventListener('click', function(event) {
        const peopleDropdown = document.getElementById('peopleNavDropdown');
        if (!peopleDropdown) {
            return;
        }

        const dropdownTrigger = event.target.closest('li.dropdown');
        if (dropdownTrigger && dropdownTrigger.contains(event.target)) {
            return;
        }

        peopleDropdown.classList.remove('show');
    });
});
