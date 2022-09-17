$(function () {
  $(document).ready(function(){

    // header fixed 
    var lastScrollTop = 0;
    $(window).scroll(function(){
        let sticky = $('.fixed-navbar'),
            stickyHeight = $('.fixed-navbar').height() + 50,
            scroll = $(window).scrollTop();
            
      if (scroll > stickyHeight) {
        sticky.addClass('fixed')
      } else {
        sticky.removeClass('fixed')
        $('.js-menu a').each(function () {
          $(this).removeClass('active');
        });
      }

      if (scroll > lastScrollTop){
        sticky.addClass('transition');
      } else {
        sticky.removeClass('transition');
      }
      lastScrollTop = scroll;
 
    });

    $('.js-scroll-to').on('click', function (e) {
      e.preventDefault();
      $(document).off("scroll");
      let windowWidth = $(window).width();
      
      $('.js-menu a').each(function () {
          $(this).removeClass('active');
      });
      $(this).addClass('active');
    
      var target = this.hash,
          menu = target;
      $target = $(target);
      var scrollStop = (windowWidth > 480) ? ($target.offset().top - 50) : $target.offset().top - 30;

      $('html, body').stop().animate({
          'scrollTop': scrollStop
      }, 500, 'swing', function () {
          $(document).on("scroll", onScroll);
      });

      if(windowWidth < 992) {
        $('.js-menu').slideUp();
        $('.js-menu-btn').removeClass('opened');
      }
  });

    // Mobile haeder menu 
    $('.js-menu-btn').on('click', function (){
      if ($(this).hasClass('opened')) {
        $(this).removeClass('opened');
        $('.js-menu').slideUp();
      } else {
        $(this).addClass('opened');
        $('.js-menu').slideDown();
      }
    });

    // Banner sliders 

    $('.js-banner-mobile-slider').slick({
      dots: true,
      infinite: true,
      arrows: false,
      centerMode: true,
      centerPadding: '25px',
    });  

    $('.js-banner-general-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
    });
    $('.js-banner-nav > div').click(function() {
      $('.js-banner-general-slider').slick('slickGoTo',$(this).index());
    })
    
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
      let progressVal = $(this).find('.js-progress-val').text();
      $(this).find('.js-progress').width(progressVal);
    });

    // Reviews slider on mobile
    var windowWidth = $(window).width();
    $(window).on('resize', function(){
      windowWidth = $(window).width();
      intialSlick(windowWidth, $('.js-mobile-slider'));     
    });

    intialSlick(windowWidth, $('.js-mobile-slider'));

    function intialSlick(width, slider) {
      if (width < 768) {
        slider.slick({
          dots: true,
          infinite: true,
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
        });
      } else {
        slider.filter('.slick-initialized').slick('unslick');
      }
    }

    $(document).on("scroll", onScroll);

    // like 
    $('.js-like').on('click', function() {
      var likeCount = 0,
          likeCountWrap = $(this).parent().find('.js-count');
      if($(this).hasClass('full')) {
        $(this).removeClass('full');
        likeCount = (likeCountWrap.html()*1);
        likeCount --;
      } else {
        $(this).addClass('full');
        likeCount = (likeCountWrap.html()*1);
        likeCount ++;
      }
      likeCountWrap.html(likeCount);

    })

  });

  function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.js-menu a').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr('href'));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
        $('.js-menu a').removeClass('active');
        currLink.addClass('active');
      }
    });
}
});