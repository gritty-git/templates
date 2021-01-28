const navbar = document.getElementById('navbar');
const navbarItems = document.querySelectorAll('.navbar-item');

window.onscroll = () => {
    if (window.scrollY > 250) {
        navbar.classList.add('scrolled');
        navbarItems.forEach(item => {
            item.classList.add('scrolled');
        })
    }
    else {
        navbar.classList.remove('scrolled');
        navbarItems.forEach(item => {
            item.classList.remove('scrolled');
        })
    }
};