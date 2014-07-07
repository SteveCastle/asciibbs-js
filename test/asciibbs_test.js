(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  module('jQuery#asciiBbs', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture').children();
    }
  });

  test('is chainable', function() {
    expect(1);
    // Not a bad test to run on collection methods.
    strictEqual(this.elems.asciiBbs(), this.elems, 'should be chainable');
  });

  test('is asciiBbs', function() {
    expect(1);
    strictEqual(this.elems.asciiBbs().text(), 'ChangedChangedChanged', 'should be asciiBbs');
  });

  module('jQuery.asciiBbs');

  test('is asciiBbs', function() {
    expect(2);
    strictEqual($.asciiBbs(), 'asciiBbs.', 'should be asciiBbs');
    strictEqual($.asciiBbs({punctuation: '!'}), 'asciiBbs!', 'should be thoroughly asciiBbs');
  });

  module(':asciiBbs selector', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture').children();
    }
  });

  test('is asciiBbs', function() {
    expect(1);
    // Use deepEqual & .get() when comparing jQuery objects.
    deepEqual(this.elems.filter(':asciiBbs').get(), this.elems.last().get(), 'knows awesome when it sees it');
  });

}(jQuery));
