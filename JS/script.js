const swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



  let accordion = document.querySelector('.accordion');
let items = accordion.querySelectorAll('.accordion__item');
let title = accordion.querySelectorAll('.accordion__title');

function toggleAccordion() {
  let thisItem = this.parentNode;
  
  items.forEach(item => {
    if (thisItem == item ) {
      // if this item is equal to the clicked item, open it.
      thisItem.classList.toggle('active');
      return;
    } 
    // otherwise, remove the open class
    item.classList.remove('active');
  });
}

title.forEach(question => question.addEventListener('click', toggleAccordion));

$(function() {
  $('.marquee').marquee({
    duration: 7000,
    startVisible: true,
    duplicated: true
  });
});


/* select */

document.addEventListener("DOMContentLoaded", function () {
  const select = document.getElementById("standard-select");
  const photos = document.querySelectorAll("#birthdays .photo");

  select.addEventListener("change", function () {
      const selectedCategory = select.value;

      photos.forEach(photo => {
          const category = photo.getAttribute("data-category");
          if (selectedCategory === "all" || category === selectedCategory) {
              photo.style.removeProperty("display");
          } else {
              photo.style.display = "none";
          }
          
      });
  });
});


/* burger */

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

const swiper2 = new Swiper(".mySwiper-about", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiper3 = new Swiper(".mySwiper-featured", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


const swiper4 = new Swiper(".mySwiper-photo", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

