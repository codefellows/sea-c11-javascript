
$( document ).ready(function() {
	$('div.tabcontent').hide();
	$('section.taboutput').html($('div#home').html());
	console.log('hellooooo');

	$('a').on('click', function (e) {
	    clicked = (e.target).href.split('#');
	    clickedClass = 'div#' + clicked[1];
		console.log(clickedClass);
	    $('section.taboutput').hide();
	    $('section.taboutput').html($(clickedClass).html());
	    $('section.taboutput').fadeIn();
	});
});