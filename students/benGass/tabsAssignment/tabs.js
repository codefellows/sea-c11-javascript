$( document ).ready( function(){
  tabListen();
});

var tabListen = function() {
  $('a').on('click', function(event) {
    event.preventDefault();
    //removes and adds selected tab class
    $(this).closest('ul').find('li').removeClass('selected');
    $(this).closest('li').addClass('selected');
    // locate content
    var loc = $(this).closest('li').find('p');
    // assign content
    var contnt = loc.text();
    // add content to display div
    $('#display').find('div').html(contnt);
  });
};



$.getJSON('http://rs.hankyates.com:3000/content', function(data){
  //location data will be pushed to
  navListLoc = $('nav').find('ul');
  //list of html formatted data to be pushed to DOM
  navList = [];
  //puts each key and value into proper place as html string and pushes to navlist
  $.each(data, function(key, value){
    navList.push('<li> <a href="#'+key+'">'+key+'</a>  <div class="noShow">'+value+'</div>  </li>');
  });
  // updates DOM at appropriate loc with html formatted data 
  navListLoc.html(navList);
  tabListen();
});




