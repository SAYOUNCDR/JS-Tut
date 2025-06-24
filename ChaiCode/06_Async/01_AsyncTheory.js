// JS is Synchronous , Single threaded
// Blocking code (Read file Sync)
console.log("Start");

function syncTask() {
  console.log("Working...");
}

syncTask();
console.log("End");

// Non Blocking code (Read file Async)
console.log("Start");

setTimeout(() => {
  console.log("This runs later");
}, 2000);

console.log("End");



//** A callback is a function passed as an argument to another function,
// and it is executed after some operation has been completed
function greetUser(name, callback) {
  console.log("Hi " + name);
  callback(); // call the passed function
}

function sayBye() {
  console.log("Goodbye!");
}

greetUser("Sayoun", sayBye);


//✅ Real-world example (asynchronous):
setTimeout(function () {
  console.log("This runs after 2 seconds");
}, 2000);
