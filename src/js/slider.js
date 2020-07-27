// INSTA
let instaBlock = document.querySelector('.insta__container');

// MENU-MAIN
let menu = document.querySelector('.menu');

if (menu) {
  let mainMenuCont = menu.querySelector('.menu__container'),
  menuDescCont = document.querySelector('.menu__desc-cont');

  function initMainMenuSlider() {
    let mainMenuSlider = new Swiper(mainMenuCont, {
      wrapperClass: 'menu__wrapper',
      slideClass: 'menu__slide',
      slidesPerView: 'auto',
      speed: 400,
      effect: 'fade',
  
      fadeEffect: {
        crossFade: true,
      },
  
      navigation: {
        disabledClass: 'slider__btn--disabled',
        nextEl: '.menu__btn[menu-btn="next"]',
        prevEl: '.menu__btn[menu-btn="prev"]',
      },
    });
  
    let mainDescSlider = new Swiper(menuDescCont, {
      wrapperClass: 'menu__desc-wrap',
      slideClass: 'menu__desc-item',
      slidesPerView: 'auto',
      direction: 'horizontal',
      speed: 400,
      allowTouchMove: false,
      effect: 'fade',
  
      fadeEffect: {
        crossFade: true,
      },
    });
  
    // подвязка слайдера описания на изменения слайдера картинок
    mainMenuSlider.on('slideChange', () => {
      mainDescSlider.slideTo(mainMenuSlider.realIndex);
    });
  }

  initMainMenuSlider();
}

// INIT SLIDERS
if (instaBlock) {
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
  
  initInstaSlider();
}

