const ADMIN_USER = "admin";
const ADMIN_PASS = "admin";

const username = prompt("Enter username: ");
const userPassword = prompt("Enter password: ");

if (username !== ADMIN_USER || userPassword !== ADMIN_PASS) {
  alert("Invalid username or password!");
} else {
  alert("Login successfully!");
}
