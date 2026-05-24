const parentDiv = document.querySelector("#parent-div");
const childBtn = document.querySelector("#child-btn");

parentDiv.addEventListener("click", (event) => {
  console.log(`Parent is running!`);
});

childBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log(`Child is running`);
});
