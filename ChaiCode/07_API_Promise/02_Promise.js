// Promise:
// A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation.
// Promises have three states:
// 1. Pending   ➜ The operation is still in progress
// 2. Fulfilled ➜ The operation completed successfully
// 3. Rejected  ➜ The operation failed

// Why Promises?
// Promises provide a cleaner way to handle asynchronous tasks and help avoid callback hell.

// 1. Creating a Promise (Basic Syntax)
const promiseOne = new Promise(function (resolve, reject) {
  // Simulating an async task: DB calls, network requests, cryptography, etc.
  setTimeout(() => {
    console.log("Async task 1 is complete");
    resolve(); // Triggers the .then block
  }, 1000);
});

// Consuming the Promise
promiseOne.then(function () {
  console.log("Promise 1 consumed");
});

// 2. Creating and Consuming in One Step
new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Async task 2 is complete");
    resolve();
  }, 3000);
}).then(function () {
  console.log("Promise 2 consumed");
});

// 3. Passing Data from Promise (Common Real-World Usage)
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Sayoun", email: "sayounparui@gmail.com" }); // Send data to .then()
  }, 4000);
});

// Receiving Data in .then()
promiseThree.then(function (user) {
  console.log(user); // { username: "Sayoun", email: "sayounparui@gmail.com" }
});

// 4. Error Handling with Chaining (Very Important Syntax)
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false; // Toggle this to true to see error handling
    if (!error) {
      resolve({ username: "DB_User", password: "sayoun@09" });
    } else {
      reject("ERROR: SOMETHING WENT WRONG");
    }
  }, 5000);
});

promiseFour
  .then((user) => {
    console.log(user); // Logs the user object
    return user.username; // Pass username to the next .then
  })
  .then((username) => {
    console.log(username); // Logs only the username
  })
  .catch(function (err) {
    // Handles errors
    console.log(err);
  })
  .finally(() => {
    // Runs always, whether resolved or rejected
    console.log("Always executed (finally block)");
  });

// 5. Async/Await Style (Promise Consumption)
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "Promise_05", password: "123" });
    } else {
      reject("ERROR: Promise 05 went wrong");
    }
  }, 6000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive; // Wait for the promise to resolve
    console.log(response);
  } catch (error) {
    // Catch rejection if any
    console.log(error);
  }
}

consumePromiseFive(); // Must call the async function to execute

// 6. Fetching API Data using Async/Await
async function getAllUsers() {
  try {
    // Fetching data from API (returns a promise)
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    // Converting response to JSON (await is necessary here)
    const data = await response.json();

    // Displaying the fetched data
    console.log(data);
  } catch (error) {
    // Handling any errors that occur during fetch or parsing
    console.log("E: ", error);
  }
}

// Calling the function to initiate API fetch
getAllUsers();


// 7. Fetching API Data using Promise Chaining
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    // Converting response to JSON (returns a promise)
    return response.json();
  })
  .then((data) => {
    // Displaying the fetched data
    console.log(data);
  })
  .catch((error) => {
    // Handling errors during fetch or parsing
    console.log(error);
  })
  .finally(() => {
    // Finally block always runs whether promise is resolved or rejected
    console.log("API fetch process completed.");
  });
