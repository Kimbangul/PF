// Javascript Document


$(document).ready(function(){

    // header

function pcGnb_init(){
    var menuItemHasSubMenu = $('header > nav > ul.menu > li').has('ul.submenu');

function slideDown(){

   $('.header-wrap').addClass('on');
}

function slideUp(){

    $('.header-wrap').removeClass('on');
}


menuItemHasSubMenu.hover(
    slideDown, slideUp
);
}
function mbGnb_init(){
    var openBtn = $('header > nav.mb > div.menu-btn');
    var closeBtn = $('header > nav.mb > div.gnb > div.menu > div.menu-top > div.close-btn');
    var mbGnb = $('header > nav.mb > div.gnb');

    function mbGnbOpen(){        
        mbGnb.addClass('on');
    }

    
    function mbGnbClose(){    
        mbGnb.removeClass('on');
    }
    


    openBtn.click(mbGnbOpen);
    closeBtn.click(mbGnbClose);


}

// slick slide
function slickSlide_init(){
    
$('.slider-1').slick({
    slide: 'li',
    dots : true,
    infinite : true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover : false,
    arrows: true,
    prevArrow : "<button type='button' class='slick-prev'>Previous</button>",		// 이전 화살표 모양 설정
	nextArrow : "<button type='button' class='slick-next'>Next</button>"		// 다음 화살표 모양 설정
 });

 $('.slider-2').slick({
    slide: 'li',
    dots : false,
    speed: 300,
    infinite : false,
    autoplay: false,
    pauseOnHover : false,
    arrows: false,
    draggable: false,
    arrows: true,
    prevArrow : $('.slider-2 .prev-arrow'),		// 이전 화살표 모양 설정
	nextArrow : $('.slider-2 .next-arrow')		// 다음 화살표 모양 설정
 });



 $('.slider-3').slick({
    slide: 'li',
    dots : true,
    infinite : false,
    autoplay: false,
   
    pauseOnHover : false,
    arrows: false,
    fade: true,
    draggable: false,
    customPaging: function (slider, i) {
        var thumb = $(slider.$slides[i]).data('thumb');
        return '<div class="thumb"><img src="'+thumb+'"></div>';
    } 
 });

}

function popup_init(){
   var videoStartBtn = $('.slider-1 li.bg a.video');
var videoCloseBtn = $('div#popup > .popup-body div.close-btn');

videoStartBtn.click(function(){
    $('#popup').addClass('active');
    ytbPlayer();
});


videoCloseBtn.click(function(){
    $('#popup').removeClass('active');
    ytbPlayer();
}); 

function ytbPlayer(){
    if ($('#popup').hasClass('active')){
        $('#popup > .popup-body').append('<iframe id="ytb-video" src="https://www.youtube.com/embed/2CD7yYaOI7c?autoplay=1&controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    }
    else{
        $('#ytb-video').remove();
    }
}




}







pcGnb_init();
mbGnb_init();
slickSlide_init();
popup_init();



});

