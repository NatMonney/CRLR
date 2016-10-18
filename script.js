// Definition des variables
var topTrigger = "300",
    menuWidth = "28";

// Methode de scroll
jQuery( window ).bind( "scroll", function() {

    var wintop = jQuery( window ).scrollTop();

    // Position tout en haut
    if( wintop <= "0" ) {

        jQuery( ".menu_bar" ).removeClass( "fixed");
        jQuery( ".menu_bar" ).removeClass( "middle" );
        jQuery( ".menu_bar" ).removeClass( "bottom" );
    }

    // Position cachee
    else if( wintop > menuWidth && wintop < topTrigger ) {

        jQuery( ".menu_bar" ).addClass( "middle");
        jQuery( ".menu_bar" ).removeClass( "bottom" );
    }

    // Position en bas
    else if( wintop >= topTrigger ) {

        jQuery( ".menu_bar" ).addClass( "fixed");
        jQuery( ".menu_bar" ).addClass( "bottom" );

    }
});

jQuery ( "input[type~='search']" ).attr ( "placeholder","Chercher" );

jQuery ( document ).ready ( function () {
    

});