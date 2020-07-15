let menu = document.querySelector('.menu');

let menuList = Array.from(menu.querySelectorAll('*[menu-list]'));
let menuItem = Array.from(menu.querySelectorAll('*[menu-item]'));
let menuDesc = Array.from(menu.querySelectorAll('*[menu-desc]'));

menuItem.map(el => {
  el.addEventListener('click', clickOnDescItem);
});

function clickOnDescItem() {
  let numberList = this.parentNode.getAttribute('menu-list');
  let numberItem = this.getAttribute('menu-item');

  let itemsList = Array.from(menuList[numberList].querySelectorAll('*[menu-item]'));
  itemsList.map(el => el.setAttribute('state', 'disable'));
  this.setAttribute('state', 'enable');

  let itemsDesc = Array.from(menuDesc[numberList].querySelectorAll(`.menu__description`));
  itemsDesc.map(el => el.setAttribute('state', 'disable'));
  itemsDesc[numberItem].setAttribute('state', 'enable');
}
