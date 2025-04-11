$(document).ready(function () {
  $(window).scroll(function () {
    //  sticky navbar on scroll script  //
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    //  scroll-up button show/hide script  //
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  //  slide-up script  //
  $(".scroll-up-btn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "smooth");
  });

  $(".navbar .menu li a").click(function () {
    //  Smooth scroll on Menu Items click  //
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top
    }, "smooth");
  });

  //  Toggle Navbar  //
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  //  Typing Text Animation  //

  // var typed = new Typed(".typing", {
  //   strings: [
  //     "Mechatronics Engineer",
  //     "Software Developer",
  //     "Entrepeneur"
  //   ],
  //   typeSpeed: 100,
  //   backSpeed: 60,
  //   loop: true
  // });

  // var typed = new Typed(".typing-2", {
  //   strings: [
  //     "Mechatronics Engineer",
  //     "Software Developer",
  //     "Entrepeneur"
  //   ],
  //   typeSpeed: 100,
  //   backSpeed: 60,
  //   loop: true
  // });

  //  Owl Carousel  //
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: false
      }
    }
  });
});