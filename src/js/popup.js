const popup = document.querySelector('[data-popup]');
const btnsPopup = [...document.querySelectorAll('[data-popup-btn]')];

if (btnsPopup.length) btnsPopup.forEach(btn => {
  btn.addEventListener('click', popupHandler);
});

function popupHandler(evt) {
  evt.stopPropagation();
  let popupState = this.getAttribute('data-popup-btn');
  popupStateChange(popupState, this, evt.target);
};

function popupStateChange(state, obj, target) {
  const optionForOpen = {
        opacity: 1,
        onStart: () => {
          popup.style.display = 'flex';
          popup.setAttribute('data-state', `enable`);
          document.body.style.overflow = 'hidden';
        },
      },
      optionForClose = {
        opacity: 0,
        onComplete: () => {
          popup.style.display = `none`;
          popup.setAttribute('data-state', `disable`);
          document.body.style.overflow = ``;
        },
      };

  let options = state === `open` ? optionForOpen : optionForClose;

  if (obj === target) {
    popup.style.opacity = state === `open` ? 0 : ``;
    gsap.to(popup, 0.5, options);
  } else return;

  state === `open` ? document.addEventListener('keydown', closePopup) : document.removeEventListener('keydown', closePopup);
}

function closePopup(evt) {
  if (evt.keyCode === 27) {
    gsap.to(popup, 0.5, {
      opacity: 0,
      onComplete: () => {
        popup.style.display = `none`;
        document.body.style.overflow = ``;
      },
    });
  }
}