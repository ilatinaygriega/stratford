$(document).ready(function($) {
  
  $('.metodology-slider').unslider({
    nav: false,
    arrows: {
      prev: '<a class="unslider-arrow prev"><img src="img/arrow-left.svg" alt="" /></a>',
      next: '<a class="unslider-arrow next"><img src="img/arrow-right.svg" alt="" /></a>',
    }
  });

  var slider = $('.metodology-slider').unslider();
  $('.unslider-counter').text('1/' + slider.find('.unslider-carousel > li').length);

  slider.on('unslider.change', function(event, index, slide) {
    $('.unslider-counter').text((index + 1) + '/' + slider.find('.unslider-carousel > li').length);
  });
});