function outer(x) {
  function inner(y) {
    return x + " " + y;
  }

  return inner;
}

var f1 = outer(5);
console.log(f1()); // outputs 5 7

