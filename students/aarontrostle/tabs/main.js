$(function() {
  $('a').on('click', function(e) {
    e.preventDefault();
    $('.content').removeClass('active');
    var target = $(this).attr('href');
    $(target).addClass('active');
  });
});
