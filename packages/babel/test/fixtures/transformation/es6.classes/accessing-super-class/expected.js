"use strict";

var Test = (function(_Foo) {
  babelHelpers.inherits(Test, _Foo);

  function Test() {
    var _babelHelpers$get, _babelHelpers$get2;

    babelHelpers.classCallCheck(this, Test);

    woops["super"].test();
    babelHelpers.get(Object.getPrototypeOf(Test.prototype), "constructor", this).call(
      this
    );
    babelHelpers.get(Object.getPrototypeOf(Test.prototype), "test", this).call(
      this
    );

    babelHelpers.get(Object.getPrototypeOf(Test.prototype), "constructor", this).apply(
      this,
      arguments
    );
    (_babelHelpers$get = babelHelpers.get(
      Object.getPrototypeOf(Test.prototype),
      "constructor",
      this
    )).call.apply(
      _babelHelpers$get,
      [this, "test"].concat(babelHelpers.slice.call(arguments))
    );

    babelHelpers.get(Object.getPrototypeOf(Test.prototype), "test", this).apply(
      this,
      arguments
    );
    (_babelHelpers$get2 = babelHelpers.get(
      Object.getPrototypeOf(Test.prototype),
      "test",
      this
    )).call.apply(
      _babelHelpers$get2,
      [this, "test"].concat(babelHelpers.slice.call(arguments))
    );
  }

  babelHelpers.createClass(Test, [{
    key: "test",
    value: function test() {
      var _babelHelpers$get3;

      babelHelpers.get(Object.getPrototypeOf(Test.prototype), "test", this).call(this);
      babelHelpers.get(Object.getPrototypeOf(Test.prototype), "test", this).apply(this, arguments);
      (_babelHelpers$get3 = babelHelpers.get(Object.getPrototypeOf(Test.prototype), "test", this)).call.apply(_babelHelpers$get3, [this, "test"].concat(babelHelpers.slice.call(arguments)));
    }
  }], [{
    key: "foo",
    value: function foo() {
      var _babelHelpers$get4;

      babelHelpers.get(Object.getPrototypeOf(Test), "foo", this).call(this);
      babelHelpers.get(Object.getPrototypeOf(Test), "foo", this).apply(this, arguments);
      (_babelHelpers$get4 = babelHelpers.get(Object.getPrototypeOf(Test), "foo", this)).call.apply(_babelHelpers$get4, [this, "test"].concat(babelHelpers.slice.call(arguments)));
    }
  }]);
  return Test;
})(Foo);