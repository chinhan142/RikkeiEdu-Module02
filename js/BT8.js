for (let i = 1; i <= 50; i++) {
  let sumIndivisble = 0;
  if (i % 5 == 0) {
    continue;
  }
  console.log(i);
  sumIndivisble += i;
  if (sumIndivisble > 200) {
    break;
  }
}
