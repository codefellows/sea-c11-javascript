$(document).ready(function () {
    $.getJSON('http://rs.hankyates.com:3000/content', function (data) {
        $.each(data, function (key, value) {
            $('#tabs ul').append('<li><a href="#' + key + '">' + key + '</a></li>');
            $('#content').append('<div id="' + key + '" class="contentHide">' + value + '</div>');
        });

        $('#content div').eq(0).addClass('activeContent');
        $('li').eq(0).addClass('active');

        $('a').click(function (event) {
            event.preventDefault();
            $('li').removeClass('active');
            $(this).parent().addClass('active');

            $('#content div').removeClass('activeContent');
            var targetContent = $(this).attr('href');
            $(targetContent).addClass('activeContent');
        });
    });
});