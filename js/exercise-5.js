function oldFunction() {
  function inner() {
    alert("This is an original function.");
  }
  return inner;
}

let myFunction = oldFunction();
myFunction();