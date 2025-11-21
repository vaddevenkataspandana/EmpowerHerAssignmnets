let counter = 0;
const intervalId = setInterval(() => {
  console.log("Loading every 1 second");
  counter++;

  if (counter >= 5) {
    clearInterval(intervalId);
    console.log("Loaded successfully!");
  }
}, 1000);