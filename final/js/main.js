$(document).ready(function() {
    // run function on initial page load
    menu();
});
 
function menu() {
    $('.mnavi').hover(function(){
         
        $('.mlinks').toggleClass('hidenavi');
     
    });
 
}