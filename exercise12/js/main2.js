$(document).ready(function() {
    // run function on initial page load
    interactions();
    variables();
    interactions2();
 
    // run function on resize of the window
    $(window).resize(function() {
   
    });
 
    // run function on scroll
    $(window).scroll(function() {
 
    });
});
// link to mouse events https://api.jquery.com/category/events/mouse-events/
function interactions() {
    $('.jqClick').click(function(){
        $('.five').toggleClass('moveL');
        console.log('clicked');
    });
    $('.jqdblClick').dblclick(function(){
        $('.four').toggleClass('moveR');
        console.log('dblclicked');
    });
    $('.jqClick2').click(function(){
        $('.three').toggleClass('moveD');
        console.log('clicked');
    });
    $('.jqdblClick2').dblclick(function(){
        $('.two').toggleClass('moveU');
        console.log('dblclicked');
    });
    $('.jqHover').hover(function(){
        $('.one').addClass('fade');
        console.log('hovered');
    });

    // $('.jqHover2').hover(function(){
    //     $('.one').toggleClass('whiteBGD moveR');
    //     console.log('hovered');
    // });
    
}
 
function variables() {
    var h1H = $('h1').height();
    var wH = $(window).height();
    console.log(h1H);
}