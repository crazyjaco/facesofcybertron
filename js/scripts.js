jQuery( document ).ready( function() {
	// Expand the about section
	var expandAboutSection = function( event ) {
		event.preventDefault();
		if( jQuery('#about').is(':hidden') ) {
			jQuery('#about').slideDown();
		}
	}
	jQuery('.expand-about').on('click', expandAboutSection);

	// Collapse the about the section
	var collapseAboutSection = function( event ) {
		event.preventDefault();
		jQuery('#about').slideUp();
	}

	jQuery('.collapse-about').on('click', collapseAboutSection)
});