
$(".navigation__button").click(function(){
  $(".header__nav-list").toggleClass("show");
  $(".header__nav-logo-link").toggleClass("hide");
 //('.header__nav-list-parent').css('animation', 'animated-menu 2s');
});

//FOR THE TYPEWRITER EFFECT
function typewriter(string){
var headerText = document.getElementById('home-header-text');
var n = 0;
var str = string;
var typeTimer = setInterval(function() {
  n = n + 1;
  headerText.innerHTML = "" + str.slice(0, n);
  if (n === str.length) {
    clearInterval(typeTimer);
    headerText.innerHTML = "" + str;
    n = 0;
    setInterval(function() {

      if (n === 0) {
        headerText.innerHTML = "" + str + "|"
        n = 1;
      } else {
        headerText.innerHTML = "" + str
        n = 0;
      };
    }, 500);
  };
}, 80);
};
//typewriter("We create innovative digital solutions");


//MOVING BACKGROUND WITH MOUSE DIRECTION
var moveA = 90;
$('.homepage-heading-primary').mousemove(function(e){
  var moveX = (e.pageX * -1 / 15);
  var moveY = (e.pageY * -1 / 15);
  moveA++;
  //console.log('transform', `translate(${moveX}px, ${moveY}px)`)
  $('.homepage-heading-primary__text').css('transform', `translate(${moveX}px, ${moveY}px)`);
  //$('.homepage-heading-primary__bg').css('transform',`rotate(-7.1deg) translateZ(${moveX}px)`);
  $('.wavy-a').css('transform', `translate(${moveX}px, ${moveY}px)`);
})


//


//FOR THE MOVING WAVY VECTOR1 ON SCROLL
var window_width2 = $(window).width() - $('#wavy2').width();
var document_height2 = $(document).height() -1000 ;
$(function () {
    $(window).scroll(function () {
        var scroll_position2 = $(window).scrollTop() ;
        var object_position_left2 = window_width2 * (scroll_position2 / document_height2);
        $('#wavy2').css({
            'bottom': object_position_left2
        });
    });
});

//For the client carousel
let next = document.getElementsByClassName("next")[0];
let prev = document.getElementsByClassName("prev")[0];
let srcArr = ["img/bcc.png", "img/fb.png", "img/pp.png"];
let clientLogoPosition = document.getElementsByClassName("clients__image");


// function nextFn(){
//   srcArr.push(srcArr.shift())
//   for(let i =0; i < clientLogoPosition.length; i++){
//       clientLogoPosition[i].src = srcArr[i];
//   }
// }
// next.onclick = nextFn;
// prev.onclick = function(){
//   srcArr.unshift(srcArr.pop());
//   for(let i =0; i < clientLogoPosition.length; i++){
//       clientLogoPosition[i].src = srcArr[i];
//   }
// }

/*$(document).ready(function(){
  myVar = setInterval("nextFn()", 1000);
});*/
// next.onclick = nextFn;
// prev.onclick = function(){
//   srcArr.unshift(srcArr.pop());
//   for(let i =0; i < clientLogoPosition.length; i++){
//       clientLogoPosition[i].src = srcArr[i];
//   }
// }

$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

$.fn.isInTotalViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementTop < viewportTop && elementBottom > viewportTop ;
};

//For about us-our expertise tab revealing underneath the section-background
$(window).on('resize scroll', function() {
  if ($(".section-background").isInTotalViewport()) {
      // do something
      //console.log('Do something')
      //$('.section-work').css('position', 'fixed');
      $('.section-background').css('margin-bottom', '100vh');
      $('.section-work').css('position', 'fixed');
      $('.section-work').css('top', '0');
      //$('.section-work').css('width', '100%');
  } else {
      // do something else
      $('.section-background').css('margin-bottom', '00vh');
      $('.section-work').css('position', 'relative');
      $('.section-work').css('top', '0');
  }
});

//For about us-our expertise tab
$(window).on('resize scroll', function() {
  if ($(".sp1").isInViewport() && !($(".section-background").isInTotalViewport())) {
      // do something
      
      $('.p1').css('color', '#000000');
      
      if($(window).scrollTop() > $('.sp1').offset().top){
        $('html, body').stop(true, false).animate({
          scrollTop: $('.sp2').offset().top
        }, 80); $('.p1').css('color', '#BDBDBD');
        $('.p2').css('color', '#000000');
        //console.log('Fist tab should scroll up', $(window).scrollTop(), $('.sp2').offset().top)
      }

  }
  if($(".sp2").isInViewport() && !($(".sp1").isInViewport())){
    if($(window).scrollTop() > $('.sp2').offset().top){
      $('html, body').stop(true, false).animate({
        scrollTop: ($('.sp3').offset().top)
      }, 80); $('.p1').css('color', '#BDBDBD');
      $('.p3').css('color', '#000000');
      //console.log('Fist tab should scroll up', $(window).scrollTop(), $('.sp2').offset().top)
    }
    //  if ($(window).scrollTop() < $('.sp2').offset().top){
    //   $('html, body').stop(true, false).animate({
    //     scrollTop: $('.sp1').offset().top
    //   }, 80); $('.p1').css('color', '#000000');
    //   $('.p3').css('color', '#BDBDBD');
    //   //console.log('Fist tab should scroll up', $(window).scrollTop(), $('.sp2').offset().top)
    // }
  }
});
  


// //Tab 2 WEB
// if ($('.sp2').offset().top == parseInt($(window).scrollTop())) {
//   // do something
//   console.log('Change color to black')
//   //$('.p2').css('color', '#000000');
//   if($(window).scrollTop() > $('.sp2').offset().top){
//     $('html, body').stop(true, false).animate({
//       scrollTop: $('.sp3').offset().top
//     }, 80);
//     console.log('Fist tab should scroll up')
//   }

// }
// //Tab 3 - DESIGN
// $(window).on('resize scroll', function() {
//   if ($(".sp3").isInViewport()) {
//       // do something
//       if($(window).scrollTop() > $('.sp3').offset().top){
//         $('html, body').stop(true, false).animate({
//           scrollTop: $('.sp4').offset().top
//         }, 80);
//       } else if($(window).scrollTop() < $('.sp3').offset().top){
//         $('html, body').stop(true, false).animate({
//           scrollTop: $('.sp2').offset().top
//         }, 80);
//       }
//       $('.p3').css('color', '#000000');
      
//   } else {
//       // do something else
//       $('.p3').css('color', '#BDBDBD');
//   }
// });

// // Tab 4 - UI/UX
// $(window).on('resize scroll', function() {
//   if ($(".sp4").isInViewport()) {
//       // do something
//       if($(window).scrollTop() < $('.sp4').offset().top){
//         $('html, body').stop(true, false).animate({
//           scrollTop: $('.sp3').offset().top
//         }, 80);
//       }
//       $('.p4').css('color', '#000000');
//   } else {
//       // do something else
//       $('.p4').css('color', '#BDBDBD');
//   }
// });