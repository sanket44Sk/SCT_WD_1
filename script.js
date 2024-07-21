document.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#444';
    } else {
        navbar.style.backgroundColor = '#333';
    }
});
