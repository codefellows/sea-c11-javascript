$(document).ready(function() {
    $('.tab').mouseenter(function() {
        $(this).css("background-color","yellow");
        $(this).css("outline","#00FF00 solid 2px");
    });
    $('.tab').mouseleave(function() {
        $('.tab').css("background-color","green");
        $(this).css("outline","none");
    });
    $('#home2').on('click', function(e) {
        $('#home').css("display","block");
        $('#articles').css("display","none");
        $('#portfolio').css("display","none");
    });
    $('#articles2').on('click', function(e) {
        $('#articles').css("display","block");
        $('#home').css("display","none");
        $('#portfolio').css("display","none");
    });
    $('#portfolio2').on('click', function(e) {
        $('#portfolio').css("display","block");
        $('#home').css("display","none");
        $('#articles').css("display","none");
    });
});
