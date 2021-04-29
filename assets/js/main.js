$(document).ready(function () {
  //js will only run once HTML doc has loaded to speed up response time

  // ELEMENTS
  const menuEl = $(".menu");
  const navEl = $("nav");
  const rightCont = $("#rightcont");
  // const leftCont = $(".leftCont");
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
    rightCont.removeClass("showme");
    menuEl.removeClass("showme white");
    navBtn.removeClass("showme white");
    workEl.removeClass("showme");
    aboutEl.removeClass("showme");
    contactEl.removeClass("showme");

    workNav.removeClass("underline");
    aboutNav.removeClass("underline");
    contactNav.removeClass("underline");

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
      console.log(`Is about open: ${isAboutElOpen}`);
      // closing About and Contact sections and removing their underline
      aboutEl.removeClass("showme");
      aboutNav.removeClass("underline");
      isAboutElOpen = false;
      contactEl.removeClass("showme");
      contactNav.removeClass("underline");
      isContactElOpen = false;

      console.log(`Is about still open: ${isAboutElOpen}`);

      // handle basic menu function and show Work
      handleMenu();
      workActive();

      // redefine values as true
      isRightContOpen = true;
      isWorkElOpen = true;

    } else if (isRightContOpen === true && isWorkElOpen === true) {
      hideMenu();
      isRightContOpen = false;
      isWorkElOpen = false;
    }
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
      console.log(`Is work open: ${isWorkElOpen}`);
      // closing About and Contact sections and removing their underline
      workEl.removeClass("showme");
      workNav.removeClass("underline");
      isWorkElOpen = false;
      contactEl.removeClass("showme");
      contactNav.removeClass("underline");
      isContactElOpen = false;


      console.log(`Is work still open: ${isWorkElOpen}`);

      // handle basic menu function and show Work
      handleMenu();
      aboutActive();

      // redefine values as true
      isRightContOpen = true;
      isAboutElOpen = true;

    } else if (isRightContOpen === true && isAboutElOpen === true) {
      hideMenu();
      isRightContOpen = false;
      isAboutElOpen = false;
    }
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
      console.log(`Is work open: ${isWorkElOpen}`);
      // closing About and Contact sections and removing their underline
      workEl.removeClass("showme");
      workNav.removeClass("underline");
      isWorkElOpen = false;
      aboutEl.removeClass("showme");
      aboutNav.removeClass("underline");
      isAboutElOpen = false;

      console.log(`Is work still open: ${isWorkElOpen}`);

      // handle basic menu function and show Work
      handleMenu();
      contactActive();

      // redefine values as true
      isRightContOpen = true;
      isContactElOpen = true;

    } else if (isRightContOpen === true && isContactElOpen === true) {
      hideMenu();
      isRightContOpen = false;
      isContactElOpen = false;
    }
  }


  // SHOW PROJECT IMAGES ON CLICK

  function showProject() {
    var thisProject = $(this).attr("id");
    console.log(thisProject);

    // TO DO: connect thisProject variable with the class name in DOM to show/hide project imgs
    var thisProClass = $(".project" + thisProject);
    console.log(`clicked on: ${thisProClass}`);

    thisProClass.addClass("showme");
  }


  // CALLING FUNCTIONS
  navBtn.mouseenter(showMenu);
  navBtn.click(hideMenu);
  amLogo.click(hideMenu);
  workNav.click(showWork);
  aboutNav.click(showAbout);
  contactNav.click(showContact);
  $(".grid-item-workmenu").click(showProject);




  // TO DO: add function to show project images on LEFT hand side when their corresponding project headings are clicked
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

