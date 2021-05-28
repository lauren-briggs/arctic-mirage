// THE /\RCTIC /\/\IRAGE
$(document).ready(function () {
  //js will only run once HTML doc has loaded to speed up response time

  // ----------------------------------------------------
  // IMPORT SWIPER NPM
  // ----------------------------------------------------
  // core version + navigation, pagination modules:
  // import SwiperCore, { Navigation, Pagination } from 'swiper/core';

  // ----------------------------------------------------
  // ELEMENTS
  // ----------------------------------------------------
  const menuEl = $(".menu");
  const rightCont = $("#rightcont");
  const leftCont = $(".leftcont");
  const workEl = $(".work")
  const aboutEl = $(".about")
  const contactEl = $(".contact")
  const workGridCont = $(".grid-container-workmenu");
  const workGridItem = $(".grid-item-workmenu");

  // ----------------------------------------------------
  // BUTTONS
  // ----------------------------------------------------
  const navBtn = $("#navBtn")
  const workNav = $("#workNav");
  const aboutNav = $("#aboutNav");
  const contactNav = $("#contactNav")
  const amLogo = $("#homelogo")

  // ----------------------------------------------------
  // BOOLEANS TO DEFINE WHETHER OR NOT SECTIONS ARE OPEN
  // ----------------------------------------------------
  let isRightContOpen = false;
  let isLeftContOpen = false;
  let isWorkElOpen = false;
  let isAboutElOpen = false;
  let isContactElOpen = false;
  let isDescrOpen = false;

  // ----------------------------------------------------
  // SHOW INITIAL MENU ON HOVER
  // ----------------------------------------------------
  function showMenu() {
    menuEl.addClass("showme");
    navBtn.addClass("showme");
  }

  // ----------------------------------------------------
  // HIDE MENU/CLOSE ALL
  // ----------------------------------------------------
  function closeAll() {
    // checking if right container is open and closing if true
    if (isRightContOpen === true) {
      rightCont.removeClass("showme");
    }
    // closing menu, navBtn, work, about and contact and removing white text class
    menuEl.removeClass("showme white");
    navBtn.removeClass("showme white");
    workEl.removeClass("showme");
    aboutEl.removeClass("showme");
    contactEl.removeClass("showme");

    // checking if left container is open and closing if true
    if (isLeftContOpen === true) {
      leftCont.children().each(function () {
        $(this).css("display", "none")
      });
    }
    // Checking if other descriptions are open and closing if true
    if (isDescrOpen === true) {
      workGridItem.children("div").each(function () {
        $(this).children("p").each(function () {
          $(this).css("display", "none");
        })
      });
      isDescrOpen = false;
    }

    // Change AM logo back to black version
    $("#replace-logo").attr("src", "assets/img/am-collateral/AM20-29_TAM Internal Marketing_Logo_Fin_AM.png");


    // redefining booleans
    isRightContOpen = false;
    isLeftContOpen = false;
    isDescrOpen = false;

    // removing underlines
    workNav.removeClass("underline");
    aboutNav.removeClass("underline");
    contactNav.removeClass("underline");
  }

  // ----------------------------------------------------
  // HANDLE MENU FUNCTION FOR ALL NAV ITEMS - changing text to white etc.
  // ----------------------------------------------------
  function handleMenu() {
    menuEl.removeClass("showme");
    rightCont.addClass("showme");
    menuEl.addClass("showme white");
    navBtn.addClass("white");

    swapLogo();

    isRightContOpen = false;
    isWorkElOpen = false;
    isAboutElOpen = false;
    isContactElOpen = false;
  }
  // ----------------------------------------------------
  // WORK WORK WORK
  // WHEN WORK IS OPEN ADD UNDERLINE AND SHOW DIV
  // ----------------------------------------------------
  function workActive() {
    workNav.addClass("underline");
    workEl.addClass("showme");
  }

  // ----------------------------------------------------
  // SHOW WORK FUNCTIONALITY AND CONDITIONS
  // ----------------------------------------------------
  function showWork() {
    // window.scroll({
    //   top: 0,
    //   left: 0,
    //   behavior: 'smooth'
    // });
    if (isRightContOpen === false) {
      handleMenu();
      workActive();

      isRightContOpen = true;
      isWorkElOpen = true;
    } else if (isAboutElOpen === true || isContactElOpen === true) {
      // closing About and Contact sections and removing their underline
      aboutEl.removeClass("showme");
      aboutNav.removeClass("underline");
      isAboutElOpen = false;
      contactEl.removeClass("showme");
      contactNav.removeClass("underline");
      isContactElOpen = false;

      // handle basic menu function and show Work
      handleMenu();
      workActive();
      resizeWork();

      // redefine values as true
      isRightContOpen = true;
      isWorkElOpen = true;

    } else if (isRightContOpen === true && isWorkElOpen === true) {
      closeAll();
      isRightContOpen = false;
      isWorkElOpen = false;
    }
  }

  // ----------------------------------------------------
  // ABOUT ABOUT ABOUT
  // WHEN ABOUT IS OPEN ADD UNDERLINE AND SHOW DIV
  // ----------------------------------------------------
  function aboutActive() {
    aboutNav.addClass("underline");
    aboutEl.addClass("showme");
  }

  // ----------------------------------------------------
  // SHOW ABOUT FUNCTIONALITY AND CONDITIONS
  // ----------------------------------------------------
  function showAbout() {
    if (isRightContOpen === false) {
      handleMenu();
      aboutActive();

      isRightContOpen = true;
      isAboutElOpen = true;
    } else if (isWorkElOpen === true || isContactElOpen === true) {
      // closing About and Contact sections and removing their underline
      workEl.removeClass("showme");
      workNav.removeClass("underline");
      isWorkElOpen = false;
      contactEl.removeClass("showme");
      contactNav.removeClass("underline");
      isContactElOpen = false;

      // Checking if project photos are open and closing if true
      if (isLeftContOpen === true) {
        leftCont.children().each(function () {
          $(this).css("display", "none")
        });
      }
      // Checking if project descriptions are open and closing if true
      if (isDescrOpen === true) {
        workGridItem.children("div").each(function () {
          $(this).children("p").each(function () {
            $(this).css("display", "none");
          })
        });
      }
      isDescrOpen = false;
      isLeftContOpen = false;

      // handle basic menu function and show Work
      handleMenu();
      aboutActive();

      // redefine values as true
      isRightContOpen = true;
      isAboutElOpen = true;

    } else if (isRightContOpen === true && isAboutElOpen === true) {
      closeAll();
      isRightContOpen = false;
      isAboutElOpen = false;
    }
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  // ----------------------------------------------------
  // CONTACT CONTACT CONTACT
  // WHEN CONTACT IS OPEN ADD UNDERLINE AND SHOW DIV
  // ----------------------------------------------------
  function contactActive() {
    contactNav.addClass("underline");
    contactEl.addClass("showme");
  }

  // ----------------------------------------------------
  // SHOW CONTACT FUNCTIONALITY AND CONDITIONS
  // ----------------------------------------------------
  function showContact() {
    if (isRightContOpen === false) {
      handleMenu();
      contactActive();

      isRightContOpen = true;
      isContactElOpen = true;
    } else if (isWorkElOpen === true || isAboutElOpen === true) {
      // closing About and Contact sections and removing their underline
      workEl.removeClass("showme");
      workNav.removeClass("underline");
      isWorkElOpen = false;
      aboutEl.removeClass("showme");
      aboutNav.removeClass("underline");
      isAboutElOpen = false;

      // Checking if project photos are open and closing if true
      if (isLeftContOpen === true) {
        leftCont.children().each(function () {
          $(this).css("display", "none")
        });
      }
      // Checking if project descriptions are open and closing if true
      if (isDescrOpen === true) {
        workGridItem.children("div").each(function () {
          $(this).children("p").each(function () {
            $(this).css("display", "none");
          })
        });
      }
      isDescrOpen = false;
      isLeftContOpen = false;

      // handle basic menu function and show Work
      handleMenu();
      contactActive();

      // redefine values as true
      isRightContOpen = true;
      isContactElOpen = true;

    } else if (isRightContOpen === true && isContactElOpen === true) {
      closeAll();
      isRightContOpen = false;
      isContactElOpen = false;
    }
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  // ----------------------------------------------------
  // Changing AM logo to white version when screen is less than 1024px
  // ----------------------------------------------------
  function swapLogo() {
    if ($(window).width() <= 1024 && isRightContOpen === true) {
      $("#replace-logo").attr("src", "assets/img/am-collateral/AM20-29_TAM Internal Marketing_Logo_Fin_AM_Rev.png");
    } else if ($(window).width() > 1024 || isRightContOpen === false) {
      $("#replace-logo").attr("src", "assets/img/am-collateral/AM20-29_TAM Internal Marketing_Logo_Fin_AM.png");
    }
  };

  $(window).resize(swapLogo);
  // ----------------------------------------------------
  // SHOW PROJECT IMAGES AND DESCRIPTION ON CLICK
  // ----------------------------------------------------
  function showProject() {
    // Checking if left side/other project images are open and closing them if true
    if (isLeftContOpen === true) {
      leftCont.children().each(function () {
        $(this).css("display", "none")
      });
    }

    // Getting the id value of the target el
    let i = $(this).attr("id");

    // creating a variable that holds the class name using i value and changing display to flex
    let thisProClass = `.project${i}`;

    $(`${thisProClass}`).css({ "display": "flex", "transform": "translateX(0%)" });

    // Checking if other descriptions are open and closing if true
    if (isDescrOpen === true) {
      workGridItem.children("div").each(function () {
        $(this).children("p").each(function () {
          $(this).css("display", "none");
        })
      });
      isDescrOpen = false;
    }

    // Showing project description and adding drop down in animation
    let children = $(`.${i}descr`);
    children.css({
      "display": "block",
      "transition": "all 0.5s ease-in",
      "animation-name": "drop-down",
      "animation-duration": "750ms",
      "animation-iteration-count": "1",
      "transform-origin": "top center",
      "animation-fill-mode": "forwards"
    });

    // TO DO: check if description/project is open and close when title is clicked
    // TO DO: scroll to description


    isDescrOpen = true;
    isLeftContOpen = true;

    resizeWork();
  }

  // ----------------------------------------------------
  // RESIZE WORK
  // ----------------------------------------------------
  function resizeWork() {
    // if window is smaller than 1024px
    if ($(window).width() < 1024) {
      // if window is less than 600px and the left container isn't open
      if ($(window).width() < 600 && isLeftContOpen === false) {
        // add padding to workmenu so it sits below AM logo
        workGridCont.css("padding-top", "8em");
      } else {
        workGridCont.css("padding-top", "3em");
      }
      // find all elements in the left container with class 'resize' and change the min-height to 50vh
      leftCont.find(".resize").css("min-height", "50vh");
      // find arrows and move position
      leftCont.find(".slick-prev").css("bottom", "53%");
      leftCont.find(".slick-next").css("bottom", "53%");
      // if the left container is not open
      if (isLeftContOpen === false) {
        // changr the height of the right container/work descriptions/menu to 100vh and reset the margin to 0
        $(".work.showme").css({ "height": "100vh", "margin-top": "0vh" });
        // if the left container and right container are both open
      } else if (isLeftContOpen === true && isRightContOpen === true) {
        // reduce the height of the right cont work menu to 50vh and add a top margin 
        $(".work.showme").css({ "height": "50vh", "margin-top": "50vh" });
        // add top padding to work menu
        workGridCont.css("padding-top", "3em");
      }
    } else {
      // reset height to 100vh and remove margins
      leftCont.find(".resize").css("min-height", "100vh");
      $(".work.showme").css({ "height": "100vh", "margin-top": "0vh" });
      // return arrow to original positions
      leftCont.find(".slick-prev").css("bottom", "40px");
      leftCont.find(".slick-next").css("bottom", "40px");
    }
  }


  // 


  $(window).resize(resizeWork);
  $(window).on('load', resizeWork);


  // ----------------------------------------------------
  // SLICK CAROUSEL
  // ----------------------------------------------------
  $('.slick').slick({
    adaptiveHeight: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1500,
    cssEase: "ease",
    draggable: true,
    easing: "linear",
    nextArrow: '<img class="slick-next" src="assets/img/am-collateral/AM-Arrow-02-Next.png" width="15px">',
    prevArrow: '<img class="slick-prev" src="assets/img/am-collateral/AM-Arrow-02-Prev.png" width="15px">',
    pauseOnHover: false,
    slideToShow: 1,
    speed: 1500,
    // swipe: true,
    swipeToSlide: true,
    touchMove: true,
    vertical: true,
    verticalSwiping: true,
  });


  // ----------------------------------------------------
  // SWIPER CAROUSEL
  // ----------------------------------------------------

  const swiper = new Swiper('.swiper-container', {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    direction: 'vertical',
    effect: "fade",
    enabled: true,
    loop: true,
    mousewheel: {
      invert: false,
      sensitivity: 3,
    },
    on: {
      init: function () {
        console.log('swiper initialized');
      },
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: 'true',
      dynamicBullets: true,
    },
    speed: 2000,
  });

  swiper.slideNext(1500, true)
  swiper.slidePrev(1500, true)

  // ----------------------------------------------------
  // CALLING FUNCTIONS
  // ----------------------------------------------------
  navBtn.mouseenter(showMenu);
  navBtn.click(closeAll);
  amLogo.click(closeAll);
  workNav.click(showWork);
  aboutNav.click(showAbout);
  contactNav.click(showContact);
  workGridItem.click(showProject);
  $(".slideshow-container").click(closeAll);
});

