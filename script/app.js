
let headerBar        = document.querySelector('.header');
let topBars          = document.querySelectorAll('.top-bar');
let profSkillSection = document.querySelector('.professional-skill');
let homeScrollBtn    = document.querySelector('.home-arrow');
let aboutUsSection   = document.querySelector('.about-us-section');
let degSection       = document.querySelector('.deg-section');
let processSection   = document.querySelector('.work-process-section');
let servicesSection  = document.querySelector('.features-section');
let testimonals      = document.querySelector('.slider-section');
let contactSection   = document.querySelector('.contact-section');
let playerButton     = document.querySelector('.play-button');
let playerThumb      = document.querySelector('.player-overlay');
let contactUsBtn     = document.querySelector('#contact-us');
let scrollPos        = 0;
let isDone           = false;

let porfSkillPos = profSkillSection.offsetTop;

window.addEventListener('scroll', function() {
    let headerHeight;
    if (document.documentElement.clientWidth < 768) {
        headerHeight = headerHeightMin;
    } else if (document.documentElement.clientWidth < 1200) {
        headerHeight = headerTablet;
    } else {
        headerHeight = headerHeightFull;
    };
    scrollPos = window.scrollY;
    if ((document.documentElement.clientHeight <= 500 && scrollPos > 5) || scrollPos > 50){
        headerBar.style.backgroundColor = 'rgba(255, 255, 255, .95)';
    } else {
        headerBar.style.backgroundColor = 'transparent'
    };
    if (scrollPos >= (porfSkillPos - (document.documentElement.clientHeight / 2)) && isDone === false) {
        isDone = progress();
    };
    if (scrollPos < (aboutUsSection.offsetTop - headerHeight)) {
        headerTittle.innerHTML = "Welcome"
    }
    if (scrollPos >= (aboutUsSection.offsetTop - headerHeight)) {
        headerTittle.innerHTML = "About";
    }
    if (scrollPos >= (degSection.offsetTop - headerHeight)) {
        headerTittle.innerHTML = "Work";
    }
    if (scrollPos >= (processSection.offsetTop - headerHeight)) {
        headerTittle.innerHTML = "Process";
    }
    if (scrollPos >= (servicesSection.offsetTop - headerHeight)) {
        headerTittle.innerHTML = "Services";
    }
    if (scrollPos >= (testimonals.offsetTop - headerHeight)) {
        headerTittle.innerHTML = "Testimonals";
    }
    if (scrollPos >= (contactSection.offsetTop - headerHeight)) {
        headerTittle.innerHTML = "Contact";
    }
})


playerButton.addEventListener('click', function() {
    playerThumb.classList.add('hide');
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