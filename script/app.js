let body         = document.querySelector('body');
let burgerBtn    = document.querySelector('.header-burger');
let headerMenu   = document.querySelector('.nav-menu');
let headerTittle = document.querySelector('.header-tittle')

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