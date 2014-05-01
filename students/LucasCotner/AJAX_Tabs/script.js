$.getJSON('http://rs.hankyates.com:3000/v2/content', function (data) {
    var nav = [];
    var navContent = [];
    $.each(data, function (key, val) {
        nav.push("<li> <a href='#" + val.name +"'>" + val.name.toUpperCase() + val.name.slice(val.name.length) + "</a></li>");
        navContent.push("<div id='" + val.name + "' class='tabcontent'>" + val.content + "</div>");
    });
    $('ul.tabs').html(nav.join(""));
    $('div#content').html(navContent.join(""));
	$('section.output').html($('div#home').html());
	$('ul.tabs li').on('click', function (e) {
	    current = (e.target).href.split('#');
	    currentClass = 'div#' + current[1];
	    $('section.output').hide();
	    $('section.output').html($(currentClass).html());
	    $('section.output').show();
	});
});