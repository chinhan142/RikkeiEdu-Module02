function simulateTask(isSuccess) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isSuccess) {
        resolve("Task Completed!");
      } else {
        reject("Task Not Completed!");
      }
    }, 2000);
  });
}

async function runTask() {
  try {
    const taskStatus = await simulateTask(false);
    console.log(taskStatus);
  } catch (error) {
    console.log(error);
  }
}

runTask()
