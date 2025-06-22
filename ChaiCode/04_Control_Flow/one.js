// convert integer 2 into string "2" so evaluated true
if (2 == "2") {
  console.log("Executed");
}

// <, >, <=, >=, !=, ==(only content not datatype), ===(this checks datatype also)

// ||, &&

//** IF ELSE-IF ELSE
// if () {

// } else if () {

// } else {

// }

//** SWITCH CASES
let month = "apr";
switch (month) {
  case "jan":
    console.log("January");
    break;
  case "feb":
    console.log("February");
    break;
  case "mar":
    console.log("March");
    break;
  case "apr":
    console.log("April");
    break;
  default:
    console.log("Other month");
    break;
}

// 🔍 Truthy and Falsy Values in JavaScript
/* These values return `false` when converted to a boolean:
- false
- 0
- -0
- 0n         // BigInt zero
- ""         // empty string
- null
- undefined
- NaN
*/

/*Any value that is NOT falsy is considered "truthy".
Examples:
- true
- "0" (zero inside string is truty value)
- "hello"
- 42
- []
- {}
- function () {}
*/

//💡 Tip: Use `Boolean(value)` to check truthiness

//Falsy
const emptyStr = "";
const nullval = null;
const undefinedVal = undefined;
//Truthy
const emptyArr = [];
const emptyObj = {};

if (emptyStr || nullval || undefinedVal) {
  console.log("Empty string or null or undefined is evaluated");
} else {
  console.log("Empty string and null and undefined is not evaluated");
}

if (emptyArr) {
  console.log("Empty Array is evaluated as true");
}

if (emptyObj) {
  console.log("Empty Object is evaluated as true");
}

// Check if arrray is empty
if (emptyArr.length === 0) {
  console.log("Array is empty");
}

//Check if Object is empty [Object.keys(objname) -> this will convert keys of object into an array]
if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}

//True statements
/*
- false == 0
- false == ''
- 0 == ''
*/

// Nullish Coalescing Operator
// (??): Returns the right-hand value only if the left is null or undefined (not 0, '', or false).
let val1 = null ?? undefined ?? 10;
console.log(val1);

// Ternary Operator: A shorthand for if-else — syntax: condition ? exprIfTrue : exprIfFalse
const age = 20;
age >= 18 ? console.log("Adult") : console.log("Minor");
