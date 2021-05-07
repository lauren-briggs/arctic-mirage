$(document).ready(function () {
  //js will only run once HTML doc has loaded to speed up response time

  // ELEMENTS
  const menuEl = $(".menu");
  // const navEl = $("nav");
  const rightCont = $("#rightcont");
  const leftCont = $(".leftcont");
  const workEl = $(".work")
  const aboutEl = $(".about")
  const contactEl = $(".contact")

  // BUTTONS
  const navBtn = $("#navBtn")
  const workNav = $("#workNav");
  const aboutNav = $("#aboutNav");
  const contactNav = $("#contactNav")
  const amLogo = $("#homelogo")

  // BOOLEANS TO DEFINE WHETHER OR NOT SECTIONS ARE OPEN
  var isRightContOpen = false;
  var isLeftContOpen = false;
  var isWorkElOpen = false;
  var isAboutElOpen = false;
  var isContactElOpen = false;
  var isDescrOpen = false;

  // SHOW INITIAL MENU ON HOVER
  function showMenu() {
    menuEl.addClass("showme");
    navBtn.addClass("showme");
  }

  // HIDE MENU/CLOSE ALL
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
      $(".leftcont").children().each(function () {
        $(this).css("display", "none")
      });
    }
    // Checking if other descriptions are open and closing if true
    if (isDescrOpen === true) {
      $(".grid-item-workmenu").children("div").each(function () {
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

  // HANDLE MENU FUNCTION FOR ALL NAV ITEMS - changing text to white etc.
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
  // WORK WORK WORK
  // WHEN WORK IS OPEN ADD UNDERLINE AND SHOW DIV
  function workActive() {
    workNav.addClass("underline");
    workEl.addClass("showme");
  }

  // SHOW WORK FUNCTIONALITY AND CONDITIONS
  function showWork() {
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

      // redefine values as true
      isRightContOpen = true;
      isWorkElOpen = true;

    } else if (isRightContOpen === true && isWorkElOpen === true) {
      closeAll();
      isRightContOpen = false;
      isWorkElOpen = false;
    }
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  // ABOUT ABOUT ABOUT
  // WHEN ABOUT IS OPEN ADD UNDERLINE AND SHOW DIV
  function aboutActive() {
    aboutNav.addClass("underline");
    aboutEl.addClass("showme");
  }

  // SHOW ABOUT FUNCTIONALITY AND CONDITIONS
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
        $(".leftcont").children().each(function () {
          $(this).css("display", "none")
        });
      }
      // Checking if project descriptions are open and closing if true
      if (isDescrOpen === true) {
        $(".grid-item-workmenu").children("div").each(function () {
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
  // CONTACT CONTACT CONTACT
  // WHEN CONTACT IS OPEN ADD UNDERLINE AND SHOW DIV
  function contactActive() {
    contactNav.addClass("underline");
    contactEl.addClass("showme");
  }

  // SHOW CONTACT FUNCTIONALITY AND CONDITIONS
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
        $(".leftcont").children().each(function () {
          $(this).css("display", "none")
        });
      }
      // Checking if project descriptions are open and closing if true
      if (isDescrOpen === true) {
        $(".grid-item-workmenu").children("div").each(function () {
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

  // Changing AM logo to white version when screen is less than 1024px
  function swapLogo() {
    if ($(window).width() < 1024) {
      $("#replace-logo").attr("src", "assets/img/am-collateral/AM20-29_TAM Internal Marketing_Logo_Fin_AM_Rev.png");
    } else {
      return;
    }
  };

  // SHOW PROJECT IMAGES AND DESCRIPTION ON CLICK
  function showProject() {
    // Checking if left side/other project images are open and closing them if true
    if (isLeftContOpen === true) {
      $(".leftcont").children().each(function () {
        $(this).css("display", "none")
      });
    }
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });

    // Getting the id value of the target el
    var i = $(this).attr("id");

    // creating a variable that holds the class name using i value and changing display to flex
    var thisProClass = `.project${i}`;

    // TO DO: translateX - animate in
    $(`${thisProClass}`).css({ "display": "flex", "transform": "translateX(0%)" });


    // Checking if other descriptions are open and closing if true
    if (isDescrOpen === true) {
      $(".grid-item-workmenu").children("div").each(function () {
        $(this).children("p").each(function () {
          $(this).css("display", "none");
        })
      });
      isDescrOpen = false;
    }

    // TO DO: check if description/project is open and close when title is clicked


    // TO DO: if window is less than 1024, make work el half screen height
    // if (window.width() <= 1024) {
    //   workEl.css("height", "50vh");
    // }

    // Showing project description
    var children = $(`.${i}descr`);
    children.css("display", "block");

    isDescrOpen = true;
    isLeftContOpen = true;
  }

  // SLICK CAROUSEL

  $('.slick').slick({
    adaptiveHeight: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1500,
    cssEase: "ease",
    draggable: true,
    easing: "linear",
    nextArrow: '<div class="slick-next">&#8595;</div>',
    prevArrow: '<div class="slick-prev">&#x2191;</div>',
    slideToShow: 1,
    speed: 1500,
    swipe: true,
    swipeToSlide: true,
    touchMove: true,
    vertical: true,
    verticalSwiping: true,
  });

  // CALLING FUNCTIONS
  navBtn.mouseenter(showMenu);
  navBtn.click(closeAll);
  amLogo.click(closeAll);
  workNav.click(showWork);
  aboutNav.click(showAbout);
  contactNav.click(showContact);
  $(".slideshow-container").click(closeAll);
  $(".grid-item-workmenu").click(showProject);




  // TO DO: add functionality of form!!


});

