// Javascript Document


$(document).ready(function(){

    // header
var menuItemHasSubMenu = $('header > nav > ul.menu > li').has('ul.submenu');

function slideDown(){
    console.log('slideDown');
    $(this).find('ul.submenu').stop().slideDown(300).css('display','flex');
}

function slideUp(){
    console.log('slideUp');
    $(this).find('ul.submenu').stop().slideUp(300);
}


menuItemHasSubMenu.hover(
    slideDown, slideUp
);



});

