//\\//\\//\\ THE /\RCTIC /\/\IRAGE //\\//\\//\\
$(document).ready(function () {
  // ----------------------------------------------------
  // ELEMENTS
  // ----------------------------------------------------
  const menuEl = $("#menu-container");
  const menuUl = $("#menu-ul");
  const menuTextEl = $("#menu-text");
  const rightCont = $("#rightcont");
  const leftCont = $(".leftcont");
  const projectMenuEl = $("#project-menu")
  const projectMenuItems = $("#project-menu li")
  const projectCont = $("#project-container");
  const aboutEl = $("#about-1")
  const contactEl = $("#contact-1")
  const bgSlideshowContainer = $('.slideshow-container');
  const servicesEl = $("#services-container");
  const clientsEl = $("#clients-container");
  const contactUsEl = $("#contact-contact");
  const visitUsEl = $("#contact-visitus");
  const subscribeEl = $('#subscriber-container');

  // ----------------------------------------------------
  // BUTTONS
  // ----------------------------------------------------
  const navBtn = $("#navBtn")
  const workNav = $("#workNav");
  const aboutNav = $("#aboutNav");
  const contactNav = $("#contactNav")
  const amLogo = $("#homelogo")
  const servicesBtn = $("#services-btn");
  const clientsBtn = $("#clients-btn");
  const contactUsBtn = $("#contact-us-btn");
  const visitUsBtn = $("#visit-btn");
  const backBtn = $('#back-wrapper');
  const subscribeElBtn = $('#subscribe-btn');

  // ----------------------------------------------------
  // BOOLEANS TO DEFINE WHETHER OR NOT SECTIONS ARE OPEN
  // ----------------------------------------------------
  let isRightContOpen = false;
  let isLeftContOpen = false;
  let isProjectMenuElOpen = false;
  let isAboutElOpen = false;
  let isContactElOpen = false;
  let isDescrOpen = false;
  let isMenuOpen = false;
  let isServicesElOpen = false;
  let isClientsElOpen = false;
  let isContactUsElOpen = false;
  let isVisitUsElOpen = false;
  let isSubscribeElOpen = false;


  // ----------------------------------------------------
  // SHOW INITIAL MENU ON HOVER
  // ----------------------------------------------------
  function showMenu() {
    menuEl.addClass("showme");
    menuUl.addClass("showme");
    navBtn.addClass("showme");
    menuTextEl.removeClass("hide");
    isMenuOpen = true;
  }

  // ----------------------------------------------------
  // HIDE MENU/CLOSE ALL
  // ----------------------------------------------------
  function closeAll() {
    rightCont.removeClass("showme");
    menuEl.removeClass("showme");
    navBtn.removeClass("showme");
    projectMenuEl.removeClass("showme");
    aboutEl.removeClass("showme");
    contactEl.removeClass("showme");
    servicesEl.removeClass("showme");
    clientsEl.removeClass("showme");
    contactUsEl.removeClass("showme");
    visitUsEl.removeClass("showme");
    subscribeEl.removeClass("showme");
    menuTextEl.addClass('hide');
    menuUl.removeClass('showme');

    // checking if left container is open and closing if true
    if (isLeftContOpen === true && isDescrOpen === true) {
      leftCont.children().each(function () {
        $(this).css("display", "none")
      });
      isLeftContOpen = false;
      projectCont.children().each(function () {
        $(this).css("display", "none")
      });
      $("#back").removeClass('reposition');
      projectCont.removeClass('reposition');
      projectCont.removeClass('showme');
    }

    // redefining booleans
    isRightContOpen = false;
    isLeftContOpen = false;
    isDescrOpen = false;
    isMenuOpen = false;
    isProjectMenuElOpen = false;
    isAboutElOpen = false;
    isContactElOpen = false;
    isServicesElOpen = false;
    isClientsElOpen = false;
    isContactUsElOpen = false;
    isVisitUsElOpen = false;
    isSubscribeElOpen = false;

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
    projectMenuEl.removeClass("showme");
    aboutEl.removeClass("showme");
    contactEl.removeClass("showme");
    rightCont.addClass("showme");
    menuEl.addClass("showme");
    workNav.removeClass("underline");
    aboutNav.removeClass("underline");
    contactNav.removeClass("underline");

    isRightContOpen = false;
    isProjectMenuElOpen = false;
    isAboutElOpen = false;
    isContactElOpen = false;
  }
  // ----------------------------------------------------
  // WORK WORK WORK~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // ----------------------------------------------------
  // WHEN WORK IS OPEN ADD UNDERLINE AND SHOW DIV
  // ----------------------------------------------------
  function workActive() {
    workNav.addClass("underline");
    projectMenuEl.addClass("showme");
  }

  // ----------------------------------------------------
  // SHOW WORK FUNCTIONALITY AND CONDITIONS
  // ----------------------------------------------------
  function showWork() {
    // Closing all other els
    aboutEl.removeClass("showme");
    aboutNav.removeClass("underline");
    contactEl.removeClass("showme");
    contactNav.removeClass("underline");
    servicesEl.removeClass("showme");
    clientsEl.removeClass("showme");
    contactUsEl.removeClass("showme");
    visitUsEl.removeClass("showme");
    subscribeEl.removeClass("showme");
    menuTextEl.addClass('hide');

    isAboutElOpen = false;
    isContactElOpen = false;
    isServicesElOpen = false;
    isClientsElOpen = false;
    isContactUsElOpen = false;
    isVisitUsElOpen = false;
    isSubscribeElOpen = false;

    // handle basic menu function and show Work
    handleMenu();
    workActive();

    // redefine values as true
    isRightContOpen = true;
    isProjectMenuElOpen = true;
  }

  // ----------------------------------------------------
  // ABOUT ABOUT ABOUT~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // ----------------------------------------------------
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
    // Closing all other els
    projectMenuEl.removeClass("showme");
    workNav.removeClass("underline");
    isProjectMenuElOpen = false;
    contactEl.removeClass("showme");
    contactNav.removeClass("underline");
    isContactElOpen = false;
    servicesEl.removeClass("showme");
    isServicesElOpen = false;
    clientsEl.removeClass("showme");
    isClientsElOpen = false;
    contactUsEl.removeClass("showme");
    isContactUsElOpen = false;
    visitUsEl.removeClass("showme");
    isVisitUsElOpen = false;
    subscribeEl.removeClass("showme");
    isSubscribeElOpen = false;

    // Checking if project photos are open and closing if true
    if (isLeftContOpen === true) {
      leftCont.children().each(function () {
        $(this).css("display", "none")
      });
    }
    isLeftContOpen = false;
    // handle basic menu function and show Work
    handleMenu();
    aboutActive();

    // redefine values as true
    isRightContOpen = true;
    isAboutElOpen = true;
    // }
    menuTextEl.addClass('hide');
  }

  // ----------------------------------------------------
  // CONTACT CONTACT CONTACT~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // ----------------------------------------------------
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
    // Closing all other els
    projectMenuEl.removeClass("showme");
    workNav.removeClass("underline");
    isProjectMenuElOpen = false;
    aboutEl.removeClass("showme");
    aboutNav.removeClass("underline");
    isAboutElOpen = false;
    servicesEl.removeClass("showme");
    isServicesElOpen = false;
    clientsEl.removeClass("showme");
    isClientsElOpen = false;
    contactUsEl.removeClass("showme");
    isContactUsElOpen = false;
    visitUsEl.removeClass("showme");
    isVisitUsElOpen = false;
    subscribeEl.removeClass("showme");
    isSubscribeElOpen = false;

    // Checking if project photos are open and closing if true
    if (isLeftContOpen === true) {
      leftCont.children().each(function () {
        $(this).css("display", "none")
      });
    }
    isLeftContOpen = false;

    // handle basic menu function and show Work
    handleMenu();
    contactActive();

    // redefine values as true
    isRightContOpen = true;
    isContactElOpen = true;

    // }
    menuTextEl.addClass('hide');
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

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

    menuUl.removeClass('showme');
    projectCont.addClass('showme');

    // Getting the id value of the target el
    let i = $(this).attr("class");
    let projectName = i.split('-', 1);
    console.log(projectName);
    // creating a variable that holds the class name using i value and changing display to flex
    let thisProClass = `.project${projectName}`;
    $(`${thisProClass}`).css({ "display": "flex", "transform": "translateX(0%)" });

    if ($(window).width() < 1024) {
      // backBtn1024.addClass('showme');
      // backBtn.addClass('hide');
      $("#back").addClass('reposition');
      projectCont.addClass('reposition');
    }

    // Opening description
    projectMenuEl.removeClass('showme');
    isProjectMenuElOpen = false;

    let descrToOpen = `${projectName}-container`;
    $(`#${descrToOpen}`).css('display', 'block');
    isDescrOpen = true;

    isLeftContOpen = true;
  }

  // ----------------------------------------------------
  // REPOSITION WORK
  // ----------------------------------------------------

  $(window).resize(function () {

    $("#back").removeClass('reposition');
    projectCont.removeClass('reposition');
    if (isLeftContOpen === false) {
      projectCont.removeClass('reposition');
    } else if (isLeftContOpen === true && $(window).width() < 1024) {
      $("#back").addClass('reposition');
      projectCont.addClass('reposition');
    } else if (isLeftContOpen === true && $(window).width() > 1024) {
      $("#back").removeClass('reposition');
      projectCont.removeClass('reposition');
    }
  })

  // ----------------------------------------------------
  // SWIPER CAROUSEL FOR PROJECT IMAGES
  // ----------------------------------------------------
  function initSwiper() {
    $(".swiper-container").each(function (index) {
      $(this).addClass("instance-" + index);
      let swiper = new Swiper(".instance-" + index, {
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        direction: 'vertical',
        effect: "fade",
        enabled: true,
        initialSlide: 0,
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
    });
  }

  // ----------------------------------------------------
  // SWIPER CAROUSEL FOR BACKGROUND SLIDESHOW
  // ----------------------------------------------------
  const swiperbg = new Swiper(".swiper-container-bg", {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    effect: "fade",
    enabled: true,
    loop: true,
    initialSlide: 0,
    on: {
      init: function () {
        console.log('background slideshow swiper initialized');
      },
    },
    speed: 2000,
  });

  swiperbg.slideNext(1500, true)
  swiperbg.slidePrev(1500, true)

  // ----------------------------------------------------
  // SLIDE DOWN LIST OF SERVICES
  // ----------------------------------------------------
  $('.slide-down-hover').click(function () {
    let ul = $(this).siblings()[0].id;
    $(`#${ul}`).slideDown(1000);
  });
  $('.slide-down-hover').mouseleave(function () {
    let ul = $(this).siblings()[0].id;
    $(`#${ul}`).delay(400).slideUp(1000);
  });

  // ----------------------------------------------------
  // ABOUT AND CONTACT SUB MENU LINKS
  // ----------------------------------------------------

  servicesBtn.click(function () {
    aboutEl.removeClass("showme");
    isAboutElOpen = false;
    servicesEl.addClass("showme");
    isServicesElOpen = true;
  })

  clientsBtn.click(function () {
    aboutEl.removeClass("showme");
    isAboutElOpen = false;
    clientsEl.addClass("showme");
    isClientsElOpen = true;
  })

  contactUsBtn.click(function () {
    contactEl.removeClass("showme");
    isContactElOpen = false;
    contactUsEl.addClass("showme");
    isContactUsElOpen = true;
  })

  visitUsBtn.click(function () {
    contactEl.removeClass("showme");
    isContactElOpen = false;
    visitUsEl.addClass("showme");
    isVisitUsElOpen = true;
    if ($(window).width() < 600) {
      $("#mappp-wrapper").css("display: none");
      $("#mappp-wrapper-mobile").css("display: block");
      rightCont.css("height: 100vh");
    }
  })

  subscribeElBtn.click(function () {
    contactEl.removeClass("showme");
    isContactElOpen = false;
    subscribeEl.addClass("showme");
    isSubscribeElOpen = true;
  })


  function handleBackBtn() {
    if (isProjectMenuElOpen === true) {
      projectMenuEl.removeClass("showme");
      isProjectMenuElOpen = false;
      rightCont.removeClass('showme');
      isRightContOpen = false;
      menuTextEl.removeClass('hide');
      workNav.removeClass('underline');
      aboutNav.removeClass('underline');
      contactNav.removeClass('underline');
    }
    if (isAboutElOpen === true) {
      aboutEl.removeClass("showme");
      isAboutElOpen = false;
      rightCont.removeClass('showme');
      isRightContOpen = false;
      menuTextEl.removeClass('hide');
      workNav.removeClass('underline');
      aboutNav.removeClass('underline');
      contactNav.removeClass('underline');
    }
    if (isContactElOpen === true) {
      contactEl.removeClass("showme");
      isContactElOpen = false;
      rightCont.removeClass('showme');
      isRightContOpen = false;
      menuTextEl.removeClass('hide');
      workNav.removeClass('underline');
      aboutNav.removeClass('underline');
      contactNav.removeClass('underline');
    }
    if (isServicesElOpen === true) {
      servicesEl.removeClass("showme");
      isServicesElOpen = false;
      aboutEl.addClass("showme");
      isAboutElOpen = true;
    }
    if (isClientsElOpen === true) {
      clientsEl.removeClass("showme");
      isClientsElOpen = false;
      aboutEl.addClass("showme");
      isAboutElOpen = true;
    }
    if (isContactUsElOpen === true) {
      contactUsEl.removeClass("showme");
      isContactUsElOpen = false;
      contactEl.addClass("showme");
      isContactElOpen = true;
    }
    if (isVisitUsElOpen === true) {
      visitUsEl.removeClass("showme");
      isVisitUsElOpen = false;
      contactEl.addClass("showme");
      isContactElOpen = true;
    }
    if (isSubscribeElOpen === true) {
      subscribeEl.removeClass("showme");
      isSubscribeElOpen = false;
      contactEl.addClass("showme");
      isContactElOpen = true;
    }

    if (isLeftContOpen === true && isDescrOpen === true) {
      leftCont.children().each(function () {
        $(this).css("display", "none")
      });
      isLeftContOpen = false;
      menuUl.addClass('showme');
      projectCont.children().each(function () {
        $(this).css("display", "none")
      });
      projectMenuEl.addClass('showme');
      isProjectMenuElOpen = true;
      $("#back").removeClass('reposition');
      projectCont.removeClass('reposition');
      projectCont.removeClass('showme');
    }
  }

  navBtn.click(function () {
    if (!isMenuOpen) {
      showMenu();
    } else {
      closeAll();
    }
  })

  // Close on esc key
  window.onkeyup = function (event) {
    if (event.keyCode == 27) {
      closeAll();
    }
  }

  // ----------------------------------------------------
  // CALLING FUNCTIONS
  // ----------------------------------------------------
  amLogo.click(closeAll);
  workNav.click(showWork);
  aboutNav.click(showAbout);
  contactNav.click(showContact);
  projectMenuItems.click(showProject);
  projectMenuItems.click(initSwiper);
  bgSlideshowContainer.click(closeAll);
  backBtn.click(handleBackBtn);
});