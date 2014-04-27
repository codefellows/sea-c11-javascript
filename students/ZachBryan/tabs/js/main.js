$('.tab').on('mouseover',function () {
  $('#holder > .tabs > li.active').removeClass('active');

  $(this).parent().addClass('active');

  $('#holder > .tab_container > div.active_tab').removeClass('active_tab');

  $(this.rel).addClass('active_tab');

 });