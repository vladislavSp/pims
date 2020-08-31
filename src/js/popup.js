const popups = [...document.querySelectorAll('*[data-popup]')];
const btnsPopup = [...document.querySelectorAll('[data-popup-btn]')];
const TIME_DURATION = 0.5;

if (btnsPopup.length) btnsPopup.forEach(btn => {
  btn.addEventListener('click', popupHandler);
});

function popupHandler(evt) {
  evt.stopPropagation();
  let popupState = this.getAttribute('data-popup-btn');
  let popupCtx = this.getAttribute('data-popup-ctx');
  // let popup = popups.filter(popup => popup.getAttribute('data-popup') === `${popupCtx}`);

  popupStateChange(popupState, this, evt.target);
};

function popupStateChange(state, obj, target) {
  const optionForOpen = {
        opacity: 1,
        onStart: () => {
          popups[0].style.display = 'flex';
          popups[0].setAttribute('data-state', `enable`);
          document.body.style.overflow = 'hidden';
        },
      },
      optionForClose = {
        opacity: 0,
        onComplete: () => {
          popups[0].style.display = `none`;
          popups[0].setAttribute('data-state', `disable`);
          document.body.style.overflow = ``;
        },
      };

  let options = state === `open` ? optionForOpen : optionForClose;

  if (obj === target) {
    popups[0].style.opacity = state === `open` ? 0 : ``;
    gsap.to(popups[0], TIME_DURATION, options);
  } else return;

  state === `open` ? document.addEventListener('keydown', closePopup) : document.removeEventListener('keydown', closePopup);
}

function closePopup(evt) {
  if (evt.keyCode === 27) {
    gsap.to(popups[0], TIME_DURATION, {
      opacity: 0,
      onComplete: () => {
        popups[0].style.display = `none`;
        document.body.style.overflow = ``;
      },
    });
  }
}