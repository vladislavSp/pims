let headerMenuBtn = document.querySelector('[menu-btn="header"]'),
    headerMenu = document.querySelector('[header-menu]');

headerMenuBtn.addEventListener('click', openHeaderMenu);

function openHeaderMenu() {
  let state = this.getAttribute('state');

  headerMenu.setAttribute('header-menu', state === 'close' || state === 'no' ? 'open' : 'close');
  this.setAttribute('state', state === 'close' || state === 'no' ? 'open' : 'close');
}
