let circles = [...document.querySelectorAll('[data-round]')];

if (circles) circles.forEach(el => el.addEventListener('click', clickCirclesHandler));
let timer;

function clickCirclesHandler() {
  this.querySelector('.desc__item').style.opacity = 1;
  this.setAttribute('data-state', 'enable');
  this.addEventListener('click', closeCirclesItem);
  this.removeEventListener('click', clickCirclesHandler);

  timer = setTimeout(() => {
    this.querySelector('.desc__item').style.opacity = 0;
    this.setAttribute('data-state', 'disable');
    this.addEventListener('click', clickCirclesHandler);
  }, 10000);
}

function closeCirclesItem() {
  clearTimeout(timer);
  this.setAttribute('data-state', 'disable');
  this.addEventListener('click', clickCirclesHandler);
  this.querySelector('.desc__item').style.opacity = 0;
}