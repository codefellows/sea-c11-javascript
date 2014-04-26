$(function () {
	// Add click listeners for click events
	var addListeners = function () {
		$('a').click(function (event) {
			event.preventDefault();
			var currentId = $(this).parent().attr('id');
			$('.content').addClass('hidden');
			$('.' + currentId).removeClass('hidden');
			$('nav ul li a').removeClass('current').addClass('hollow');
			$(this).addClass('current').removeClass('hollow');
		});
	};

	$(function () {
		addListeners();
	});

	// Pull tabs & tab content via Ajax
	$.getJSON('http://rs.hankyates.com:3000/content', function (tabsData) {
		$.each(tabsData, function (tabName, tabContent) {
			$('nav ul').append('<li id="' + tabName + '"> <a href="#" class="hollow">' + tabName + '</a></li>');
			$('content').append('<div class="content ' + tabName + ' hidden">' + tabContent + '</div>')
		});
		addListeners();
		$('nav ul li a').first().addClass('current').removeClass('hollow');
		$('.content').first().removeClass('hidden');
	});
});