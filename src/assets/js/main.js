$(function () {
	/*
			https://www.jqueryscript.net/animation/Smooth-Mouse-Wheel-Scrolling-Plugin-With-jQuery-easeScroll.html
			===========================*/
	$("html").easeScroll({
		frameRate: 60,
		animationTime: 1000,
		stepSize: 90,
		pulseAlgorithm: 1,
		pulseScale: 8,
		pulseNormalize: 1,
		accelerationDelta: 20,
		accelerationMax: 1,
		keyboardSupport: true,
		arrowScroll: 50,
		touchpadSupport: true,
		fixedBackground: true
	});

	let sandwitch = function () {
		$('#js-sandwitch').on('click', function () {
			if ($(window).width() < 1100) {
				$(this).toggleClass('sandwitch--active');
				let mainMenu = $('#js-main-menu');
				mainMenu.toggleClass('active');
				mainMenu.slideToggle();
			}
		});
	};
	sandwitch();
	let mainSlider = function () {
		$('#js-main-slider').slick({
			arrows: true,
			nextArrow: '<i class="fa fa-chevron-right fa-next" aria-hidden="true"></i>',
			prevArrow: '<i class="fa fa-chevron-left fa-prev" aria-hidden="true"></i>',
			responsive: [
				{
					breakpoint: 860,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}]
		});
	};
	mainSlider();
});



