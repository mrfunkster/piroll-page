const anchors = document.querySelectorAll('a[href*="#"]');
let scrollUpArrow = document.querySelector('.scroll-up');
let headerHeightFull = 100;
let headerTablet = 80;
let headerHeightMin  = 60;

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
    e.preventDefault()
    let viewportWidth = document.documentElement.clientWidth;
    let headerOffset;
    if(viewportWidth < 768) {
        headerOffset = headerHeightMin;
        removeBurger();
    } else if(viewportWidth < 1200){
        headerOffset = headerTablet;
    } else {
        headerOffset = headerHeightFull
    }
    
    const blockID = anchor.getAttribute('href').substr(1);
    let block = document.getElementById(blockID);
    $('html, body').animate({
        scrollTop: $(block).offset().top - headerOffset + 1
    }, 800);
    })
}

window.addEventListener('scroll', function() {
    if (window.scrollY > (document.documentElement.clientHeight / 1.8)) {
        scrollUpArrow.classList.add('show-scroll-up');
    } else {
        scrollUpArrow.classList.remove('show-scroll-up');
    }
})
