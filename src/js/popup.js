const popups = [...document.querySelectorAll('*[data-popup]')];
const btnsPopup = [...document.querySelectorAll('[data-popup-btn]')];
const TIME_DURATION = 0.5;

if (btnsPopup.length) btnsPopup.forEach(btn => {
  btn.addEventListener('click', popupHandler);
});

let popupState, popupCtx, popup;

function popupHandler(evt) {
  evt.stopPropagation();
  evt.preventDefault();

  popupState = this.getAttribute('data-popup-btn');
  
  if (popupState === `open`) { // remember popup from Btn
    popupCtx = this.getAttribute('data-popup-ctx');
    popup = popups.filter(popup => popup.getAttribute('data-popup') === `${popupCtx}`)[0];
  }
  popupStateChange(popupState, this, evt.target, popup);
};

function popupStateChange(state, obj, target, popup) {
  if (obj === target) {
    popup.style.opacity = state === `open` ? 0 : ``;
    gsap.to(popup, TIME_DURATION, optionsForGsap(state));
  } else return;

  state === `open` ? document.addEventListener('keydown', closePopup) : document.removeEventListener('keydown', closePopup);
}

function closePopup(evt) {
  if (evt.keyCode === 27) {
    gsap.to(popup, TIME_DURATION, optionsForGsap(`close`));
  }
}

// Options for GSAP
function optionsForGsap(state) {
  switch (state) {
    case `open`:
      return {
        opacity: 1,
        onStart: () => {
          popup.style.display = 'flex';
          popup.setAttribute('data-state', `enable`);
          document.body.style.overflow = 'hidden';
        },
      };
    case `close`:
      return {
        opacity: 0,
        onComplete: () => {
          popup.style.display = `none`;
          popup.setAttribute('data-state', `disable`);
          document.body.style.overflow = ``;
        },
      }; 
  }
}