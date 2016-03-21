var $ = require('jquery');
var _ = require('underscore');

var $window = $(window);
var $nav = $('#nav');
var $sections = $('#container > section');

function handleScroll(e) {
  var position = $window.scrollTop();

  if (position > $nav.height()) {
    $nav.addClass('hidden');
    setTimeout(function() {
      $nav.addClass('secondary');
      setTimeout(function() {
        $nav.removeClass('hidden');
      });
    });
  } else if (position === 0) {
    $nav.removeClass('secondary');
  }

  $sections.each(function() {
    var $this = $(this);
    if ($this.position().top < position + $this.height()/2) {
      $this.addClass('scroll');
    }
  });
}

$window.on('scroll', _.throttle(handleScroll, 100));
