
$(document).ready(function () {
  //js will only run once HTML doc has loaded - will speed up response time^^

  var workNav = $('.worknav');
  var workEl = $('.work');

  var aboutNav = $('.aboutnav');
  var aboutEl = $('.about');

  var contactNav = $('.contactnav');
  var contactEl = $('.contact');

  var homeLogoBtn = $('.homelogo');

  var nav = $('nav');



  //Nav - close work/about/contact menu when logo is clicked/
  function closeAllMenus() {
    workEl.css({ "display": "none", "transition": "0.5s" });
    aboutEl.css("display", "none");
    contactEl.css("display", "none");
    console.log("Close menus");
    nav.css("color", "black");
  }

  //toggle work menu
  function toggleWork() {
    workEl.toggle("showme");
    workEl.css("z-index", "0.5");
    aboutEl.css({ "display": "none", "z-index": "-0.5" });
    contactEl.css({ "display": "none", "z-index": "-0.5" });
    fettiPro.css("display", "none");
    $('nav a').css("color", "white");
  };

  //toggle about menu
  function toggleAbout() {
    aboutEl.toggle('showme');
    aboutEl.css('z-index', '0.5');
    workEl.css({ "display": "none", "z-index": "-0.5" });
    contactEl.css({ "display": "none", "z-index": "-0.5", "transition": "0.5s" });
    $('nav a').css("color", "white");
  }

  //toggle contact menu
  function toggleContact() {
    workEl.css({ "display": "none", "z-index": "-0.5" });
    aboutEl.css({ "display": "none", "z-index": "-0.5" });
    contactEl.toggle('showme');
    contactEl.css("z-index", "0.5");
    $('nav a').css("color", "white");
  }

  //Nav event listeners
  workNav.click(toggleWork);
  aboutNav.click(toggleAbout);
  contactNav.click(toggleContact);
  homeLogoBtn.click(closeAllMenus);


  //change colours of nav el when menus open
  // if ($('.work.showme') || $('.about.showme') || $('.contact.showme')) {
  //   $('nav').children().css("color", "white");
  // } else {
  //   $('nav').children().css("color", "black");
  // }

  // const workElAttr = workEl.attr('showme');

  // if (typeof workElAttr !== "undefined" && workElAttr !== false) {
  //   $('nav').children().css("color", "white");
  // } else {
  //   $('nav').children().css("color", "black");
  // }


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
    fettiPro.toggle('showme');
  });

  // //Fetti Project IMG - showing Fetti Project IMG on left when click on link/
  // fettiLink.click(function () {
  // });

  //Farmer - adding description when click on link/
  farmerLink.click(function () {
    farmerDescr.toggle('showme');
    farmerPro.toggle('showme');
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