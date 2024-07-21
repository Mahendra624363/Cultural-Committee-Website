let navLinks = document.querySelectorAll('.nav-links a');

function toggleActiveClass(clickedLink) {
    navLinks.forEach(link => {
        if (link === clickedLink) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

toggleActiveClass(navLinks[0]);

navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        toggleActiveClass(link);
    });
});
