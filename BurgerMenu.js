const navIcon = document.querySelector('.nav-icon');
const navbar = document.querySelector('.navbar');
const body = document.body;

// Ensure correct initial state
navbar.classList.add('hidden'); // Start with menu hidden
body.classList.remove('body-no-scroll'); // Ensure scroll is enabled by default

navIcon.addEventListener('click', () => {
    navbar.classList.toggle('hidden');
    
    // Toggle scroll lock based on menu state
    if (!navbar.classList.contains('hidden')) {
        body.classList.add('body-no-scroll');
    } else {
        body.classList.remove('body-no-scroll');
    }
});

// Optional: Close menu on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !navbar.classList.contains('hidden')) {
        navbar.classList.add('hidden');
        body.classList.remove('body-no-scroll');
    }
});

// Optional: Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && 
        !navIcon.contains(e.target) && 
        !navbar.classList.contains('hidden')) {
        navbar.classList.add('hidden');
        body.classList.remove('body-no-scroll');
    }
});