let number1 = "";
let number2 = "";
let operator = "";
let isSecondNumber = false;

function getAnswer(value) {
  if (value === "+" || value === "-" || value === "*" || value === "/") {
    operator = value;
    isSecondNumber = true;
    document.getElementById("result").value = operator;
  } else {
    if (!isSecondNumber) {
      number1 += value;
      document.getElementById("result").value = number1;
    } else {
      number2 += value;
      document.getElementById("result").value = number2;
    }
  }
}

function clearAll() {
  number1 = "";
  number2 = "";
  operator = "";
  isSecondNumber = false;
  document.getElementById("result").value = "";
}

function calculateResult() {
  let num1 = parseFloat(number1);
  let num2 = parseFloat(number2);
  let result = 0;

  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    if (num2 === 0) {
      document.getElementById("result").value = "Error";
      return;
    }
    result = num1 / num2;
  } else {
    document.getElementById("result").value = "Error";
    return;
  }

  document.getElementById("result").value = result;

  // Reset for next calculation
  number1 = result.toString();
  number2 = "";
  operator = "";
  isSecondNumber = false;
}
