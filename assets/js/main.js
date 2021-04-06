
$(document).ready(function () {
  //js will only run once HTML doc has loaded - will speed up response time^^

  var workNav = $('.worknav');
  var workEl = $('.work');

  var amLogo = $('.homelogo');

  var aboutNav = $('.aboutnav');
  var aboutEl = $('.about');

  var contactNav = $('.contactnav');
  var contactEl = $('.contact');


  /*
    TYPE
    SET VARIABLE
    var hyphen = document.getElementById('hyphen');
  
    ADD EVENT LISTENER
    hyphen.addEventListener('click', showMeHyphentype);
  
    CALL FUNCTION
    function showMeHyphentype() {
    document.getElementById('hyphen').classList.toggle('showme');
    }
    */

  //Nav - open work menu/
  workNav.click(function () {
    workEl.toggle('showme');
  });

  //Nav - close work menu when logo is clicked/
  amLogo.click(function () {
    workEl.removeClass('showme');
  });

  //Nav - close work menu when about is clicked/
  aboutNav.click(function () {
    workEl.removeClass('showme');
  });

  //IF THEN need to try
  //Nav - when you open work nav - about nav closes

  //Nav - open about/
  aboutNav.click(function () {
    aboutEl.toggle('showme');
    // aboutEl.style.zIndex = 2000;
    // contactEl.style.zIndex = -1000;
  });

  //Nav - open contact
  contactNav.click(function () {
    contactEl.toggle('showme');
  });


  //fetti variables
  var fettiLink = $('#fettilink');
  var fettiDescr = $('.fettidescr')
  var fettiPro = $('.projectfetti')

  //farmer variables
  var farmerLink = $('#farmerlink');
  var farmerDescr = $('.farmerdescr')
  var farmerPro = $('.projectfarmer')

  //olivia variables
  var oliviaLink = $('#olivialink');
  var oliviaDescr = $('.oliviadescr')
  var oliviaPro = $('.projectolivia')

  //blair variables
  var blairLink = $('#blairlink');
  var blairDescr = $('.blairdescr')
  var blairPro = $('.projectblair')

  //backman variables
  var backmanLink = $('#backmanlink');
  var backmanDescr = $('.backmandescr')
  var backmanPro = $('.projectbackman')

  //Fetti - adding description when click on link/
  fettiLink.click(function () {
    fettiDescr.toggle('showme');
  });

  //Fetti Project IMG - showing Fetti Project IMG on left when click on link/
  fettiLink.click(function () {
    fettiPro.toggle('showme');
  });

  //Farmer - adding description when click on link/
  farmerLink.click(function () {
    farmerDescr.toggle('showme');
  });


  //Olivia - adding description when click on link/
  oliviaLink.click(function () {
    oliviaDescr.toggle('showme');
  });


  //Blair - adding description when click on link/
  blairLink.click(function () {
    blairDescr.toggle('showme');
  });


  //Backman - adding description when click on link/
  backmanLink.click(function () {
    backmanDescr.toggle('showme');
  });


  //Alba - adding description when click on link/
  $('#albalink').click(function () {
    $('.albadescr').toggle('showme');
  });


  //The Bank - adding description when click on link/
  $('#banklink').click(function () {
    $('.bankdescr').toggle('showme');
  });


  //77 South - adding description when click on link/
  $('#77southlink').click(function () {
    $('.77southdescr').toggle('showme');
  });


  //Sullivan & Co - adding description when click on link/
  $('#sullivanlink').click(function () {
    $('.sullivandescr').toggle('showme');
  });


  //Esplanade 121 - adding description when click on link/
  $('#e121link').click(function () {
    $('.e121descr').toggle('showme');
  });


  //Unfold - adding description when click on link/
  $('#unfoldlink').click(function () {
    $('.unfolddescr').toggle('showme');
  });


  //The Hamilton - adding description when click on link/
  $('#hamiltonlink').click(function () {
    $('.hamiltondescr').toggle('showme');
  });


  //Invites - adding description when click on link/
  $('#invitelink').click(function () {
    $('.invitedescr').toggle('showme');
  });


  //Maison Central - adding description when click on link/
  $('#maisonlink').click(function () {
    $('.maisondescr').toggle('showme');
  });






  //Services - showing list of services when hover on heading/
  $('#brandinghover').mouseenter(function () {
    $('#brandinglist').addClass('showme');
  });

  $('.brandingbox').mouseleave(function () {
    $('#brandinglist').removeClass('showme');
  });


  //$('#hyphen').mouseenter(function() {
  //$('#hyphen').addClass('showme');
  //});

  // $('#hyphen').mouseleave(function() {
  //   $('#hyphen').removeClass('showme');
  // });






  //SLIDESHOW ANIMATION
  /*
  var slideIndex = 0;
  showSlides();
  
  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }
  
  */












  //close js tag/

});