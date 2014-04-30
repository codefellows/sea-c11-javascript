
$.getJSON('http://rs.hankyates.com:3000/v2/content', function (data) {
    var tabs = [];
    var tabcontents = [];
    $.each(data, function (key, val) {
        console.log(val.name);
        tabs.push("<li> <a href='#" + val.name +"'>" + val.name.charAt(0).toUpperCase() + val.name.slice(1) + "</a></li>");
        //tabs.push("<li> <a href='#" + key +"'>" + key.charAt(0).toUpperCase() + key.slice(1) + "</a></li>");
        tabcontents.push("<div id='" + val.name + "' class='tabcontent'>" + val.content + "</div>");
    });

    $('ul.tablist').html(tabs.join(""));
    $('div#tabcontentlist').html(tabcontents.join(""));

	$('section.taboutput').html($('div#home').html());

	$('ul.tablist li a').on('click', function (e) {
	    clicked = (e.target).href.split('#');
	    clickedClass = 'div#' + clicked[1];

	    $('section.taboutput').hide();
	    $('section.taboutput').html($(clickedClass).html());
	    $('section.taboutput').fadeIn();
	});
});
console.log('');