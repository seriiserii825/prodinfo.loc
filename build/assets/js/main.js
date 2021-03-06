"use strict";

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

  var sandwitch = function sandwitch() {
    $('#js-sandwitch').on('click', function () {
      if ($(window).width() < 1100) {
        $(this).toggleClass('sandwitch--active');
        var mainMenu = $('#js-main-menu');
        mainMenu.toggleClass('active');
      }
    });
  };

  sandwitch();

  var mainSlider = function mainSlider() {
    var slider = $('#js-main-slider');
    slider.slick({
      arrows: false
    });
    $('.main-slider-arrows .slider-arrow--left').click(function () {
      slider.slick('slickNext');
    });
    $('.main-slider-arrows .slider-arrow--right').click(function () {
      slider.slick('slickPrev');
    });
  };

  mainSlider();

  var ideaSlider = function ideaSlider() {
    $('#js-idea-slider').slick({
      arrows: false,
      autoplay: true
    });
  };

  ideaSlider();

  var partnersSlider = function partnersSlider() {
    var slider = $('#js-partners-slider');
    slider.slick({
      dots: true,
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [{
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    });
    $('.partners-slider-wrap .slider-arrow--left').click(function () {
      slider.slick('slickNext');
    });
    $('.partners-slider-wrap .slider-arrow--right').click(function () {
      slider.slick('slickPrev');
    });
  };

  partnersSlider();

  var scrollToAbout = function scrollToAbout() {
    var about = $('.offers');

    if (about.length > 0) {
      var aboutOffsetTop = about.offset().top;
      $('#js-main-menu li a').on('click', function (e) {
        var href = $(this).attr('href');

        if (href === 'index.html#js-offers') {
          e.preventDefault();
          $('html, body').animate({
            scrollTop: aboutOffsetTop
          }, 1000);
        }
      });
    }
  };

  scrollToAbout();

  var showLikes = function showLikes() {
    var newsLike = $('.news__like svg');
    newsLike.on('click', function () {
      if ($(this).hasClass('active')) {
        return false;
      }

      $(this).addClass('active');
      $('.news__like-number').html('1');
    });
  };

  showLikes();
});