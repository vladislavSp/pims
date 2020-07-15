// ABOUT
let aboutBlock = document.querySelector('.about'),
    aboutCont = aboutBlock.querySelector('.about__container'),
    aboutSlides = Array.from(aboutBlock.querySelectorAll('.about__slide')),
    counter = aboutBlock.querySelector('[counter="about"]'),
    allCount = aboutBlock.querySelector('[counter-about="all"]'),
    playVideoBtn = aboutBlock.querySelector('[play-btn]');

// AROUND
let aroundCont = document.querySelector('.around__cont');

// CARDS
let cardsCont = document.querySelector('.cards__cont');

// INSTA
let instaBlock = document.querySelector('.insta__container');

// MENU-MAIN
let menu = document.querySelector('.menu'),
    mainMenuCont = menu.querySelector('.menu__container'),
    descMenuCont = menu.querySelector('.menu__desc'),
    menuTitles = Array.from(menu.querySelectorAll('*[menu="btn"]')),
    menuItems = Array.from(menu.querySelectorAll('*[menu="item"]')),
    list = menu.querySelector('[menu-indicator="list"]'),
    indicator = menu.querySelector('[indicator="point"]');

menuTitles.map(el => el.addEventListener('click', stateIndicatorHandler));

function stateIndicatorHandler() {
  menuItems.map(el => {
    if (el.getAttribute('state') === 'enable') {
      indicator.style.transform = `translateY(${el.getBoundingClientRect().top - list.getBoundingClientRect().top}px)`;
    }
  });
}


// INIT SLIDERS
initAboutSlider();
initAroundSlider();
initCardsSlider();
initInstaSlider();
initMainMenuSlider();



// FUNCTIONS for sliders
function initAboutSlider() {
  allCount.textContent = `0${aboutSlides.length}`;

  let aboutSlider = new Swiper(aboutCont, {
    wrapperClass: 'about__wrapper',
    slideClass: 'about__slide',
    slidesPerView: 'auto',
    speed: 600,

    navigation: {
      disabledClass: 'slider__btn--disabled',
      nextEl: '.slider__btn[about-btn="next"]',
      prevEl: '.slider__btn[about-btn="prev"]',
    },
  });

  aboutSlider.on('slideChange', () => {
    playVideoBtn.setAttribute('play-btn', aboutSlider.activeIndex);
    counter.textContent =`0${aboutSlider.activeIndex + 1}`;
  });
}

function initAroundSlider() {
  let aroundSlider = new Swiper(aroundCont, {
    wrapperClass: 'around__wrap',
    slideClass: 'around__slide',
    slidesPerView: 'auto',
    speed: 600,
    spaceBetween: 32,

    navigation: {
      disabledClass: 'slider__btn--disabled',
      nextEl: '.slider__btn[around-btn="next"]',
      prevEl: '.slider__btn[around-btn="prev"]',
    },

    pagination: {
      el: '.slider__paginations[around="paginations"]',
      type: 'bullets',
      clickable: true,
      bulletClass: 'slider__pag',
      bulletActiveClass: 'slider__pag--active',
    },
  });
}

function initCardsSlider() {
  let cardsSlider = new Swiper(cardsCont, {
    wrapperClass: 'cards__wrap',
    slideClass: 'cards__slide',
    slidesPerView: 'auto',
    speed: 600,
    loop:true,
    centeredSlides: true,
    slideActiveClass: 'cards__slide--active',
    slideToClickedSlide: true,

    navigation: {
      disabledClass: 'slider__btn--disabled',
      nextEl: '.slider__btn[card-btn="next"]',
      prevEl: '.slider__btn[card-btn="prev"]',
    },
  });
}

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
    // loopedSlides: 100,
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
    speed: 800,
    threshold: 10,
    touchEventsTarget:'container',
    autoHeight: true,

    breakpoints: {
      991: {
        autoHeight: true,
        slidesPerView: 'auto',
        direction: 'vertical',
      },
    },

    navigation: {
      disabledClass: 'slider__btn--disabled',
      nextEl: '.menu__btn[menu-btn="next"]',
      prevEl: '.menu__btn[menu-btn="prev"]',
    },

    pagination: {
      el: '.menu__pagination[paginations="menu"]',
      type: 'bullets',
      clickable: true,
      bulletClass: 'menu__pag',
      bulletActiveClass: 'menu__pag--active',
    },
  });

  menuTitles.map(el => el.addEventListener('click', changeSlideHandler));

  function changeSlideHandler() {
    let numberSlide = this.getAttribute('menu-slide');
    mainMenuSlider.slideTo(`${Number(numberSlide)}`);
    descMenuSlider.slideTo(`${Number(numberSlide)}`);
  }

  mainMenuSlider.on('slideChange', () => {
    let activeIndex = mainMenuSlider.activeIndex;

    descMenuSlider.slideTo(`${Number(activeIndex)}`);
    menuItems.map(el => el.setAttribute('state', 'disable'));
    menuItems[activeIndex].setAttribute('state', 'enable');
    indicator.style.transform = `translateY(${menuItems[activeIndex].getBoundingClientRect().top - list.getBoundingClientRect().top}px)`;
  });
}

let descMenuSlider = new Swiper(descMenuCont, {
  wrapperClass: 'menu__desc-wrap',
  slideClass: 'menu__desc-block',
  slidesPerView: 1,
  speed: 800,
  allowTouchMove: false,
  effect: 'fade',
  fadeEffect: {crossFade: true},
  slideActiveClass: 'menu__desc-block--active',
});
