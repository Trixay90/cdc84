slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("custom-slider");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1;}
    if (n < 1) {slideIndex = slides.length;}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex - 1].style.display = "block";
}

function openMenuMobile() {
    var nav = document.querySelector('.header__nav');
    var burgerMenu = document.querySelector('.header__burger');

    nav.classList.add('open');
    burgerMenu.classList.add('active'); 
}

function closeMenuMobile() {
    var nav = document.querySelector('.header__nav');
    var burgerMenu = document.querySelector('.header__burger');

    nav.classList.remove('open');
    burgerMenu.classList.remove('active');
}