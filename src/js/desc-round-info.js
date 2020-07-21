let circles = [...document.querySelectorAll('[data-round]')];

if (circles) circles.forEach(el => el.addEventListener('click', clickCirclesHandler));

function clickCirclesHandler() {
  let timer;

  this.querySelector('.desc__item').style.opacity = 1;
  this.removeEventListener('click', clickCirclesHandler);

  timer = setTimeout(() => {
    this.querySelector('.desc__item').style.opacity = 0;
    this.addEventListener('click', clickCirclesHandler);
  }, 3000);
}



