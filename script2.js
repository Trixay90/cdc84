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