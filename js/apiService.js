export async function fetchUsers() {
  try {
    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await result.json();
    return data; // every functions need return
  } catch (error) {
    console.log(error);
  }
}
