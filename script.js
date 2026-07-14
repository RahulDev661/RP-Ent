const menuToggle = document.getElementById('menuToggle');
const navContainer = document.getElementById('navContainer');

// Toggles the mobile slide drawer open and shut
menuToggle.addEventListener('click', () => {
    navContainer.classList.toggle('active');
    
    // Switches the layout icon from three bars to a close "X" when open
    const icon = menuToggle.querySelector('i');
    if (navContainer.classList.contains('active')) {
        icon.className = 'ri-close-line';
    } else {
        icon.className = 'ri-menu-3-line';
    }
});

// Closes the panel instantly if any link inside it gets clicked
document.querySelectorAll('.nav-links a, .contact-link').forEach(link => {
    link.addEventListener('click', () => {
        navContainer.classList.remove('active');
        menuToggle.querySelector('i').className = 'ri-menu-3-line';
    });
});