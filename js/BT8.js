console.log(message);
var message = "Hello";
console.log(
  `In this case, the output is undefined because var declarations are hoisted. The variable exists before its assignment, but its value is undefined.`,
);

console.log(
  `In this case, the output is an error because var has function scope. Variable x is declared inside the test() function, so it only exists within that function. Accessing it outside causes a ReferenceError`,
);
function test() {
  var x = 10;
}
console.log(x);
