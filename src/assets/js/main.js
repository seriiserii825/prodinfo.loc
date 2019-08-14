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
			}
		});
	};
	sandwitch();

	let mainSlider = function () {
		let slider = $('#js-main-slider');
		slider.slick({
			arrows: false,
		});

		$('.main-slider-arrows .slider-arrow--left').click(function(){
			slider.slick('slickNext');
		});

		$('.main-slider-arrows .slider-arrow--right').click(function(){
			slider.slick('slickPrev');
		});
	};
	mainSlider();


	let ideaSlider = function () {
		$('#js-idea-slider').slick({
			arrows: false,
			autoplay: true
		});
	};
	ideaSlider();

	let partnersSlider = function () {
		let slider = $('#js-partners-slider');
		slider.slick({
			dots: true,
			arrows: false,
			slidesToShow: 3,
			slidesToScroll: 3,
			responsive: [
				{
					breakpoint: 1100,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}

			]

		});
		$('.partners-slider-wrap .slider-arrow--left').click(function(){
			slider.slick('slickNext');
		});

		$('.partners-slider-wrap .slider-arrow--right').click(function(){
			slider.slick('slickPrev');
		});
	};
	partnersSlider();

	let scrollToAbout = function () {
		let about = $('.offers');

		if(about.length > 0){
			let aboutOffsetTop = about.offset().top;
			$('#js-main-menu li a').on('click', function (e) {
				let href = $(this).attr('href');
				if(href === 'index.html#js-offers'){
					e.preventDefault();
						$('html, body').animate({
							scrollTop: aboutOffsetTop
						}, 1000);
				}
			});
		}

	};
	scrollToAbout();

	let showLikes = function(){
		let newsLike = $('.news__like svg');

		newsLike.on('click', function () {
			if($(this).hasClass('active')){
				return false;
			}
			$(this).addClass('active');
			$('.news__like-number').html('1');
		});
	};
	showLikes();
});



