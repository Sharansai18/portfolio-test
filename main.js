//nav bar in mobile

const hamburger = document.querySelector('.hamburger');
const navLinks  = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});
//
const themeSwitcher = document.getElementById('theme-switcher');
const root = document.documentElement;

themeSwitcher.addEventListener('click', () => {
    if (root.style.getPropertyValue('--secry-color') === '#0a1454') {
        root.style.setProperty('--secry-color', '#ffffff')
        root.style.setProperty('--tri-color', '#000')
        themeSwitcher.textContent = 'DARK MODE'
    }
    else {
        root.style.setProperty('--secry-color', '#0a1454')
        root.style.setProperty('--tri-color', '#ffffff')
        themeSwitcher.textContent = 'LIGHT MODE'
    }
})