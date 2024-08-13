'use strict';

/*MOBILE NAVBAR TOGGLE */
let navbar = document.querySelector('.header .flex .navbar');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
}
 

// change navbar styles on scroll

window.addEventListener('scroll', () => {
    document.querySelector('header').classList.toggle('window-scroll',window.scrollY > 60)
})






var swiper = new Swiper(".product-slider", {
    slidesPerView: 3,
    loop:true,
    spaceBetween: 10,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      550: {
        slidesPerView: 2,
      },
      800: {
        slidesPerView: 3,
      },
      1000: {
        slidesPerView: 3,
      },
    }, 
});

var swiper = new Swiper(".review-slider", {
  slidesPerView: 3,
  loop:true,
  spaceBetween: 10,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    550: {
      slidesPerView: 2,
    },
    800: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 3,
    },
  }, 
});