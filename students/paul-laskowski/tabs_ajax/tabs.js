var sourceData = 'http://rs.hankyates.com:3000/content'
$.getJSON(sourceData, function (data) {
    var tabs = [];
    var tabcontents = [];
    $.each(data, function (key, val) {
        tabs.push("<li> <a href='#" + key +"'>" + key.charAt(0).toUpperCase() + key.slice(1) + "</a></li>");
        tabcontents.push("<div id='" + key + "' class='tabcontent'>" + val + "</div>");
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
