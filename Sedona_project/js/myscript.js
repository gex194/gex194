 $("#contact-form").validate();   
$(document).ready(function() {
    $(".cross").hide();
    $(".menu-mobile").hide();
    $(".hamburger").click(function() {
        $(".hamburger").fadeOut();
        $(".menu-mobile").fadeToggle ("swing", function() {
            $(".cross").fadeIn();
        });
});
    
    $( ".cross" ).click(function() {
    $( ".cross" ).fadeOut();    
$( ".menu-mobile" ).fadeToggle( "swing", function() {
$( ".hamburger" ).show();
});
});

});

$(document).ready(function() {
    $("#e_dialog").dialog({
        modal:true,
        autoOpen:false,
        width:600,
        height:350,
        show: {
            effect:"blind",
            duration:500
        },
        hide: {
            effect:"blind",
            duration:500
        },
        buttons: {
            "Close": function(){
                $("#e_dialog").dialog('close');
            }
        }
    });
    $("#dialog").dialog({
        modal: true,
        autoOpen: false,
        width: 600,
        height: 350,
        show: {
        effect:"blind",
            duration: 500
    },
        hide:{
            effect:"blind",
            duration:500
        },
        buttons: {
            "Close": function(){
                $("#dialog").dialog('close');
            }
        }
    });
    
    $("#go").click(function() {
        $("#dialog").dialog('open');
    });
});