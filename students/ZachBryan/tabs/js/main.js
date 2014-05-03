$('a').on('click',function () {
  $('li').removeClass('active');

  $(this).parent().addClass('active');

  $('section div').removeClass('show');

  $(this.rel).addClass('show');

 });
