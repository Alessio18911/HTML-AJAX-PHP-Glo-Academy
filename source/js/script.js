"use strict";

function createSidebar(parentElement) {
  const template = document.querySelector('#sidebar').content;
  const sidebar = template.cloneNode(true).querySelector('.sidebar');
  parentElement.append(sidebar);
}

function getActiveSlideParams() {
  const activeSlide = document.querySelector(".swiper-slide-active");
  let areaLabel = activeSlide
    .getAttribute("aria-label")
    .replace(/\s/g, "")
    .split("/");

  return [areaLabel[0], areaLabel[1]];
}

function toggleSidebar(slideParams, parentElement) {
  const activeSlideNumber = slideParams[0];
  const sliderLength = slideParams[1];

  if (activeSlideNumber === sliderLength ) {
    document.querySelector(".sidebar").remove();
    document.querySelector(".form__controls").remove();
  }
}

const mySwiper = new Swiper(".swiper-container", {
  direction: "horizontal",
  loop: false,

  navigation: {
    nextEl: ".form__controls-btn-next",
    prevEl: ".form__controls-btn-prev",
    disabledClass: "form__controls-btn--disabled",
  },
});

const quiz = document.querySelector('.quiz');
createSidebar(quiz);

mySwiper.on("slideChange", function () {
  new Promise(resolve => resolve())
    .then(() => getActiveSlideParams())
    .then(slideInfo => toggleSidebar(slideInfo, quiz));
});
