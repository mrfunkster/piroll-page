const anchors = document.querySelectorAll('a[href*="#"]');
let scrollUpArrow = document.querySelector('.scroll-up');
let headerHeightFull = 100;
let headerHeightMin  = 60;

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
    e.preventDefault()
    // anchors.forEach(btn => btn.classList.remove('active'));
    // this.classList.add('active');
    let viewportWidth = document.documentElement.clientWidth;
    let headerOffset;
    if(viewportWidth < 768) {
        headerOffset = headerHeightMin;
        removeBurger();
    } else if(viewportWidth < 1200){
        headerOffset = 80;
    } else {
        headerOffset = headerHeightFull
    }
     
    const blockID = anchor.getAttribute('href').substr(1);
    let block = document.getElementById(blockID);
    $('html, body').animate({
        scrollTop: $(block).offset().top - headerOffset
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
