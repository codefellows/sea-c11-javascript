$(document).ready(function() {
$('.nav-tabs > li > a').click(function (event) {
    event.preventDefault();

    var active_tab_selector = $('.nav-tabs > li.active > a').attr('href');

    var actived_nav = $('.nav-tabs > li.active');
    actived_nav.removeClass('active');

    $(this).parents('li').addClass('active');

    $(active_tab_selector).removeClass('active');
    $(active_tab_selector).addClass('hide');

    var target_tab_selector = $(this).attr('href');
    $(target_tab_selector).removeClass('hide');
    $(target_tab_selector).addClass('active');

});
});