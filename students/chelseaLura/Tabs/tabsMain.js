function tabClick(e) {
    var clickedTabsContent = $(e.target).attr('href');
    console.log(clickedTabsContent);
     $('.tabContent').removeClass('displayed');
    $(clickedTabsContent).addClass('displayed');
}

$(function() {
    $('a').on('click', tabClick);
});