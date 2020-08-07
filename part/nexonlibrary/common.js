// Javascript Document


$(document).ready(function(){

    // header
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



});

