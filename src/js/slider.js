// Blocks
const menu = document.querySelector('.menu');
const instaBlock = document.querySelector('.insta__container');
const aroundBlock = document.querySelector('.around__cont');

if (menu) {
  let mainMenuCont = menu.querySelector('.menu__container'),
  menuDescCont = menu.querySelector('.menu__desc-cont');

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

if (aroundBlock) {
  let aroundSlider = new Swiper(aroundBlock, {
    wrapperClass: 'around__wrap',
    slideClass: 'around__slide',
    speed: 400,

    // fadeEffect: {
    //   crossFade: true,
    // },

    pagination: {
      el: '.around__paginations',
      type: 'bullets',
      clickable: true,
      bulletClass: 'around__pag',
      bulletActiveClass: 'around__pag--active',
    },
  });
}