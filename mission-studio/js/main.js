document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');

    if (menuBtn && mobileNav) {
        menuBtn.addEventListener('click', () => {
            mobileNav.classList.toggle('active');
        });
    }

    // Theme Toggle
    const themeToggleBtn = document.getElementById('theme-toggle');
    const root = document.documentElement;

    // Check system preference
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    let currentTheme = localStorage.getItem('mission-theme') || (prefersDark ? 'dark' : 'light');

    if (currentTheme) {
        root.setAttribute('data-theme', currentTheme);
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            currentTheme = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
            root.setAttribute('data-theme', currentTheme);
            localStorage.setItem('mission-theme', currentTheme);
        });
    }

    // Dynamic Form Toggles
    const contactType = document.getElementById('contact-type');
    const formGroups = document.querySelectorAll('.form-group-conditional');

    if (contactType) {
        contactType.addEventListener('change', (e) => {
            const val = e.target.value;
            formGroups.forEach(group => {
                if (group.dataset.type === val) {
                    group.style.display = 'block';
                } else {
                    group.style.display = 'none';
                }
            });
        });

        // Trigger on load
        contactType.dispatchEvent(new Event('change'));
    }
});
