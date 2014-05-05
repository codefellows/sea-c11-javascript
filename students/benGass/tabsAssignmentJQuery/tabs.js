$('a').on('click', function(event) {
  event.preventDefault();
  //removes and adds selected tab class
  $(this).closest('ul').find('li').removeClass('selected');
  $(this).closest('li').addClass('selected');
  // locate content
  var loc = $(this).closest('li').find('div');
  // assign content
  var contnt = loc.text();
  // add content to display div
  $('#display').find('div').html(contnt);
});



