$(document).ready(function () {
  //js will only run once HTML doc has loaded to speed up response time

  const navText = $("nav a");
  const workNav = $(".worknav");
  const sideNav = $("#sidenav");

  function openNav() {
    sideNav.addClass("showme");
    navText.addClass("white");
  }

  workNav.click(openNav);


  // TO DO: add function to open and close menu
  // TO DO: add function to close menu when AM logo is clicked
  // TO DO: add function to change the nav menu text to white when menu is open (and background is black)
  // TO DO: add function to open and close project descriptions when their parent headings are clicked
  // TO DO: add function to show project images on LEFT hand side when their corresponding project headings are clicked
  // TO DO: add function to show/hide the list of services on hover
  // TO DO: add functionality of form!!

});