$(document).ready(function(){
  $.ajax('http://rs.hankyates.com:3000/content', {
    beforeSend: function(){
      $('section').append('<img id="loading" src="img/ajax-loader.gif"/>');
    },
    timeout: 3000,
    error: function(){
      $('section').append('<h2>OOPS!</h2><br><br><h4>Something seems to have gone wrong.</h4>')
    },
    success: function(data){
      $('#loading').remove();
      $.each(data, function(key, value){ 
        $('#tabs').append('<li><a href="#'+key+'">'+key.toUpperCase()+'</a></li>');
        $('#output').append('<div class="'+key+' hidden">'+value+'</div>'); 
      });
      $('#output div:first-child').addClass('showing');
      $('ul li:first-child').addClass('selected');
      $('a').on('click', function(e) {
        e.preventDefault();  
        $('li').removeClass('selected');
        $(this).parent().addClass('selected');
        $('section div').removeClass('showing');
        var content = "."+$(this).text().toLowerCase();
        $(content).addClass('showing');
      });
    }
  });  
});

