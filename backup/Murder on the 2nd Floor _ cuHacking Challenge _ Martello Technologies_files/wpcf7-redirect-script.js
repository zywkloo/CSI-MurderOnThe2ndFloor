jQuery(document).ready(function() {
    wpcf7_redirect_mailsent_handler();
});

function wpcf7_redirect_mailsent_handler() {
	document.addEventListener( 'wpcf7mailsent', function( event ) {
		form = wpcf7_redirect_forms [ event.detail.contactFormId ];
		
		// Script to run after sent.
		if ( form.after_sent_script ) {
			form.after_sent_script = htmlspecialchars_decode(form.after_sent_script);
			eval( form.after_sent_script );
		}

		// Redirect to external URL.
		if ( form.use_external_url && form.external_url ) {
			if ( form.http_build_query ) {
				// Build http query
				http_query = jQuery.param( event.detail.inputs, true );
				form.external_url = form.external_url + '?' + http_query;
			}

			if ( ! form.open_in_new_tab ) {
				// Open in current tab
				location.href = form.external_url;
			} else {
				// Open in external tab
				window.open( form.external_url );
			}
		}
		
		// Redirect to a page in this site.
		else if ( form.thankyou_page_url ) {
			if ( form.http_build_query ) {
				// Build http query
				http_query = jQuery.param( event.detail.inputs, true );
				form.thankyou_page_url = form.thankyou_page_url + '?' + http_query;
			}

			if ( ! form.open_in_new_tab ) {
				// Open in current tab
	    		location.href = form.thankyou_page_url;
	    	} else {
	    		// Open in new tab
	    		window.open( form.thankyou_page_url );
	    	}
		}

	}, false );
}

function htmlspecialchars_decode( string ) {
	var map = {
        '&amp;': '&',
        '&#038;': "&",
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&#039;': "'",
        '&#8217;': "’",
        '&#8216;': "‘",
        '&#8211;': "–",
        '&#8212;': "—",
        '&#8230;': "…",
        '&#8221;': '”'
    };

    return string.replace(/\&[\w\d\#]{2,5}\;/g, function(m) { return map[m]; });
}
