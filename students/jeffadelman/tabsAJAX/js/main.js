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
      //remove "loading" gif
      $('#loading').remove();
      //create tabs and hidden dom views
      $.each(data, function(key, value){ 
        $('#tabs').append('<li data-tab="#'+key+'"><a href="#'+key+'">'+key.toUpperCase()+'</a></li>');
        $('#output').append('<div data-tab="#'+key+'" class="hidden">'+value+'</div>'); 
      });
      //load home view
      $('div[data-tab="#home"]').addClass('showing');
      $('li[data-tab="#home"]').addClass('selected');
    }
  }); 
  //listen for #hash change and display new view
  window.onhashchange = change;
  function change(){
    var hash = window.location.hash;
    $('section div').removeClass('showing');
    $('div[data-tab="'+hash+'"').addClass('showing');
    $('li').removeClass('selected');
    $('li[data-tab="'+hash+'"]').addClass('selected');
  }; 
});

