// AROUND
let aroundCont = document.querySelector('.around__cont');

// INSTA
let instaBlock = document.querySelector('.insta__container');

// MENU-MAIN
let menu = document.querySelector('.menu'),
    mainMenuCont = menu.querySelector('.menu__container'),
    list = menu.querySelector('[menu-indicator="list"]'),
    indicator = menu.querySelector('[indicator="point"]');

    menuDescCont = document.querySelector('.menu__desc-cont');
    //menu__desc-wrap // menu__desc-item

// INIT SLIDERS
initInstaSlider();
initMainMenuSlider();
initDescMenuSlider();

// FUNCTIONS for sliders
function initInstaSlider() {
  let instaSlider = new Swiper(instaBlock, {
    wrapperClass: 'insta__wrap',
    slideClass: 'insta__slide',
    slidesPerView: 'auto',
    speed: 4000,
    freeModeMomentumRatio: 0.8,
    freeModeMomentumVelocityRatio: 0.8,
    loop: true,
    freeMode: true,
    loopedSlides: 100,

    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
  });
}

function initMainMenuSlider() {
  let mainMenuSlider = new Swiper(mainMenuCont, {
    wrapperClass: 'menu__wrapper',
    slideClass: 'menu__slide',
    slidesPerView: 'auto',
    direction: 'horizontal',
    speed: 0,
    allowTouchMove: false,

    navigation: {
      disabledClass: 'slider__btn--disabled',
      nextEl: '.menu__btn[menu-btn="next"]',
      prevEl: '.menu__btn[menu-btn="prev"]',
    },
  });
}

function initDescMenuSlider() {
  let mainMenuSlider = new Swiper(menuDescCont, {
    wrapperClass: 'menu__desc-wrap',
    slideClass: 'menu__desc-item',
    slidesPerView: 'auto',
    direction: 'horizontal',
    speed: 0,
    allowTouchMove: false,
    // effect: 'fade',

    // fadeEffect: {
    //   crossFade: true
    // },

    navigation: {
      disabledClass: 'slider__btn--disabled',
      nextEl: '.menu__btn[menu-btn="next"]',
      prevEl: '.menu__btn[menu-btn="prev"]',
    },
  });
}