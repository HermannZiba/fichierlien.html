// Toggle menu for mobile
document.getElementById('menu-icon').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
});

// Dropdown toggle for mobile
document.querySelectorAll('.dropdown .dropbtn').forEach(button => {
    button.addEventListener('click', function(event) {
        const dropdown = event.target.closest('.dropdown');
        dropdown.classList.toggle('open');
        event.stopPropagation();  // Prevent closing of dropdown when clicking inside
    });
});

document.addEventListener('click', function(event) {
    if (!event.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown.open').forEach(dropdown => {
            dropdown.classList.remove('open');
        });
    }
});
