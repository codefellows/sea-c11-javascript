$(document).ready(function(){
  $.getJSON('http://rs.hankyates.com:3000/content', function(data){
    $.each(data, function(key, value){ 
      $('#tabs').append('<li><a href="#'+key+'">'+key.toUpperCase()+'</a></li>');
      $('#output').append('<div id="'+key+'" class="tabContent hidden">'+value+'</div>'); 
    });
    $('#output div:first-child').addClass('showing');
    $('ul li:first-child').addClass('selected');
    $('a').on('click', function(e) {
      e.preventDefault();  
      $('li').removeClass('selected');
      $(this).parent().addClass('selected');
      $('section div').removeClass('showing');
      var content = $(this).attr('href');
      $(content).addClass('showing');
    });
  });  
});

