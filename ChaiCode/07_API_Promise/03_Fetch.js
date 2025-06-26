// fetch() is a global method that starts the process of fetching a resource from the network
// returning a promise which is fulfilled once the response is available
// 404 response [Read about it from mdn docs]

/* 
=============================
JavaScript Event Loop Explained
=============================

1. JS Engine:
   - Memory Heap: 
     The space where memory allocation happens for variables, objects, and functions.
   
   - Call Stack:
     A stack data structure where function execution contexts are pushed and popped.
     Example:
     Global -> fn -> fn -> fn (top of stack)

2. Web APIs:
   - Environment provided by the browser (not by JS itself).
   - Includes APIs like:
     * DOM APIs
     * setTimeout
     * setInterval
     * fetch()

   - These APIs handle asynchronous tasks and register callbacks.

3. Callback Registration:
   - Asynchronous functions like setTimeout, setInterval, and fetch are handed off to Web APIs.
   - When their timer or task completes, their callback is moved to the appropriate queue.

4. Microtask Queue (Priority Queue):
   - Stores promises (like .then, async/await resolved tasks) and mutation observers.
   - Has **higher priority** over the Task Queue.
   - Before the event loop picks tasks from the Task Queue, it always empties the Microtask Queue first.

5. Task Queue:
   - Stores callbacks from:
     * setTimeout
     * setInterval
     * Other Web API events
   - Lower priority than the Microtask Queue.

6. Event Loop:
   - Continuously checks if the Call Stack is empty.
   - If empty, the Event Loop pushes:
     * First → all tasks from Microtask Queue to the Call Stack.
     * Then → tasks from the Task Queue.

7. Important Notes:
   - Microtasks are executed first → Examples: promise resolutions.
   - Task Queue is checked only after Microtask Queue is empty.
   - Example: A fetch() response (promise) is picked before a setTimeout.

=============================
Summary:
=============================
Call Stack executes synchronous code.
Web APIs handle asynchronous code.
Microtask Queue (high priority) → Task Queue (low priority)
Event Loop connects everything by continuously cycling between queues and the Call Stack.

=============================
Visual Flow:
=============================
Call Stack -> Web API -> Callback Queues -> Back to Call Stack via Event Loop.
*/

//NOTE : Both .then() and async/await do the same thing

//Using async/await
// async function getUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("Error: ", error);
//   }
// }
// getUsers();cls

//Using .then()
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.log("Error: ", error));

/*
fetch(URL) 
   ⬇️
 response (raw stream)
   ⬇️
 response.json() 
   ⬇️
 data (parsed JSON)
*/
