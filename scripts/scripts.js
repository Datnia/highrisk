$(document).ready(function() {
  $('.slider').slick({
    prevArrow:
      '<button class="previous"><i class="fas fa-angle-left"></i></button>',
    nextArrow:
      '<button class="next"><i class="fas fa-angle-right"></i></button>'
  });

  $('.affiliates-slider').slick({
    centerMode: true,
    slidesToShow: 3,
    variableWidth: true,
    prevArrow:
      '<button class="previous"><i class="fas fa-angle-left"></i></button>',
    nextArrow:
      '<button class="next"><i class="fas fa-angle-right"></i></button>'
  });

  $('.open-menu').click(function() {
    $('.nav-links').toggleClass('show');
  });
});
