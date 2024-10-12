const buger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

buger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});