//Karl Gentner - CF F2 Javascript - Tabs Assignment 4/23/14

$(function tabs() {
	//Default State
	$(".tabContent").hide(); //hide content of all divs with class=tabContent
	$(".tabContent#home").show(); //show content of div with id=home

	// On Click
	$("li").click(function() {
    	//console.log($(this)[0].outerHTML); // to check what "this" is
    	$("li").removeClass("selected"); //remove "selected" class from all list items
    	$(this).addClass("selected");  //add "selected" class to selected list item
    	$(".tabContent").hide(); //hide content of all divs with class=tabContent
    	var selectedTab = $("a",this).attr("href"); // return href of selected item
    	$(selectedTab).show(); // show content of selected item
	});
});