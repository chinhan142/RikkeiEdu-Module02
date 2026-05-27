const numbers = [1, 2, 3, 4, 5];

const checkNumber = (searchValue) => {
  const index = numbers.indexOf(searchValue);

  index !== -1 ? console.log(index) : console.log("Not found");
};

checkNumber(+prompt("Enter number:"));