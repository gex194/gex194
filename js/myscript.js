$("#contact-form").validate();
    
$(document).ready(function() {
    $(".cross").hide();
    $(".menu-mobile").hide();
    $(".hamburger").click(function() {
        $(".hamburger").fadeOut();
        $(".menu-mobile").slideToggle ("slow", function() {
            $(".cross").fadeIn();
        });
});
    
    $( ".cross" ).click(function() {
    $( ".cross" ).fadeOut();    
$( ".menu-mobile" ).slideToggle( "slow", function() {
$( ".hamburger" ).show();
});
});

});