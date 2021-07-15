// THE /\RCTIC /\/\IRAGE
$(document).ready(function () {
  // ----------------------------------------------------
  // ELEMENTS
  // ----------------------------------------------------
  const menuEl = $("nav");
  const menuTextEl = $("#menu-text");
  const rightCont = $("#rightcont");
  const leftCont = $(".leftcont");
  const projectMenuEl = $("#project-menu")
  const aboutEl = $("#about-1")
  const contactEl = $("#contact-1")
  // const workGridCont = $(".grid-container-workmenu");
  // const workGridItem = $(".grid-item-workmenu");
  const subscriberPopUp = $('#subscriber-container');
  const bgSlideshowContainer = $('.slideshow-container');
  const backBtn = $('.back-inline');
  // const aboutLiBtns = $('.about-li-inline');
  // const contactLiBtns = $('.contact-li-inline');
  const servicesEl = $("#services-container");
  const clientsEl = $("#clients-container");
  const contactUsEl = $("#contact-contact");
  const visitUsEl = $("#contact-visitus");
  // const visitUsWrapper = $("#contact-visit-wrapper");

  // ----------------------------------------------------
  // BUTTONS
  // ----------------------------------------------------
  const navBtn = $("#navBtn")
  const workNav = $("#workNav");
  const aboutNav = $("#aboutNav");
  const contactNav = $("#contactNav")
  const amLogo = $("#homelogo")
  const subscriberCloseBtn = $('#subscriber-close-btn');
  const servicesBtn = $("#services-btn");
  const clientsBtn = $("#clients-btn");
  const contactUsBtn = $("#contact-us-btn");
  const visitUsBtn = $("#visit-btn");

  // ----------------------------------------------------
  // BOOLEANS TO DEFINE WHETHER OR NOT SECTIONS ARE OPEN
  // ----------------------------------------------------
  let isRightContOpen = false;
  let isLeftContOpen = false;
  // let isMenuTextOpen = false;
  let isProjectMenuElOpen = false;
  let isAboutElOpen = false;
  let isContactElOpen = false;
  // let isDescrOpen = false;
  let isMenuOpen = false;
  let isServicesElOpen = false;
  let isClientsElOpen = false;
  let isContactUsElOpen = false;
  let isVisitUsElOpen = false;


  // ----------------------------------------------------
  // CLOSE SUBSCRIBER POPUP
  // ----------------------------------------------------
  // Close on click of x button
  subscriberCloseBtn.on('click', function () {
    subscriberPopUp.css("display", "none");
  })
  // Close on esc key
  window.onkeyup = function (event) {
    if (event.keyCode == 27) {
      subscriberPopUp.css("display", "none");
    }
  }

  // ----------------------------------------------------
  // SHOW INITIAL MENU ON HOVER
  // ----------------------------------------------------
  function showMenu() {
    menuEl.addClass("showme");
    navBtn.addClass("showme");
    isMenuOpen = true;
  }

  // ----------------------------------------------------
  // HIDE MENU/CLOSE ALL
  // ----------------------------------------------------
  function closeAll() {
    // checking if right container is open and closing if true
    // if (isRightContOpen === true) {
    rightCont.removeClass("showme");
    // }
    // closing menu, navBtn, work, about and contact and removing white text class
    menuEl.removeClass("showme white");
    navBtn.removeClass("showme white");
    projectMenuEl.removeClass("showme");
    aboutEl.removeClass("showme");
    contactEl.removeClass("showme");

    // checking if left container is open and closing if true
    if (isLeftContOpen === true) {
      leftCont.children().each(function () {
        $(this).css("display", "none")
      });
    }
    // Checking if other descriptions are open and closing if true
    // if (isDescrOpen === true) {
    //   workGridItem.children("div").each(function () {
    //     $(this).children("p").each(function () {
    //       $(this).css("display", "none");
    //     })
    //   });
    //   isDescrOpen = false;
    // }

    // Change AM logo back to black version
    // $("#replace-logo").attr("src", "assets/img/am-collateral/AM20-29_TAM Internal Marketing_Logo_Fin_AM.png");

    // redefining booleans
    isRightContOpen = false;
    isLeftContOpen = false;
    isDescrOpen = false;
    isMenuOpen = false;

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
    // navBtn.addClass("white");

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
    // workEl.animate({ scrollTop: 0 }, "fast");
    if (isRightContOpen === false) {
      handleMenu();
      workActive();

      isRightContOpen = true;
      isProjectMenuElOpen = true;
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
      // resizeWork();

      // redefine values as true
      isRightContOpen = true;
      isProjectMenuElOpen = true;

    }
    menuTextEl.addClass('hide');
    // else if (isRightContOpen === true && isProjectMenuElOpen === true) {
    //   closeAll();
    //   isRightContOpen = false;
    //   isProjectMenuElOpen = false;
    // }
    // swapLogo();
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
    aboutEl.animate({ scrollTop: 0 }, "fast");
    if (isRightContOpen === false) {
      handleMenu();
      aboutActive();

      isRightContOpen = true;
      isAboutElOpen = true;
    } else if (isProjectMenuElOpen === true || isContactElOpen === true) {
      // closing About and Contact sections and removing their underline
      projectMenuEl.removeClass("showme");
      workNav.removeClass("underline");
      isProjectMenuElOpen = false;
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
      // if (isDescrOpen === true) {
      //   workGridItem.children("div").each(function () {
      //     $(this).children("p").each(function () {
      //       $(this).css("display", "none");
      //     })
      //   });
      // }
      // isDescrOpen = false;
      isLeftContOpen = false;

      // handle basic menu function and show Work
      handleMenu();
      aboutActive();

      // redefine values as true
      isRightContOpen = true;
      isAboutElOpen = true;

    }
    menuTextEl.addClass('hide');
    // else if (isRightContOpen === true && isAboutElOpen === true) {
    //   closeAll();
    //   isRightContOpen = false;
    //   isAboutElOpen = false;
    // }

    // swapLogo();
    // window.scroll({
    //   top: 0,
    //   left: 0,
    //   behavior: 'smooth'
    // });
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
    contactEl.animate({ scrollTop: 0 }, "fast");
    if (isRightContOpen === false) {
      handleMenu();
      contactActive();

      isRightContOpen = true;
      isContactElOpen = true;
    } else if (isProjectMenuElOpen === true || isAboutElOpen === true) {
      // closing About and Contact sections and removing their underline
      projectMenuEl.removeClass("showme");
      workNav.removeClass("underline");
      isProjectMenuElOpen = false;
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
      // if (isDescrOpen === true) {
      //   workGridItem.children("div").each(function () {
      //     $(this).children("p").each(function () {
      //       $(this).css("display", "none");
      //     })
      //   });
      // }
      // isDescrOpen = false;
      isLeftContOpen = false;

      // handle basic menu function and show Work
      handleMenu();
      contactActive();

      // redefine values as true
      isRightContOpen = true;
      isContactElOpen = true;

    }
    menuTextEl.addClass('hide');
    // else if (isRightContOpen === true && isContactElOpen === true) {
    //   closeAll();
    //   isRightContOpen = false;
    //   isContactElOpen = false;
    // }

    // swapLogo();
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  // ----------------------------------------------------
  // Changing AM logo to white version when screen is less than 1024px
  // ----------------------------------------------------
  // function swapLogo() {
  //   if ($(window).width() <= 1024 && isRightContOpen === true) {
  //     $("#replace-logo").attr("src", "assets/img/am-collateral/AM20-29_TAM Internal Marketing_Logo_Fin_AM_Rev.png");
  //   } else if ($(window).width() > 1024 || isRightContOpen === false) {
  //     $("#replace-logo").attr("src", "assets/img/am-collateral/AM20-29_TAM Internal Marketing_Logo_Fin_AM.png");
  //   }
  // };

  // ----------------------------------------------------
  // SHOW PROJECT IMAGES AND DESCRIPTION ON CLICK
  // ----------------------------------------------------
  // function showProject() {
  //   // Checking if left side/other project images are open and closing them if true
  //   if (isLeftContOpen === true) {
  //     leftCont.children().each(function () {
  //       $(this).css("display", "none")
  //     });
  //   }

  //   // Getting the id value of the target el
  //   let i = $(this).attr("id");
  //   // creating a variable that holds the class name using i value and changing display to flex
  //   let thisProClass = `.project${i}`;
  //   $(`${thisProClass}`).css({ "display": "flex", "transform": "translateX(0%)" });

  //   let openDescr = () => {
  //     let descr = $(this)[0].lastElementChild.children[0].className;
  //     $(`.${descr}`).slideDown(1000);
  //   }

  //   // Checking if other descriptions are open and closing if true
  //   if (isDescrOpen === true) {
  //     workGridItem.children("div").each(function () {
  //       $(this).children("p").each(function () {
  //         $(this).slideUp(500);
  //       })
  //     });
  //     isDescrOpen = false;
  //     openDescr();
  //   } else {
  //     openDescr();
  //   }

  //   isDescrOpen = true;
  //   isLeftContOpen = true;

  //   resizeWork();
  // }

  // ----------------------------------------------------
  // RESIZE WORK
  // ----------------------------------------------------
  // function resizeWork() {
  //   // if window is smaller than 1024px
  //   if ($(window).width() < 1024) {
  //     // if window is less than 600px and the left container isn't open
  //     if ($(window).width() < 600 && isLeftContOpen === false) {
  //       // add padding to workmenu so it sits below AM logo
  //       workGridCont.css("padding-top", "8em");
  //     } else {
  //       workGridCont.css("padding-top", "3em");
  //     }
  //     // find all elements in the left container with class 'resize' and change the min-height to 50vh
  //     leftCont.find(".resize").css("min-height", "50vh");
  //     // if the left container is not open
  //     if (isLeftContOpen === false) {
  //       // changr the height of the right container/work descriptions/menu to 100vh and reset the margin to 0
  //       $(".work.showme").css({ "height": "100vh", "margin-top": "0vh" });
  //       // if the left container and right container are both open
  //     } else if (isLeftContOpen === true && isRightContOpen === true) {
  //       // reduce the height of the right cont work menu to 50vh and add a top margin 
  //       $(".work.showme").css({ "height": "50vh", "margin-top": "50vh" });
  //       // add top padding to work menu
  //       workGridCont.css("padding-top", "3em");
  //     }
  //   } else {
  //     // reset height to 100vh and remove margins
  //     leftCont.find(".resize").css("min-height", "100vh");
  //     $(".work.showme").css({ "height": "100vh", "margin-top": "0vh" });
  //   }
  // }

  // $(window).resize(resizeWork);
  // $(window).on('load', resizeWork);

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
  // GOOGLE MAP
  // ----------------------------------------------------
  let map;
  function initMap() {
    const amOffice = { lat: -37.932821, lng: 145.036590 }
    map = new google.maps.Map(document.getElementById("map"), {
      center: amOffice,
      zoom: 12,
      mapId: 'ca5e31db849d916a',
      disableDefaultUI: true,
      zoomControl: false,
      mapTypeControl: false,
      scaleControl: true,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: false,
    });
    const svgMarker = {
      path: "M36.3,101.8L18.4,146H0L60,2.6h18.6l60,143.4H120l-17.9-44.2l-5.7-14.6l-6.5-15.8 c-6.7-16.7-14.6-36.6-20.1-51.9h-1.2c-5.7,15.5-13.4,35.1-20.1,51.9l-6.5,15.8L36.3,101.8z",
      fillColor: "white",
      fillOpacity: 1,
      strokeWeight: 0,
      rotation: 0,
      scale: 0.25,
      anchor: new google.maps.Point(55, 60),
    };
    new google.maps.Marker({
      position: map.getCenter(),
      icon: svgMarker,
      map: map,
    });
  }

  contactNav.click(initMap);
  // $('#visitus-btn').click(initMap)
  // initMap();

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
  // function handleSubMenu() {
  //   // Getting the id value of the target el
  //   console.log($(this))
  //   let i = $(this).attr("id");
  //   console.log(i);
  //   let id = i.split('-', 1)
  //   console.log(`submenu id:${id}`)
  //   console.log($(this).parents())
  //   let parentId = $(this).parents(3).eq(2)[0].id;
  //   console.log(`submenu pardentId:${parentId}`)

  //   aboutEl.removeClass('showme');
  //   contactEl.removeClass('showme');

  //   isAboutElOpen = false;
  //   isContactElOpen = false;

  //   $(`#${parentId}`).css('display', 'none');

  //   let sectionName = parentId.split('-', 1);
  //   console.log(`submenu sectionName:${sectionName}`)
  //   let idToRender = `${sectionName}-${id}`;

  //   if (id === "services") {
  //     servicesEl.css('display', 'block')
  //   }
  // }

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
    // visitUsWrapper.addClass("showme");
  })


  function handleBackBtn() {
    // console.log($(this).siblings());
    // let i = $(this).parents().eq(1)[0].id;
    // $(`#${i}`).removeClass('showme');
    // console.log(`i: ${i}`);

    // let sectionName = i.split('-', 1)
    // console.log(`sectionName: ${sectionName}`);
    // let idToRender = `${sectionName}-intro`;
    // console.log(`idToRender: ${idToRender}`);

    // $(`#${idToRender}`).css('display', 'block');
    // if (sectionName = 'rightcont') {
    //   workNav.removeClass('underline');
    //   aboutNav.removeClass('underline');
    //   contactNav.removeClass('underline');
    // }

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
  }

  navBtn.click(function () {
    if (!isMenuOpen) {
      showMenu();
    } else {
      closeAll();
    }
  })

  // navBtn.toggle(showMenu);

  // ----------------------------------------------------
  // CALLING FUNCTIONS
  // ----------------------------------------------------
  // navBtn.mouseenter(showMenu);
  // navBtn.click(closeAll);
  amLogo.click(closeAll);
  workNav.click(showWork);
  aboutNav.click(showAbout);
  contactNav.click(showContact);
  // workGridItem.click(showProject);
  // workGridItem.click(initSwiper);
  bgSlideshowContainer.click(closeAll);
  backBtn.click(handleBackBtn);
  // servicesBtn.click(handleSubMenu);
  // contactLiBtns.click(handleSubMenu);
  // $(window).resize(swapLogo);
});