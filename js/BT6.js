const addBtn = document.querySelector("#add-button");
const removeLastBtn = document.querySelector("#remove-last-button");

const ul = document.querySelector("#item-list");

addBtn.addEventListener("click", (event) => {
  const li = document.createElement("li");
  li.innerText = "New Item";
  ul.appendChild(li);
});

removeLastBtn.addEventListener("click", (event) => {
  const liList = document.querySelectorAll("li");
  if (liList.length > 0) {
    liList[liList.length - 1].remove();
  }
});
