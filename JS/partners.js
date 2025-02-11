const burger = document.querySelector('.burger');
const header__nav = document.querySelector('.header__menu--top');
const header__item = header__nav.querySelectorAll('a');
const body = document.body;

burger.addEventListener('click', () => {
    body.classList.toggle('stop-scroll');
    burger.classList.toggle('burger--active');
    header__nav.classList.toggle('header__menu--visible');
});

header__item.forEach(el => {
    el.addEventListener('click', () => {
        body.classList.remove('stop-scroll');
    burger.classList.remove('burger--active');
    header__nav.classList.remove('header__menu--visible')
    });
});