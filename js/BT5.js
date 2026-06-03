const sumAllNumbers = (...numbers) => {
  return numbers.reduce((acc, curr) => acc + curr, 0);
};

console.log(sumAllNumbers(2, 3, 4, 5));
