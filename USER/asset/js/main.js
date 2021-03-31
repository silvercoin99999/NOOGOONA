$(document).ready(function(){
	var swiper = new Swiper('.swiper-container', {
		slidesPerView: 4,
		spaceBetween: 10,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
});