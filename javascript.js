let firstNumber = "";
let operator = "";
let secondNumber = "";
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
    if (operator == "") {
      firstNumber = firstNumber + `${numbersIndex}`;
      firstInt = parseInt(firstNumber);
      display.textContent = firstInt;
    } else if (firstNumber !== "") {
      secondNumber = secondNumber + `${numbersIndex}`;
      secondInt = parseInt(secondNumber);
      display.textContent = firstInt + operator + secondInt;
    }
  })
);
signs.forEach((sign) => {
  sign.addEventListener("click", () => {
    const signsIndex = sign.dataset.index;
    if (firstNumber !== "" && operator == "") {
      operator = `${signsIndex}`;
      display.textContent = firstInt + operator;
    } else if (operator !== "" && secondNumber == "") {
      display.textContent = firstInt + operator;
    }
  });
});

negate.addEventListener("click", () => {
  if (firstNumber == "") {
    firstNumber = "-";
    display.textContent = firstNumber;
  } else if (firstNumber !== "" && operator == "") {
    operator = "-";
    console.log(operator);
    display.textContent = firstInt + operator;
  } else if (operator !== "") {
    secondNumber = "-";
    display.textContent = firstInt + operator + secondNumber;
  }
});
