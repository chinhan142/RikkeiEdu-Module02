let isValid = true;
const numA = Number(prompt("Enter number A: "));
if (isNaN(numA)) {
  alert("Number A is invalid");
  isValid = false;
} else {
  const numB = Number(prompt("Enter number B: "));
  if (isNaN(numB)) {
    alert("Number B is invalid");
    isValid = false;
  } else {
    if (isValid) {
      const operator = prompt("Enter operator: ");

      switch (operator) {
        case "+":
          alert(`Kết quả của ${numA} ${operator} ${numB} là: ${numA + numB}`);
          break;
        case "-":
          alert(`Kết quả của ${numA} ${operator} ${numB} là: ${numA - numB}`);
          break;
        case "*":
          alert(`Kết quả của ${numA} ${operator} ${numB} là: ${numA * numB}`);
          break;
        case "/":
          alert(`Kết quả của ${numA} ${operator} ${numB} là: ${numA / numB}`);
          break;
        default:
          alert("Undefined operator");
          break;
      }
    }
  }
}
