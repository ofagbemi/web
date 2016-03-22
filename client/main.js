var $ = require('jquery');
var _ = require('underscore');

var $window = $(window);
var $nav = $('#nav');

function handleScrollNav(e) {
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
}

var $scrollables = $('[data-scroll-to]');
function handleScrollable(e) {
  var scrollPosition = $window.scrollTop();
  var windowHeight = window.innerHeight;
  $scrollables.each(function() {
    var $this = $(this);
    var midpoint = ($this.position().top + $this.height()/2);
    if  (midpoint < scrollPosition + windowHeight) {
      $this.addClass('scroll');
    }
  });
}

$window.on('scroll', _.throttle(handleScrollable, 100));
$window.on('scroll', _.throttle(handleScrollNav, 100));
