const input = document.querySelector("#user-input");
const container = document.querySelector("#container");

input.addEventListener("keydown", function (event) {
  const p = document.createElement("p");
  p.innerText = `You input: ${event.key}`;
  container.appendChild(p);
});
