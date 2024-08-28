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
const signs = document.querySelectorAll(".operator");
const negate = document.querySelector(".negation");

number.forEach((item) =>
  item.addEventListener("click", () => {
    const numbersIndex = item.dataset.index;
    if (operator == "" && firstNumber.length < 30) {
      firstNumber = firstNumber + `${numbersIndex}`;
      display.textContent = firstNumber;
      console.log(firstNumber);
    }
  })
);
signs.forEach((sign) => {
  sign.addEventListener("click", () => {
    const signsIndex = sign.dataset.index;
    if ((firstNumber = !"")) operator = `${signsIndex}`;
    console.log(operator);
  });
});

negate.addEventListener("click", () => {
  if (firstNumber == "") {
    firstNumber = "-";
    display.textContent = firstNumber;
  } else if ((firstNumber = !"")) {
    operator = "-";
    console.log(operator);
  }
});
