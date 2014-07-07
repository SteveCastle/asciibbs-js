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
      text: "This is the text to be printed.",
      speed: 1000
    },
    position: 0,
    init: function() {
      this.config = $.extend({}, this.defaults, this.options);
      setInterval(this.counter.bind(this),this.config.speed);
      return this;
    },
    counter: function(){
      if (this.config.text.length > this.position){
      this.$elem.text(this.config.text[this.config.text.length - (this.position+1)]+ this.$elem.text());  
      this.position = this.position + 1;
      }else{
        this.position = 0;
      }


      console.log(this.position);
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
