function calculateSquare() {
  const input = document.getElementById("input").value;
  const data = { number: input };
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  fetch("localhost:8082/square", options)
    .then(response => response.json())
    .then(data => {
      const square = data.square;
      document.getElementById("result").innerHTML = `The square of ${input} is ${square}.`;
    })
    .catch(error => console.error(error));
}

function calculateCube() {
  const input = document.getElementById("input").value;
  const data = { number: input };
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  fetch("localhost:8081/cube", options)
    .then(response => response.json())
    .then(data => {
      const cube = data.cube;
      document.getElementById("result").innerHTML = `The cube of ${input} is ${cube}.`;
    })
    .catch(error => console.error(error));
}

function calculateFibonacci() {
  const input = parseInt(document.getElementById("input").value);
  const data = { number: input };
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  fetch("localhost:8083/fibonacci", options)
    .then(response => response.json())
    .then(data => {
      const fibonacci = data.fibonacci.join(", ");
      document.getElementById("result").innerHTML = `The Fibonacci sequence up to ${input} is ${fibonacci}.`;
    })
    .catch(error => console.error(error));
}

document.getElementById("squareButton").addEventListener("click", calculateSquare);
document.getElementById("cubeButton").addEventListener("click", calculateCube);
document.getElementById("fibonacciButton").addEventListener("click", calculateFibonacci);
