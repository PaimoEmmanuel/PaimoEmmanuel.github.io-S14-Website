
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
typewriter("We create innovative digital solutions");
//BLINKING DOT ON CONTACT PAGE
/*var blinker = $('#blinker')
(function blink(){
  var typeTimer = setInterval(function() {
    //blinker.style.visibility = 'visible'? blinker.style.visibility = 'hidden':blinker.style.visibility = 'visible';
    console.log(blinker.style.visibility)
  }, 80);
  })();*/
//MOVING BACKGROUND WITH MOUSE DIRECTION
//var moveA = 90;

/*var moveA = $('.header').pageX;
console.log(moveA)
var moveB = $('.header').pageY;
$('.header').mousemove(function(e){
  //var moveX = (e.pageX * -1 / 15);
  //var moveY = (e.pageY * -1 / 15);
  //moveA++;
  var moveY = (e.pageY/1000);
  var moveX = (e.pageX/1000);
  //var moveX = .2;

  moveB = e.pageY/1000;
  $('.homepage-heading-primary__bg').css('transform', `matrix(1, 0, ${0.0 + moveX}, 0, 0, 1.07, 0, 0, ${0.4 + moveY}, 0, ${0.3 + moveX}, 0, 0, -${2.0 + moveY}, 0, 1) rotate(-7.1deg)`)//moveX + 'px ' + moveY + 'px');
  //console.log(moveX, moveY, 'transform', `matrix3d(1, 0, ${0.0 + moveX}, 0, 0, 1.07, 0, 0, ${0.4 + moveY}, 0, ${0.3 + moveX}, 0, 0, -${2.0 + moveY}, 0, 1) rotate(-7.1deg)`)
  //console.log($('.homepage-heading-primary__bg'))
  $('.wavy-a').css('margin-left', moveX + 'px');
})*/

//MOVING BACKGROUND WITH MOUSE DIRECTION
var moveA = 90;
$('.homepage-heading-primary').mousemove(function(e){
  var moveX = (e.pageX * -1 / 15);
  var moveY = (e.pageY * -1 / 15);
  moveA++;
  console.log('working!')
  $('.homepage-heading-primary__bg').css('background-position', moveX + 'px ' + moveY + 'px');
  $('.wavy-a').css('margin-left', moveX + 'px');
})


//FOR THE MOVING WAVY VECTOR1 ON SCROLL
/*var window_width = $(window).width() - $('#wavy').width();
var document_height = $(document).height() + 700;
$(function () {
    $(window).scroll(function () {
        var scroll_position = $(window).scrollTop() + 400;
        var object_position_left = window_width * (scroll_position / document_height);
        $('#wavy').css({
            'top': object_position_left
        });
    });
});*/


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


function nextFn(){
  srcArr.push(srcArr.shift())
  for(let i =0; i < clientLogoPosition.length; i++){
      clientLogoPosition[i].src = srcArr[i];
  }
}

/*$(document).ready(function(){
  myVar = setInterval("nextFn()", 1000);
});*/
next.onclick = nextFn;
prev.onclick = function(){
  srcArr.unshift(srcArr.pop());
  for(let i =0; i < clientLogoPosition.length; i++){
      clientLogoPosition[i].src = srcArr[i];
  }
}


//FOR BLINKING DOT ON CONTACT PAGE


// FOr the build, UiUx tabs
