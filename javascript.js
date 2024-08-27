let firstNumber = "";
let operator = "";

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
const display = document.querySelector(".display");
const number = document.querySelectorAll(".number");

number.forEach((item) =>
  item.addEventListener("click", () => {
    const customIndex = item.dataset.index;
    if (operator == "" && firstNumber.length < 30) {
      firstNumber = firstNumber + `${customIndex}`;
      display.textContent = firstNumber;
      console.log(firstNumber);
    }
  })
);
