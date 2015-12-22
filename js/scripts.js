jQuery( document ).ready( function() {
	// Toggle the about section
	var toggleAboutSection = function( event ) {
		event.preventDefault();
		if( jQuery('#about').is(':hidden') ) {
			jQuery('#about').slideDown();
		} else {
			jQuery('#about').slideUp();
		}
	}
	jQuery('.about-link').on('click', toggleAboutSection);

});