
$( document ).ready(function() {
	$('section.taboutput').html($('div#home').html());

	$('ul.tablist li a').on('click', function (e) {
	    clicked = (e.target).href.split('#');
	    clickedClass = 'div#' + clicked[1];
	    $('section.taboutput').hide();
	    $('section.taboutput').html($(clickedClass).html());
	    $('section.taboutput').fadeIn();
	});
});