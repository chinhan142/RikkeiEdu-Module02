import * as apiService from "./apiService.js";

renderUserInfo();

async function getUsersInfo() {
  try {
    const data = await apiService.fetchUsers();

    // destrucutring inside the map and return those fields that destrcutured
    const userInfos = data.map(({ name, email, website }) => {
      return {
        name,
        email,
        website,
      };
    });
    return userInfos;
  } catch (error) {
    console.log(error);
  }
}

async function renderUserInfo() {
  try {
    const userInfos = await getUsersInfo();
    const userContainer = document.getElementById("user-container");

    userContainer.innerHTML = userInfos
      .map((user) => {
        return `
      <div class="card mb-3" style="width: 18rem">
      <div class="card-header">User Information</div>
      <ul class="list-group list-group-flush" id="user-container">
        <li class="list-group-item">Name: ${user.name}</li>
        <li class="list-group-item">${user.email}</li>
        <li class="list-group-item">${user.website}</li>
      </ul>
    </div>
      `;
      })
      .join("");
  } catch (error) {
    console.log(error);
  }
}
