!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1),n(2),n(3),n(4),n(5),n(6),n(7),n(8),n(9),n(10),n(11),n(12)},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t){AOS.init()},function(e,t){let n=Array.from(document.querySelectorAll('*[header-animation="title"]')),r=document.querySelector('[header-animation="desc"]');n.map(e=>{gsap.from(e,{duration:1,y:90})}),gsap.from(r,{duration:1,y:40})},function(e,t){let n=document.querySelector('[menu-btn="header"]'),r=document.querySelector("[header-menu]");n.addEventListener("click",(function(){let e=this.getAttribute("state");r.setAttribute("header-menu","close"===e||"no"===e?"open":"close"),this.setAttribute("state","close"===e||"no"===e?"open":"close")}))},function(e,t){document.querySelector(".around__cont");let n=document.querySelector(".insta__container"),r=document.querySelector(".menu"),o=r.querySelector(".menu__container");r.querySelector('[menu-indicator="list"]'),r.querySelector('[indicator="point"]');menuDescCont=document.querySelector(".menu__desc-cont"),new Swiper(n,{wrapperClass:"insta__wrap",slideClass:"insta__slide",slidesPerView:"auto",speed:4e3,freeModeMomentumRatio:.8,freeModeMomentumVelocityRatio:.8,loop:!0,freeMode:!0,autoplay:{delay:0,disableOnInteraction:!1}}),new Swiper(o,{wrapperClass:"menu__wrapper",slideClass:"menu__slide",slidesPerView:"auto",direction:"horizontal",speed:0,navigation:{disabledClass:"slider__btn--disabled",nextEl:'.menu__btn[menu-btn="next"]',prevEl:'.menu__btn[menu-btn="prev"]'}}),new Swiper(menuDescCont,{wrapperClass:"menu__desc-wrap",slideClass:"menu__desc-item",slidesPerView:"auto",direction:"horizontal",speed:0,navigation:{disabledClass:"slider__btn--disabled",nextEl:'.menu__btn[menu-btn="next"]',prevEl:'.menu__btn[menu-btn="prev"]'}})},function(e,t){let n=Array.from(document.querySelectorAll("*[link]")),r=Array.from(document.querySelectorAll("*[scroll-block]")),o=document.querySelector('[menu-btn="header"]'),u=document.querySelector("[header-menu]");function i(){let e=this.getAttribute("link");r.map(t=>{var n;t.getAttribute("scroll-block")===`${e}`&&(u.setAttribute("header-menu","close"),o.setAttribute("state","close"),n=t,gsap.to($("body,html"),.8,{ease:Power2.easeOut,scrollTop:n.getBoundingClientRect().top+pageYOffset}))})}n.map(e=>e.addEventListener("click",i))}]);
//# sourceMappingURL=bundle-main.js.map