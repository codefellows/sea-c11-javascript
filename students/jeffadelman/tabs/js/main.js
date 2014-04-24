$(document).ready(function(){
    $('.tabContent').hide();
    $('section').html($('#home').html());
    $('ul li:first-child').addClass('selected');
    $('a').on('click', function(e) {
       e.preventDefault();  
       var content = $($(this).attr('href')).html();
       $('li').removeClass('selected');
       $(this).parent().addClass('selected');
       $('section').html(content);
    });
});
