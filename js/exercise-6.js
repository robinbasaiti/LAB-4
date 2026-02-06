function square(num) {
  function squareIt(x) {
    return x * x;
  }
  return squareIt;
}

let squareIt = square(5);
alert("The square of 5 = " + squareIt(5));