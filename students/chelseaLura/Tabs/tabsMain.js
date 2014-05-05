function tabClick(e) {
    var clickedTabsContent = $(e.target).attr('href');
    $('.tabContent').removeClass('displayed');
    $(clickedTabsContent).addClass('displayed');
}

$(function() {
    $('a').on('click', tabClick);
});