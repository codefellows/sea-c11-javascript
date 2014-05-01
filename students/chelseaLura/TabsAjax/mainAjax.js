function tabClick(e) {
    var clickedTabsContent = $(e.target).attr('href');
    $('.tabContent').removeClass('displayed');
    $(clickedTabsContent).addClass('displayed');
}


$(function () {
    var tabButtons = $('.tabButtons');
    var contentContainer = $(".contentContainer");
    
    $.getJSON("http://rs.hankyates.com:3000/content", function (data) {
        $.each(data, function (tabName, tabContent) {
            var tabButton = $("<li/>").append(
                $("<a/>").attr({
                    'href': "#" + tabName,
                    class: "btn btn-default"
                })
                .text(tabName)
                .on('click', tabClick)
            );
            tabButtons.append(tabButton);
            
            var tabContent = $("<section/>").attr({
                id: tabName,
                class: 'tabContent'
            }).html(tabContent);
            contentContainer.append(tabContent);
        });
    })
});


