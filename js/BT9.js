let inputNumber = parseInt(prompt("Input number"));
let flag = true;

for (let i = 2; i < Math.sqrt(inputNumber); i++) {
  if (inputNumber % i == 0) {
    flag = false;
    break;
  }
}

if (flag) {
  alert("Is Prime");
} else {
  alert("Not is Prime");
}
