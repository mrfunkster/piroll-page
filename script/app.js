let body             = document.querySelector('body');
let burgerBtn        = document.querySelector('.header-burger');
let headerMenu       = document.querySelector('.nav-menu');
let headerTittle     = document.querySelector('.header-tittle')
let headerBar        = document.querySelector('.header');
let topBars          = document.querySelectorAll('.top-bar');
let profSkillSection = document.querySelector('.professional-skill');
let homeScrollBtn    = document.querySelector('.home-arrow');
let aboutUsSection   = document.querySelector('.about-us-section');
let scrollPos        = 0;
let isDone           = false;

let porfSkillPos = profSkillSection.offsetTop;

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
        headerBar.style.backgroundColor = 'rgba(255, 255, 255, .95)';
    } else {
        headerBar.style.backgroundColor = 'transparent'
    };
    if (scrollPos >= (porfSkillPos - (document.documentElement.clientHeight / 2)) && isDone === false) {
        isDone = progress();
    }
})

homeScrollBtn.addEventListener('click', function() {
    scrollTo(aboutUsSection);
})

function progress() {
    for(let topBar of topBars) {
        let skillPerc = topBar.parentElement.parentElement.firstElementChild.lastElementChild.textContent;
        skillPerc = +skillPerc.substr(0, skillPerc.length - 1);
        let width = 1;
        let id = setInterval(progressStatus, 20);
        function progressStatus() {
            if (width >= skillPerc) {
                clearInterval(id);
            } else {
                width++
                topBar.style.width = width + '%';
            }
        }
    }
    return true;
}

function scrollTo(element) {
    window.scroll({
        left: 0,
        top: (element.offsetTop - 100),
        behavior: 'smooth'
    })
}