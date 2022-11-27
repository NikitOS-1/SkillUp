function foo(a, b, c) {
  if (c === true) {
    if (a > b) {
      return a;
    } else {
      return b;
    }
  } else {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }
}
