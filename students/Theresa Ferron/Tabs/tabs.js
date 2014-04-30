$('a').on('click', function(e) {
  $(e.target).toggleClass('red');
});

    
$( "li" ).hover(
 function() {
     var name = $(this).find('a').attr("href");
    $( this ).append( $( "<span>" + name.substring (1,5) + "</span>" ) );
  }, function() {
    $( this ).find( "span:last" ).remove();
  }
);

$('#tab-content div').hide();
$('#tab-content div:first').show();

$('#tabs li').click(function() {
    $('#tabs li a').removeClass("active");
    $(this).find('a').addClass("active");
    $('#tab-content div').hide();

    var indexer = $(this).index(); 
    $('#tab-content div:eq(' + indexer + ')').fadeIn(); 
});


