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



pcGnb_init();
mbGnb_init();



});

