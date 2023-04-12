(function () {
  let num1 = 0;
  let num2 = null;
  let operator = null;
  let displayValue = "";

  const operators = {
    "+": add,
    "-": subtract,
    "*": multiply,
    "/": divide,
  };

  function add(num1, num2) {
    return num1 + num2;
  }

  function subtract(num1, num2) {
    return num1 - num2;
  }

  function multiply(num1, num2) {
    return num1 * num2;
  }

  function divide(num1, num2) {
    if (num2 === 0) {
      return "Undefined";
    }
    return num1 / num2;
  }

  function functionOperate(operator, num1, num2) {
    return operators[operator](num1, num2);
  }

  function updateDisplayValue(number) {
    displayValue += number;
  }

  function clearDisplay() {
    num1 = 0;
    num2 = null;
    operator = null;
    displayValue = "";
  }

  function backspace() {
    displayValue = displayValue.substring(0, displayValue.length - 1);
  }

  function handleNumberClick(number) {
    displayValue += number;
    document.getElementById("display").innerHTML = displayValue;
  }

  function handleOperatorClick(selectedOperator) {
    if (num2 !== null) {
      const result = functionOperate(operator, num1, num2);
      num1 = result;
      num2 = null;
      operator = null;
      displayValue = result.toString();
      document.getElementById("display").innerHTML = displayValue;
    }
    operator = selectedOperator;
    num1 = parseInt(displayValue);
    displayValue = "";
  }

  function handleEqualsClick() {
    if (num2 != null && operator != null) {
      num2 = parseInt(displayValue);
      const result = functionOperate(operator, num1, num2);
      num1 = result;
      num2 = null;
      operator = null;
      displayValue = result.toString();
      document.getElementById("display").innerHTML = displayValue;
    }
  }

  document.getElementById("clear").addEventListener("click", () => {
    clearDisplay();
    document.getElementById("display").innerHTML = "0";
  });

  document.getElementById("backspace").addEventListener("click", () => {
    backspace();
    document.getElementById("display").innerHTML = displayValue;
  });

  document.getElementById("equals").addEventListener("click", () => {
    handleEqualsClick();
  });

  document.querySelectorAll(".number").forEach((button) => {
    button.addEventListener("click", () => {
      handleNumberClick(button.value);
    });
  });

  document.querySelectorAll(".operator").forEach((button) => {
    button.addEventListener("click", () => {
      handleOperatorClick(button.value);
    });
  });
})();
