// Bai 1
// let sumEven = 0;
// for (let i = 1; i <= 200; i++) {
//   if (i % 2 == 0) {
//     sumEven += i;
//   }
// }
// console.log(sumEven);

// Bai 2 - In bang cuu chuong
// for (let i = 2; i <= 9; i++) {
//   console.log(`Bang cuu chuong ${i}`);
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

// Bai 3
let width;
let height;
while (true) {
  width = +prompt("Enter width:");
  height = +prompt("Enter height");

  if (!isNaN(width) && !isNaN(height) && width > height) {
    break;
  }

  alert("Invalid input! Ensure both are numbers and with > height");
}
alert(`Sum HCN ${width + height}`);
 