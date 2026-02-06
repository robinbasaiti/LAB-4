function createSquareHandler() {
  const inputEl = document.getElementById("numberInput");
  const outputEl = document.getElementById("output");

  function handleSquare() {
    const raw = inputEl.value;

    if (raw === "") {
      outputEl.innerHTML = `<h1>Please enter a number.</h1>`;
      return;
    }

    const n = Number(raw);
    const squared = n * n;

    outputEl.innerHTML = `<h1>Square of ${n} is ${squared}</h1>`;
  }

  return handleSquare; // closure
}

const squareHandler = createSquareHandler();
document.getElementById("squareBtn").addEventListener("click", squareHandler);
