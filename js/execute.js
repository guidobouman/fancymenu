jQuery(function() {

  var $body = $('body');

  $('.menu-button, .overlay').on('click', function() {

    if($body.hasClass('show-menu')) {
      $body.removeClass('show-menu');
    }
    else {
      $body.addClass('show-menu');
    }

  });

})