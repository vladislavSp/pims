!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1),n(2),n(3),n(4),n(5),n(6),n(7),n(8),n(9),n(10),n(11),n(12),n(13)},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t){AOS.init()},function(e,t){let n=Array.from(document.querySelectorAll('*[header-animation="title"]')),o=document.querySelector('[header-animation="desc"]');n.map(e=>{gsap.from(e,{duration:1,y:90})}),gsap.from(o,{duration:1,y:40})},function(e,t){let n=document.querySelector('[menu-btn="header"]'),o=document.querySelector("[header-menu]");n.addEventListener("click",(function(){let e=this.getAttribute("state");o.setAttribute("header-menu","close"===e||"no"===e?"open":"close"),this.setAttribute("state","close"===e||"no"===e?"open":"close")}))},function(e,t){document.querySelector(".around__cont");let n=document.querySelector(".insta__container"),o=document.querySelector(".menu"),r=o.querySelector(".menu__container");o.querySelector('[menu-indicator="list"]'),o.querySelector('[indicator="point"]');menuDescCont=document.querySelector(".menu__desc-cont"),new Swiper(n,{wrapperClass:"insta__wrap",slideClass:"insta__slide",slidesPerView:"auto",speed:4e3,freeModeMomentumRatio:.8,freeModeMomentumVelocityRatio:.8,loop:!0,freeMode:!0,loopedSlides:100,autoplay:{delay:0,disableOnInteraction:!1}}),function(){let e=new Swiper(r,{wrapperClass:"menu__wrapper",slideClass:"menu__slide",slidesPerView:"auto",speed:400,effect:"fade",fadeEffect:{crossFade:!0},navigation:{disabledClass:"slider__btn--disabled",nextEl:'.menu__btn[menu-btn="next"]',prevEl:'.menu__btn[menu-btn="prev"]'}}),t=new Swiper(menuDescCont,{wrapperClass:"menu__desc-wrap",slideClass:"menu__desc-item",slidesPerView:"auto",direction:"horizontal",speed:400,allowTouchMove:!1,effect:"fade",fadeEffect:{crossFade:!0},navigation:{disabledClass:"slider__btn--disabled",nextEl:'.menu__btn[menu-btn="next"]',prevEl:'.menu__btn[menu-btn="prev"]'}});e.on("slideChange",()=>{console.log(e.activeIndex),t.slideTo(e.activeIndex)})}()},function(e,t){let n=Array.from(document.querySelectorAll("*[link]")),o=Array.from(document.querySelectorAll("*[scroll-block]")),r=document.querySelector('[menu-btn="header"]'),i=document.querySelector("[header-menu]");function u(){let e=this.getAttribute("link");o.map(t=>{var n;t.getAttribute("scroll-block")===`${e}`&&(i.setAttribute("header-menu","close"),r.setAttribute("state","close"),n=t,gsap.to($("body,html"),.8,{ease:Power2.easeOut,scrollTop:n.getBoundingClientRect().top+pageYOffset}))})}n.map(e=>e.addEventListener("click",u))},function(e,t){let n=[...document.querySelectorAll("[data-round]")];function o(){let e;this.querySelector(".desc__item").style.opacity=1,this.removeEventListener("click",o),e=setTimeout(()=>{this.querySelector(".desc__item").style.opacity=0,this.addEventListener("click",o)},3e3)}n&&n.forEach(e=>e.addEventListener("click",o))}]);
//# sourceMappingURL=bundle-main.js.map