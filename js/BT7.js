const form = document.querySelector("#form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = event.target.username.value;
  const email = event.target.email.value;

  console.log({
    Username: username,
    Email: email,
  });
});
