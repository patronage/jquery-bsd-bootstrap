(function($) {
  var version = '0.1';
  var optionOverrides = {};
  var defaults = {
    // modules we want enabled
    // by default everything, but limit as needed
    enable: ['signup', 'contribution', 'unsubscribe', 'events', 'share', 'login'],

    // classes that are added to all primary submit buttons
    btnClasses: 'btn btn-primary',

    // classes to add to all inputs
    formClasses: 'form-control',
  };

  $.fn.bsdBootstrap = function(options) {
    options = options || {};
    var opts = $.extend({}, $.fn.bsdBootstrap.defaults, options);

    this.each(function() {
      var $el = $(this);
      return($el).html('<p>foo</p>');
    }

  };

  // version
  $.fn.bsdBootstrap.version = version;

  // default options
  $.fn.bsdBootstrap.defaults = defaults;

})(jQuery);
