$(document).ready(function () {
    $('.tabout').html($('div.home').html());
    $('.tab').hide();
    $('a').on('click', function (e) {
        // get name of clicked item
        var clsname = $(this).attr('href').split('#').pop();
        console.log(clsname);
        // find div equal to clicked item
        $('section.tabout').hide();
        $('section.tabout').html($('div.' + clsname).html());
        $('section.tabout').show();
    });
});