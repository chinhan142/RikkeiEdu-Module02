let inputNumber;
do {
  inputNumber = prompt("Enter number in range 1 to 10");
} while (isNaN(inputNumber) == true || inputNumber <= 0 || inputNumber >= 11);
alert(`Your number is ${inputNumber}`);
