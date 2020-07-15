let headerTitle = Array.from(document.querySelectorAll('*[header-animation="title"]'));
let headerDesc = document.querySelector('[header-animation="desc"]');

// ANIMATION TITLE
function animationText () {
  headerTitle.map(el => {
    gsap.from(el, { duration: 1, y: 90 });
  });

  gsap.from(headerDesc, { duration: 1, y: 40 });
}

animationText();
