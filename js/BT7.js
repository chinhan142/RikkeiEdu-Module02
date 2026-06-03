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

simulateTask(true)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
