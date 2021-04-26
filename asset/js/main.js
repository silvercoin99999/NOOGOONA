$(document).ready(function () {
  var swiper = new Swiper(".main-preview .swiper-container", {
    slidesPerView: 5,
    spaceBetween: 20,
    navigation: {
      nextEl: ".main-preview .swiper-button-next",
      prevEl: ".main-preview .swiper-button-prev",
    },
  });
});
