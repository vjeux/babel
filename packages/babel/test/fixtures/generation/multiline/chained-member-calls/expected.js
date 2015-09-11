a.b().c().d();

babelHelpers
  .get(Object.getPrototypeOf(Foo.prototype), "constructor", this)
  .apply(this, arguments);

console.log(
  (_foo$bar = foo[bar], babelHelpers.defaults(_foo$bar, bar), _foo$bar)
);

console.log(
  (_foo$bar2 = foo[bar()], babelHelpers.defaults(_foo$bar2, bar), _foo$bar2)
);

a
  .b(veryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryLong)
  .c(veryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryLong)
  .d(veryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryLong)
  .e(veryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryLong)
  .f(veryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryLong)
  .g(veryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryLong);
