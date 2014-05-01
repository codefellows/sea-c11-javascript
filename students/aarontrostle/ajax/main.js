$(function() {
  var spinner;
  var opts = {
    lines: 5,
    length: 0,
    width: 8,
    radius: 6,
    corners: 0.5,
    rotate: 53,
    direction: 1,
    color: '#000',
    speed: 1.5,
    trail: 36,
    shadow: false,
    hwaccel: false,
    className: 'spinner',
    zIndex: 2e9,
    top: '60%',
    left: '90px'
  };

  function makeAndShowSpinner(target) {
    spinner = new Spinner(opts).spin(document.getElementById(target));
  }

  function makeTabs(tabClass) {
    $(tabClass).on('click', function(e) {
      e.preventDefault();
      $('li.active').removeClass('active');
      $(this).parent().addClass('active');
      $('.tab-pane').removeClass('active');
      var target = $(this).attr('href');
      $(target).addClass('active');
    });
    $(tabClass).first().click();
  }

  $.ajax({
    url: 'http://rs.hankyates.com:3000/content',
    beforeSend: function() {
      makeAndShowSpinner('header');
    },
    success: function(content) {
      var menu = $('#menu');
      var target = $('#content')
      $.each(content, function(i, v) {
        menu.append('<li><a href="#' + i + '">' + i + '</a></li>');
        target.append('<div class="tab-pane" id="' + i + '">' + v + '</div>');
      });
      makeTabs('a');
    },
    error: function() {
      $('#content')
        .append('<div style="text-align:center;">Whoops! Something went wrong.</div>')
    },
    complete: function() {
      spinner.stop();
    }
  });

});
