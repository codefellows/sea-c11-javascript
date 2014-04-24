$(document).ready(function () {
    $('a').click(function (event) {
        event.preventDefault();

        $(function () {
            $('a').on('click', function (e) {
                e.preventDefault();
                $('.tab-content').removeClass('active');
                var target = $(this).attr('href');
                $(target).addClass('active');
                
                $('.nav').removeClass('active');
                var targetNav = $(this).attr('href');
                $(targetNav).addClass('active');
            });
        });
            
    });