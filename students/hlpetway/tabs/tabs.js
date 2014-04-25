$(document).ready(function () {
/*$.getJSON('http://rs.hankyates.com:3000/content', function(data){
    content = data.content;


    $.each(data, function(key, value){
      console.log('key ', key);           //key will be tab, use .append to create a new li
      
    console.log('value ', value);       //value will be content, .append to create a new div
        
    //this content as of now is copied in and has been linked up to the tabs below. We need a each loop to do this based on how many data tabs it imports using the getJSON function above.
  */
    var content = {
        "home": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>",
            "articles": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>",
            "portfolio": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>"
    };

    var home = content.home;
    $('#home-content').html(home);

    var articles = content.articles;
    $('#articles-content').html(articles);

    var portfolio = content.portfolio;
    $('#portfolio-content').html(portfolio);

    $('a').click(function (event) {
        event.preventDefault();
        $('.tab-content').removeClass('active');
        var target = $(this).attr('href');
        $(target).addClass('active');

        $('.nav').removeClass('active-tab');
        var targetNav = $(this);
        $(targetNav).addClass('active-tab');
    });
});