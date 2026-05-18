let w = parseInt(prompt("Enter width:"));
let h = parseInt(prompt("Enter height:"));

for (let i = 0; i < h; i++) {
  let row = "";
  for (let j = 0; j < w; j++) {
    row += "* ";
  }
  console.log(row);
}
