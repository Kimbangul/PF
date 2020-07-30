
console.clear();

// slider
function slider_init(){
$('.slider-1').slick({
slide: 'li',
dots : true,
infinite : true,
autoplay: true,
autoplaySpeed: 3000,
pauseOnHover : true,
fade: true
});

$('.slider-2').slick({
dots : false,
infinite : true,
slidesToShow : 4,

  responsive : [
  {
    breakpoint : 1100,
    settings: {
      slidesToShow: 3,
      dots : true,
      autoplay : true
    }
  },
  {
    breakpoint : 850,
    settings: {
      slidesToShow: 2,
      dots : true,
      autoplay : true
    }
  },
        {
    breakpoint : 550,
    settings: {
      slidesToShow: 1,
      dots : true,
      autoplay : true
    }
  }
]
});

$('.slider-3').slick({
dots : false,
infinite : true,
autoplay: true,
autoplaySpeed: 3000,
pauseOnHover : true,
fade: true
});
}


// pc gnb
function headerOpenClose_init(){
var $submenu = $('header .gnb-pc ul.submenu');
var $headerBackground = $('.header_open_bg');
var slideDuration = 400;

$('header > nav.menu > .gnb-pc').hover(
function(){
  $('header').addClass('active');
  $submenu.stop().slideDown(slideDuration);
  $headerBackground.stop().slideDown(slideDuration-50);
},
function(){
  $('header').removeClass('active');
  $submenu.stop().slideUp(slideDuration);
  $headerBackground.stop().hide().slideUp(slideDuration+500);

}
);
}

// mobile gnb
function mbOpenClose_init(){
var $btn = $('.gnb-mb-btn');
function mbOpenClose(){
  if($btn.hasClass('active')){
  $('header').removeClass('active');
  $btn.removeClass('active');
  $('nav.menu > div.gnb-mb').stop().slideUp();
}
  else{
  $('header').addClass('active');
  $btn.addClass('active');
    $('nav.menu > div.gnb-mb').stop().slideDown();
  }
  

}

function mbSubmenuOpen(){
  
  if ($(this).hasClass('open')){
      $(this).removeClass('open').find('ul.submenu').stop().slideUp();
    
  }
  else{
      $(this).addClass('open').find('ul.submenu').stop().slideDown();
    $(this).siblings('li').removeClass('open').find('ul.submenu').stop().slideUp();
  }
    
    
    
  
}

$btn.click(mbOpenClose);
$('nav.menu > div.gnb-mb li').click(mbSubmenuOpen);
}

// fullpage




headerOpenClose_init();
mbOpenClose_init();
slider_init();

