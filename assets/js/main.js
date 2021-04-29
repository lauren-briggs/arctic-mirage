$(document).ready(function () {
  //js will only run once HTML doc has loaded to speed up response time

  // ELEMENTS
  const menuEl = $(".menu");
  const navEl = $("nav");
  const rightCont = $("#rightcont");
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
  var isWorkElOpen = false;
  var isAboutElOpen = false;
  var isContactElOpen = false;

  // SHOW - HIDE MENU ON HOVER
  function showMenu() {
    menuEl.addClass("showme");
    navBtn.addClass("showme");
    console.log("show menu on hover")
  }

  function hideMenu() {
    menuEl.removeClass("showme white");
    navBtn.removeClass("showme white");
    workEl.removeClass("showme");
    aboutEl.removeClass("showme");
    contactEl.removeClass("showme");

    workNav.removeClass("underline");
    aboutNav.removeClass("underline");

    console.log("menu hidden")
  }

  // HANDLE MENU FUNCTION FOR ALL NAV ITEMS - changing text to white etc.
  function handleMenu() {
    menuEl.removeClass("showme");
    rightCont.addClass("showme");
    menuEl.addClass("showme white");
    navBtn.addClass("white");

    isRightContOpen = false;
    isWorkElOpen = false;
    isAboutElOpen = false;
  }
  // SHOW WORK EL
  function showWork() {
    if (isRightContOpen == false) {
      handleMenu();
      workNav.addClass("underline");
      workEl.addClass("showme");

      isRightContOpen = true;
      isWorkElOpen = true;
    } else if (isRightContOpen == true && isWorkElOpen === true) {
      hideMenu();
      isRightContOpen = false;
      isWorkElOpen = false;
    }
  }

  // SHOW ABOUT EL
  function showAbout() {
    if (isRightContOpen == false) {
      handleMenu();
      aboutNav.addClass("underline");
      aboutEl.addClass("showme");

      isRightContOpen = true;
      isAboutElOpen = true;
    } else if (isRightContOpen == true && isAboutElOpen === true) {
      hideMenu();
      isRightContOpen = false;
      isAboutElOpen = false;
    }
  }



  // SHOW ABOUT EL
  // function showAbout() {
  //   handleMenu();
  //   workEl.removeClass("showme");
  //   contactEl.removeClass("showme");
  //   aboutEl.addClass("showme");
  // }

  // handleMenu();
  // contactEl.removeClass("showme");
  // aboutEl.removeClass("showme");
  // workEl.addClass("showme");

  // workNav.css({ "text-decoration": "underline", "text-underline-offset": "3px" });

  // function handleWork() {
  //   if (!workEl.hasClass("showme")) {
  //     aboutEl.removeClass("showme");
  //     contactEl.removeClass("showme");
  //     handleMenu();
  //     workEl.addClass("showme");
  //     console.log("add class")
  //   } else {
  //     workEl.removeClass("showme");
  //     hideMenu();
  //     console.log("handle work function returned");
  //     return
  //   }
  // }



  // SHOW CONTACT EL
  function showContact() {
    handleMenu();
    workEl.removeClass("showme");
    aboutEl.removeClass("showme");
    contactEl.addClass("showme");
  }

  // CALLING FUNCTIONS
  navBtn.mouseenter(showMenu);
  navBtn.click(hideMenu);
  amLogo.click(hideMenu);
  workNav.click(showWork);
  aboutNav.click(showAbout);
  contactNav.click(showContact);




  // TO DO: add function to show project images on LEFT hand side when their corresponding project headings are clicked
  // TO DO: add function to show/hide the list of services on hover
  // TO DO: add functionality of form!!



  // 	$('.grid-container-workmenu').on('click', 'div', function() {
  // 		showTarget($(this));
  // 	});

  // // show the hovered list item stuff
  // function showTarget(e) {
  // 	// $('.grid-container-workmenu').removeClass('hover');

  // 	var target = $(e).attr('data-target');
  // 	var showcaseHeight = $('.showcase-menu').outerHeight();

  // 	showcaseHeight = (showcaseHeight * target) * -1;

  // 	$('.showcase-menu').css({
  // 		top: showcaseHeight
  // 	});

  // 	$(e).addClass('hover');
  // }








});

