let firstNumber = "";
let operator = "";
let secondNumber = "";
one = 0;
two = 0;
let result = null;

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

function operate() {
  if (operator == "+") {
    result = add(one, two);
    display.textContent = result;
    firstNumber = `${result}`;
    one = parseInt(firstNumber);
    secondNumber = "";
    operator = "";
    result = null;
  } else if (operator == "-") {
    result = subtract(one, two);
    display.textContent = result;
    firstNumber = `${result}`;
    one = parseInt(firstNumber);
    secondNumber = "";
    operator = "";
    result = null;
  } else if (operator == "*") {
    result = multiply(one, two);
    display.textContent = result;
    firstNumber = `${result}`;
    one = parseInt(firstNumber);
    secondNumber = "";
    operator = "";
    result = null;
  } else if (operator == "/") {
    result = divide(one, two);
    if (result == Infinity) {
      //when dividing by 0
      display.textContent = "ERROR";
      firstNumber = "";
      secondNumber = "";
      operator = "";
      result = null;
    } else {
      display.textContent = result;
      firstNumber = `${result}`;
      one = parseInt(firstNumber);
      secondNumber = "";
      operator = "";
      result = null;
    }
  }
}

const display = document.querySelector(".display");
const number = document.querySelectorAll(".number");
const signs = document.querySelectorAll(".operator");
const negate = document.querySelector(".negation");
const operation = document.querySelector(".operate");
const clear = document.querySelector(".clear");

number.forEach((item) =>
  item.addEventListener("click", () => {
    const numbersIndex = item.dataset.index;
    if (operator == "") {
      firstNumber = firstNumber + `${numbersIndex}`;
      one = parseInt(firstNumber);
      display.textContent = one;
    } else if (firstNumber !== "") {
      secondNumber = secondNumber + `${numbersIndex}`;
      two = parseInt(secondNumber);
      display.textContent = one + operator + two;
    }
  })
);

signs.forEach((sign) => {
  sign.addEventListener("click", () => {
    const signsIndex = sign.dataset.index;
    if (firstNumber !== "" && operator == "") {
      if (firstNumber == "-") {
        // so that we won't have 2 successive operators
      } else {
        operator = `${signsIndex}`;
        display.textContent = one + operator;
      }
    } else if (operator !== "" && secondNumber == "") {
      //no changes to avoid error
    }
  });
});

negate.addEventListener("click", () => {
  if (firstNumber == "") {
    firstNumber = "-";
    display.textContent = firstNumber;
  } else if (firstNumber !== "" && operator == "") {
    if (firstNumber == "-") {
    } else {
      operator = "-";
      display.textContent = one + operator;
    }
  } else if (operator !== "" && secondNumber == "") {
    secondNumber = "-";
    display.textContent = one + operator + secondNumber;
  }
});

operation.addEventListener("click", () => {
  if (firstNumber !== "" && secondNumber !== "" && operator !== "") {
    if (secondNumber == "-") {
      // = after "-" nothing will happen
    } else operate();
  } else if (firstNumber !== "" && secondNumber == "" && operator == "") {
    if (firstNumber == "-") {
      // = after "-" nothing as well
    } else display.textContent = one;
  } else if (secondNumber == "" && operator !== "") {
    // ex 5*=error
    display.textContent = "ERROR";
    firstNumber = "";
    secondNumber = "";
    operator = "";
    result = null;
  }
});

clear.addEventListener("click", () => {
  firstNumber = "";
  secondNumber = "";
  one = 0;
  two = 0;
  operator = "";
  result = null;
  display.textContent = 0;
});
