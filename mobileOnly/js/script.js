$(function () {
  $(document).ready(function(){

    // sxroll to
    $('.js-scroll-to').on('click', function (e) {
      e.preventDefault();

      var target = $(this).attr('href',)
          scrollStop = $(target).offset().top;

      $('html, body').stop().animate({
        'scrollTop': scrollStop
      }, 500);
      
  });


    // Product sliders 

    $('.js-product-slider').slick({
      dots: true,
      infinite: true,
      arrows: false,
    });
    
    // Accordion
    $('.js-accordion').on('click', '.js-accordion-btn', function(){
      let parent = $(this).parent();

      if (parent.hasClass('opened')) {
        parent.removeClass('opened').find('.js-accordion-content').slideUp();
      } else {
        parent.addClass('opened').find('.js-accordion-content').slideDown();
      }
    });

    // Progress bar
    $('.js-progress-parent').each(function(){
      let progressVal = $(this).find('.js-progress').attr('data-width');
      $(this).find('.js-progress').width(progressVal);
    });

    // Reviews slider on mobile    
    $('.js-mobile-slider').slick({
      dots: true,
      infinite: true,
      arrows: false,
      centerMode: true,
      centerPadding: '40px',
    });

  });
});