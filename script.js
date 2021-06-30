'use strict';

$( document ).ready(function() {	

	$('form').submit(function( event ) {
		event.preventDefault();

		var limit = $('#limit').val();
		var writing = $('#writing').val();

		var writing_char_array = writing.split('');
		var out_char_array = [];

		for (var i = 0; i < writing_char_array.length; ++i) {
			var char = writing_char_array[i];
			if (limit.indexOf(char) <= -1 && out_char_array.indexOf(char) <= -1) {
				out_char_array.push(char);
			}
		}

		var result = '';
		if ( out_char_array.length ) {
			result = '<p>These characters from your writing are not allowed:</p>';
			result += '<p>';
			result += out_char_array.join('');
			result += '</p>';			
		} else {
			result = '<p>Congratulations! all of the characters from your writing are allowed.</p>';
		}

		$('#result').html(result);

		$('html, body').animate({
			scrollTop: $("#result").offset().top
		}, 1000);


	});


});
