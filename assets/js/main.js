$(document).ready(function () {
  //js will only run once HTML doc has loaded to speed up response time

  // ELEMENTS
  const menuEl = $(".menu");
  const navEl = $("nav");
  const sideNav = $("#sidenav");
  const workEl = $(".work")
  const aboutEl = $(".about")
  const contactEl = $(".contact")

  // BUTTONS
  const navBtn = $("#navBtn")
  const workNav = $("#workNav");
  const aboutNav = $("#aboutNav");
  const contactNav = $("#contactNav")
  const amLogo = $("#homelogo")

  // SHOW - HIDE MENU ON HOVER
  function showMenu() {
    menuEl.addClass("showme");
    navBtn.addClass("showme");
  }
  function hideMenu() {
    menuEl.removeClass("showme white");
    navBtn.removeClass("showme white");
    workEl.removeClass("showme");
    aboutEl.removeClass("showme");
    contactEl.removeClass("showme");
  }

  // HANDLE MENU FUNCTION FOR ALL NAV ITEMS
  function handleMenu() {
    menuEl.removeClass("showme");
    sideNav.toggleClass("showme");
    menuEl.toggleClass("showme white");
    navBtn.toggleClass("white");
  }
  // SHOW WORK EL
  function showWork() {
    handleMenu();

    aboutEl.removeClass("showme");
    contactEl.removeClass("showme");
    workEl.toggleClass("showme");
  }
  // SHOW ABOUT EL
  function showAbout() {
    handleMenu();
    workEl.removeClass("showme");
    contactEl.removeClass("showme");
    aboutEl.addClass("showme");
  }
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



  // TO DO: add function to open and close menu
  // TO DO: add function to close menu when AM logo is clicked
  // TO DO: add function to change the nav menu text to white when menu is open (and background is black)
  // TO DO: add function to show project images on LEFT hand side when their corresponding project headings are clicked
  // TO DO: add function to show/hide the list of services on hover
  // TO DO: add functionality of form!!

});