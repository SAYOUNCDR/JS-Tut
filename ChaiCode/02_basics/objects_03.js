// singleton
// Object.create

//object literals key:value
let mySymbol = Symbol("key1");

const obj = {
  name: "Sayoun",
  "full name": "Sayoun Parui",
  age: 21,
  location: "Varanasi",
  email: "sayoun@gmail.com",
  isLoggedIn: true,
  loggedInDays: ["Monday", "Saturnday"],
  [mySymbol]: "myValue1",
  greetings: function () {
    console.log(`Hello ${this.name}`); //this referas to current obj
  },
};

obj.greetings(); // access function value

//**Dot Notation vs Square Bracket Notation in JavaScript Objects--------------------

// 1. Dot notation requires valid identifier names (no spaces, no starting with numbers)
console.log(obj.name); // ✅ Valid

// 2. Square brackets allow keys with special characters or spaces
console.log(obj["full name"]); // ✅ Valid
// obj.full name  // ❌ Invalid (SyntaxError)

// 3. Square brackets are necessary when accessing keys stored in variables
const prop = "email";
console.log(obj[prop]); // ✅ Works dynamically

// 4. Only square bracket is able to acess keys made of (Symbol is not treated as string when made key)
console.log(obj[mySymbol]);

//----------------------------------------
//**Update Object values
obj.name = "Swati";
console.log(obj.name);

//**freeze obj so no update can be made
// Object.freeze(obj);
// obj.name = "Sayoun";
// console.log(obj.name);

//**Add new key as function
obj.welcome = function () {
  console.log(`Welcome ${this.name}`);
};

obj.welcome();

