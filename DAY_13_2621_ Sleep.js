async function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}

// Example Usage:
let t = Date.now();
sleep(100).then(() => {
  console.log(Date.now() - t); // Approximately 100
});
