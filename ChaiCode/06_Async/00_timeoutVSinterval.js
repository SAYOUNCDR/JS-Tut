//** setTimeout: Executes a function once after a specified delay
// Syntax:  setTimeout(callbackFunction, delayInMilliseconds);

// Runs the function only once after 2 seconds
setTimeout(function () {
  console.log("Executed after 2 seconds (only once)");
}, 2000);

//----------------------------------------------------------------------

//** setInterval: Executes a function repeatedly at fixed time intervals.
// Syntax: setInterval(callbackFunction, intervalInMilliseconds);

// Runs the function every 1 second (repeats)
setInterval(function () {
  console.log("Executed every 1 second (repeating)");
}, 1000);


//Stop setInterval [Example]
let count = 0;
let timer = setInterval(function () {
  console.log("Running... ", count);
  count++;
  if (count === 5) {
    clearInterval(timer); // Stops the interval after 5 counts
    console.log("Interval Stopped");
  }
}, 1000);
