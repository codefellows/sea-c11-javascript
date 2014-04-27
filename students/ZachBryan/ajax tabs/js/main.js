$.getJSON('http://rs.hankyates.com:3000/content', function(data){
  $.each(data, function(key, value){
    
    $(".tab_link").append("<li><a href='#' rel="+ '#' + key +" >" + key + "</a></li>");
    $("li").first().addClass('active');
    
    $("section").append("<div class='contents hidden' id="+key+" >"+ value +"</div>");
    $("section div").first().addClass('show');

    $('a').on('mouseover',function () {
      $('li').removeClass('active');
      $(this).parent().addClass('active');

      $('section div').removeClass('show');
      $(this.rel).addClass('show');  
    });
    
  });
});
