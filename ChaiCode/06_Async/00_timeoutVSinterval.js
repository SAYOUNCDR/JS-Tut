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

// clearTimeout:
// Stops a function scheduled by setTimeout from running.
// Used to cancel a one-time delayed execution before it happens.

let timeoutId = setTimeout(function () {
  console.log("This will not run if cleared.");
}, 3000);

clearTimeout(timeoutId); // Cancels the timeout

// clearInterval:
// Stops a function scheduled by setInterval from repeating.
// Used to stop a repeatedly running function.

let intervalId = setInterval(function () {
  console.log("Repeating message.");
}, 1000);

clearInterval(intervalId); // Cancels the interval
