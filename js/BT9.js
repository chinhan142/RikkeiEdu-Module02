async function getUsers() {
  try {
    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    const datas = await result.json();

    const userNames = datas.map((data) => data.name);
    console.log(userNames);
  } catch (error) {
    console.log(error);
  }
}

getUsers();
