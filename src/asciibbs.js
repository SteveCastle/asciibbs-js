/*
 * asciiBbs
 * 
 *
 * Copyright (c) 2014 Stephen Castle
 * Licensed under the MIT license.
 */

 (function ($) {

var AsciiBbs = function(elem, options){
      this.elem = elem;
      this.$elem = $(elem);
       this.options = options;
    };

  AsciiBbs.prototype = {
    defaults: {
      message: "Changed",
      speed: 1000
    },
    init: function() {
      this.config = $.extend({}, this.defaults, this.options);
      this.$elem.text(this.config.message);
      return this;
    }
  };
  // Collection method.
  $.fn.asciiBbs = function (options) {
    return this.each(function () {
      // Create Instance of Plugin for each selected element.
      new AsciiBbs(this, options).init();
    });
  };


  // Static method.
  $.asciiBbs = function (options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.asciiBbs.options, options);
    // Return something asciiBbs.
    return 'asciiBbs' + options.punctuation;
  };

  // Static method default options.
  $.asciiBbs.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].asciiBbs = function (elem) {
    // Is this element asciiBbs?
    return $(elem).text().indexOf('asciiBbs') !== -1;
  };

}(jQuery));
