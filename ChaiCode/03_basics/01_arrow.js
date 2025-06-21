// -------------------------
// 🧠 Understanding `this` in JavaScript
// -------------------------

const user = {
  username: "Sayoun Parui",
  age: 21,
  welcomeMessage: function () {
    // `this` refers to the current object (`user`) in this context
    console.log(`${this.username}, welcome to the website`);
  },
};

user.welcomeMessage(); // Output: Sayoun Parui, welcome to the website
user.username = "Sam";
user.welcomeMessage(); // Output: Sam, welcome to the website

// In the global scope:
console.log(this);
// 🔹 In the browser → refers to the global `window` object
// 🔹 In Node.js → refers to an empty object `{}`

// -------------------------
// 🔍 `this` in Regular Function vs Arrow Function
// -------------------------

// Regular function - `this` refers to the global object (window or {} in Node)
const garamChai = function () {
  let username = "Sayoun";
  console.log(`Hey ${this.username}`); // undefined, `this` is not the current function's scope
};
// garamChai(); // Uncomment to test

// Arrow function - `this` is lexically scoped (inherits from parent scope)
const Chai = () => {
  let username = "Sayoun";
  console.log(`Hey ${this.username}`); // still undefined, `this` is from outer (global) context
};
Chai();

// -------------------------
// ✅ Arrow Function - Implicit Return
// -------------------------

const addNums = (num1, num2) => num1 + num2; // concise syntax, no `return` needed
console.log(addNums(5, 10)); // Output: 15

// -------------------------
// 📦 Arrow Function - Returning an Object
// -------------------------

const objReturn = () => ({ username: "Sayoun", age: 23 });
// ⚠️ Must wrap object in parentheses to avoid `{}` being treated as block
console.log(objReturn()); // Output: { username: "Sayoun", age: 23 }
