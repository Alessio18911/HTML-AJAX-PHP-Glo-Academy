'use strict';

var mySwiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: false,

  navigation: {
    nextEl: '.form__controls-btn-next',
    prevEl: '.form__controls-btn-prev',
    disabledClass: 'form__controls-btn--disabled'
  }
});

mySwiper.on('reachEnd', function() {
  const sidebar = document.querySelector('.sidebar');
  if (sidebar) sidebar.remove();

});
