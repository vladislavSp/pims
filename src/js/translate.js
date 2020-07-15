let selectors = Array.from(document.querySelectorAll('*[lang]'));

selectors.map(el => el.addEventListener('click', setStateHandler));

function setStateHandler() {
  selectors.map(el => el.setAttribute('state', 'disable'));
  this.setAttribute('state', 'enable');
}
