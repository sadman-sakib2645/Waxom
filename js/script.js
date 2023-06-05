$(function () {

  //Banner Slider
  $('.banner-slider-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 10000,
    cssEase: 'linear',
    fade: true,
  })

  //Navbar Scroll Effect
  var navbar = $('#navbar')

  $(window).scroll(() => {
    var scrollPosition = $(this).scrollTop()

    if (scrollPosition > 100) {
      navbar.addClass('navbarActive')
    } else if (scrollPosition <= 0) {
      navbar.removeClass('navbarActive')
    }
  })

  //Project Mix it up
  var mixer = mixitup('.project-container')

  //Project Image
  new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'plane',
  })

  //Counter UP
  $('.counter').counterUp({
    delay: 10,
    time: 2500,
  })

  //Slick Slider
  $('.post-slider').slick({
    slidesToShow: 3,
    infinite: true,
    autoplay: true,
    prevArrow:
      '<div class="arrow-left text-center d-flex align-items-center justify-content-center"><i class="fas fa-angle-left"></i></div>',
    nextArrow:
      '<div class="arrow-right text-center d-flex align-items-center justify-content-center"><i class="fas fa-angle-right"></i></div>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  })

  //Video Player
  new VenoBox({
    selector: '.my-video-links',
  })


  // Scroll Top Button
  $(window).scroll(() => {
    var scrollPosition = $(this).scrollTop()
    if (scrollPosition > 4000) {
      $(".backTopButton").fadeIn()
    }
    else{
      $(".backTopButton").fadeOut()
    }
  })

  $('.backTopButton').click(function(){
      $('html, body').animate({scrollTop : 0});
  });
})
