var menuIcon = document.querySelector('.nav-icon');
var navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    navbar.classList.toggle('hidden');
}