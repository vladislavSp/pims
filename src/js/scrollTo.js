let links = Array.from(document.querySelectorAll('*[link]')),
    blocks = Array.from(document.querySelectorAll('*[scroll-block]')),
    headerMenuBtn = document.querySelector('[menu-btn="header"]'),
    headerMenu = document.querySelector('[header-menu]');

links.map(el => el.addEventListener('click', linksHandler));

function linksHandler() {
  let identificator = this.getAttribute('link');

  blocks.map(el => {
    if (el.getAttribute('scroll-block') === `${identificator}`) {
      headerMenu.setAttribute('header-menu', 'close');
      headerMenuBtn.setAttribute('state', 'close');
      tweenMaxFunction(el);
    }
  });
}

function tweenMaxFunction (obj) {
  gsap.to(document.querySelector('html'), 0.8, {
    ease: Power2.easeOut,
    scrollTop: obj.getBoundingClientRect().top + pageYOffset
  });
}
