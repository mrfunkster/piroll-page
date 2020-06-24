let body         = document.querySelector('body');
let burgerBtn    = document.querySelector('.header-burger');
let headerMenu   = document.querySelector('.nav-menu');
let headerTittle = document.querySelector('.header-tittle')
let headerBar    = document.querySelector('.header');
let scrollPos    = 0;

burgerBtn.addEventListener('click', function () {
    if (headerMenu.classList.contains('active') === true) {
        headerMenu.classList.remove('active');
        burgerBtn.classList.remove('active');
        headerTittle.classList.remove('active');
        body.classList.remove('lock');
    } else {
        headerMenu.classList.add('active');
        burgerBtn.classList.add('active');
        headerTittle.classList.add('active');
        body.classList.add('lock');
    }
});

window.addEventListener('scroll', function() {
    scrollPos = window.scrollY;
    if ((document.documentElement.clientHeight <= 500 && scrollPos > 5) || scrollPos > 50){
        headerBar.style.backgroundColor = 'rgba(255, 255, 255, .9)';
    } else {
        headerBar.style.backgroundColor = 'transparent'
    }
})