$(document).ready(function(){

	$('#popup').hide();

//cursor hovers in second-left div
	$('#second-left').mouseenter(function(){
		$(this).css('background-color', '#e9e6ff');

//cursor hovers out of second-left div
	$('#second-left').mouseleave(function(){
		$(this).css('background-color', '#13262f');
	});


	});
});
