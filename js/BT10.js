const colors = ["red", "blue", "green", "yellow", "purple"];

const bgChangeBtn = document.querySelector("#bg-change-btn");
const div = document.createElement("div");

bgChangeBtn.addEventListener("click", (event) => {
  const random = Math.floor(Math.random() * colors.length);
  const color = colors[random];
  div.innerHTML = "";

  const body = document.querySelector("body");
  div.innerText = color;

  body.appendChild(div);
  body.style.backgroundColor = color;
});
