$(function() {
  $('a').on('click', function(e) {
    e.preventDefault();
    $('li.active').removeClass('active');
    $(this).parent().addClass('active');
    $('.panel').addClass('hidden');
    var target = $(this).attr('href');
    $(target).removeClass('hidden');
  });
});
