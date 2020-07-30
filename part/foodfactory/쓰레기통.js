// scroll

var windowHeight = $(window).height();
var position = $(window).scrollTop(); 

var scrollstep = 0;

var floatingMenu = $('div#floating > ul > li');
function floatingMenuClickEvent(){
  var scrollPosition = $($(this).attr("data-target")).offset().top;

$("html, body").animate({scrollTop: scrollPosition}, 500);
$(this).addClass('active').siblings('li').removeClass('active');
scrollstep = $(this).index();
}

floatingMenu.click(floatingMenuClickEvent);

// 플로팅 끝

// 스크롤 시 이동


var elementPosition = [ $('#main-img').offset().top, $('#onecup_oneday').offset().top, $('#news').offset().top, $('#partner').offset().top, $('footer').offset().top
];





$(window).bind('mousewheel',  $.debounce(200, 
  function(e){
    if(e.originalEvent.wheelDelta < 0) {
      if (scrollstep == elementPosition.length - 1){
        return false;
            }
            else{
              $("html, body").animate({scrollTop: elementPosition[scrollstep+1]}, 700);
              scrollstep++;
              console.log(scrollstep);

            }
        console.log('Down');
    }
    
    else {
    if (scrollstep == 0){
      return false;
    }
    else {
      $("html, body").animate({scrollTop: elementPosition[scrollstep-1]}, 700);
      scrollstep--;
      console.log(scrollstep);
    }

        //scroll up
        console.log('Up');
    }
  
    //prevent page fom scrolling
    // return false;
    $(floatingMenu[scrollstep]).addClass('active').siblings('li').removeClass('active');
  }
));