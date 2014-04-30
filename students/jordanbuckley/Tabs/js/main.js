$(function() {
	$('a').click(function () {
	    var currentId = $(this).parent().attr("id");
	    $('.content').addClass('hidden');
	    $('.' + currentId).removeClass('hidden');
	    $('nav ul li a').removeClass('current').addClass('hollow');
	    $(this).addClass('current').removeClass('hollow');
	});
});