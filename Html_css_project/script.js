// JavaScript to handle hiding all nav items except the clicked one
document.addEventListener("DOMContentLoaded", () => {
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the default link behavior

            // Remove 'hide' class from all nav items to reset visibility
            navItems.forEach(nav => nav.classList.remove('hide'));

            // Add 'hide' class to all other nav items except the clicked one
            navItems.forEach(nav => {
                if (nav !== item) {
                    nav.classList.add('hide');
                }
            });
        });
    });
});


