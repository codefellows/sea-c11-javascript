$(document).ready(function() {
    $('a').on('click', function(e) {
      $(e.target).toggleClass('red');
    });
    $('.tab').mouseenter(function() {
        $(this).css("background-color","yellow");
    });
    $('.tab').mouseleave(function() {
        $('.tab').css("background-color","green");
    });
    $('a').on('click', function(e) {
        $('.tabs2').toggle();
    });
});
