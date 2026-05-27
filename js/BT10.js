const tasks = ["Learning JWT", "Learning C#"];

const addTask = (title) => {
  tasks.push(title);
};

const removeTask = (index) => {
  if (tasks.length == 0) {
    alert("There's no tasks to delete!");
  } else {
    tasks.splice(index, 1);
  }
};

const displayTask = () => {
  tasks.forEach((task) => {
    console.log(task);
  });
};

addTask("Coding session 1");
addTask("Learning Python");

removeTask(2);

displayTask();
