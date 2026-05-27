const prices = [100, 200, 300, 400];

const totalPrice = prices.reduce((sum, num) => sum + num, 0);
const finalPrice = totalPrice * 1.1;
console.log(finalPrice);
