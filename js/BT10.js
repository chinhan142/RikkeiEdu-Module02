let randomNumber = Math.floor(Math.random() * 10) + 1;
let inputNumber;
let flag = false;

for (let i = 1; i <= 5; i++) {
  inputNumber = parseInt(prompt("Enter number"));
  if (inputNumber > randomNumber) {
    alert("Your number is too high");
    continue;
  } else if (inputNumber < randomNumber) {
    alert("Your number is too small");
  } else {
    alert("Congratulation!");
    flag = true;
    break;
  }
}

if (!flag) {
  alert("Game over!");
  console.log(randomNumber);
}
