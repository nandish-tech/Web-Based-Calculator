function calculate(operation) {
  // Get the values entered by the user
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  let result;

  // Check if the numbers are valid
  if (isNaN(num1) || isNaN(num2)) {
    result = "Please enter both numbers!";
  } else {
    // Perform calculation based on the operation
    switch (operation) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num2 !== 0 ? (num1 / num2).toFixed(2) : "Can't divide by zero!";
        break;
    }
  }

  // Show result
  document.getElementById("result").innerText = "Result: " + result;
}
