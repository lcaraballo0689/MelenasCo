// Parallax effect for main title
const mainTitle = document.querySelector('.main-title');
window.addEventListener('scroll', () => {
    const scrollValue = window.scrollY;
    mainTitle.style.setProperty('--scroll', scrollValue);
});
