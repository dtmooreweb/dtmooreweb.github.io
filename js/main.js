/* Main JS */

$(document).ready(function() {
    // Initialize navbar visibility
    if($(this).scrollTop() > 150) { 
        $('.navbar').addClass('solid');
    } else {
        $('.navbar').removeClass('solid');
    }
    // Transition effect for navbar 
    $(window).scroll(function() {
      if($(this).scrollTop() > 350) { 
          $('.navbar').addClass('solid');
      } else {
          $('.navbar').removeClass('solid');
      }
    });
    
    // Slide in elements with the proper class
    var win = $(window);
    var allMods = $(".slide-in");
    allMods.each(function(i, el) {
      var el = $(el);
      if (el.visible(true) || $(document).scrollTop() > 500) {
        el.addClass("already-visible"); 
      }
    });
    win.scroll(function(event) {
      allMods.each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
          el.addClass("come-in"); 
        } 
      });
    });
});

/**
* customd / jquery-visible 
* https://github.com/customd/jquery-visible
*/

(function($) {
  $.fn.visible = function(partial) {
    var $t            = $(this),
        $w            = $(window),
        viewTop       = $w.scrollTop(),
        viewBottom    = viewTop + $w.height(),
        _top          = $t.offset().top,
        _bottom       = _top + $t.height(),
        compareTop    = partial === true ? _bottom : _top,
        compareBottom = partial === true ? _top : _bottom;
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
  };
      
})(jQuery);