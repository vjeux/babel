"use strict";

var Test = (function() {
  function Test() {
    babelHelpers.classCallCheck(this, Test);
  }

  babelHelpers.createClass(Test, [{
    key: "bar",
    get: function get() {
      throw new Error("wow");
    }
  }]);
  return Test;
})();

var test = new Test();
test.bar;