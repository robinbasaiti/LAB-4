function enter() {
  const value = document.getElementById("numberInput").value;
  document.getElementById("output").innerHTML = `<h1>You entered: ${value}</h1>`;
}

document.getElementById("enterBtn").addEventListener("click", enter);