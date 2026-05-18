let salary = parseInt(prompt("Enter salary"));
let age = parseInt(prompt("Enter age"));
let loanStatus = prompt("Enter loan status (Y/N)");

if (
  salary > 15 &&
  age >= 18 &&
  age <= 60 &&
  loanStatus.toLowerCase() === "no"
) {
  alert("Acceptable");
} else {
  alert("Unacceptable");
}
