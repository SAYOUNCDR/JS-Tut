//!Print mesage under ` `
// console.log(`Hello test JS`);
// console.log(`I like burger`);

//!For alert
// window.alert(`This is an alert box`);
// window.alert(`I like burger`);

//This is a comment {Single line}

/*
This
is 
multiline 
comment
*/

//Inserting element into html by js
// document.getElementById("myH1").textContent = `Hello`;
// document.getElementById("myP").textContent = 'This is paragraph';

//! Variables = A container that stores a value. {Should be unique}
//!             Behaves as if it were the value it contains.

//! 1. declaration         let x;
//! 2. assignment          x=100;

// let age = 25;
// let number = 10.25;
// let gpa = 2.1;
// console.log(`You are ${age} years old and your number is ${number} with gpa ${gpa}`);

//! Print type of datatype
// let firstName = "Sayoun";
// console.log(typeof firstName);

//!Booleans
// let online = true;
// console.log(online);
// console.log(`Bro is ${online}`);

//! Pricatice of inserting text by id
// let fullName = "Sayoun parui";
// let age = 21;
// let isStudent = true;

// document.getElementById("p1").textContent = `Your name is ${fullName}`;
// document.getElementById("p2").textContent = `Your age is ${age}`;
// document.getElementById("p3").textContent = `Are you student ?  ${isStudent}`;

//! Arithmetic Opereators

// let students = 30;
// students = students + 1;
// students = students - 1;
// students = students * 2;
// students = students / 2;
// students = students ** 2;
// let extraStudents = students % 2;

//! Augmented assignment operators student+=1; ==> student = student + 1;
// students += 1;
// students -= 1;
// students *= 1;

//! Incriment / Decriment
// students++;
// students--;

//! Opreator precidence
// 1. paranthesis ()
// 2. exponents **
// 3. multiplication & division & modulo
// 4. addtion & subtraction

// let result = 1 + 2 * 3 + 4 ** 2;
// console.log(result);

//! How to accept user input
//! 1. Easy way => window prompt
// let username;
// username = window.prompt("What's your username");
// console.log(username);

//! 2. Professsional way => HTML textbox
// let username;
// document.getElementById("mySubmit").onclick = function () {
//     username = document.getElementById("myText").value;
//     document.getElementById("welcome").textContent = `Hello ${username} `;
// }

//! Type Conversion = changing the datatype of a value to another
//!                   (string, numbers, booleans)
// let age = window.prompt("How old are you ?");
// age = Number(age);
// age += 1;
//! It should print age+1 but input from window prompt takes input as string so type conversion
// console.log(age);
// console.log(typeof age);

//! const = a variable that can't be changed
// const PI = 3.14159;
// let radius;
// let circumference;

// document.getElementById("enter_radius").onclick = function () {
//   radius = document.getElementById("radius").value;
//   radius = Number(radius);
//   circumference = 2 * PI * radius;
//   document.getElementById(
//     "circumference"
//   ).textContent = `The circumference of circle is ${circumference} cm`;
// };

//! counter program
// let cnt = 0;
// const increaseBtn = document.getElementById("inc");
// const decreaseBtn = document.getElementById("dec");
// const resetBtn = document.getElementById("reset");

// increaseBtn.onclick = function () {
//   cnt++;
//   document.getElementById("counter").textContent = cnt;
// };
// decreaseBtn.onclick = function () {
//   cnt--;
//   document.getElementById("counter").textContent = cnt;
// };
// resetBtn.onclick = function () {
//   cnt = 0;
//   document.getElementById("counter").textContent = cnt;
// };

//! Math => Buit-in object that provides a collection of properties and methods
// let x = 3.99;
// let y = 2;
// let z;

// z=Math.round(x);
// z = Math.ceil(x);
// z = Math.floor(x);
// z = Math.trunc(x);
// z = Math.pow(y, y);
// z = Math.sqrt(81);
// z = Math.log(10);
// z = Math.abs(-3.123);
// z = Math.sign(-3.123);
// let max = Math.max(1, 4, 13, 45);
// let min = Math.min(1, 4, 13, 40, -434);
// console.log(min);

//! Random number b/w 1-6
// let rand = Math.floor(Math.random() * 6) + 1;
// console.log(rand);

//! random number program

// const min = 50;
// const max = 100;
// let randomNum;

// const myBtn = document.getElementById("mybtn");
// const mtLabel = document.getElementById("roll");

// myBtn.onclick = function () {
//     randomNum = Math.floor(Math.random() * (max - min)) + min;
//     mtLabel.textContent = `${randomNum}`;
// }

//! IF STATEMENTS
// let age = 25;
// if (age>=18) {
//     console.log("You are eligible");
// }
// else {
//     console.log("Not eligible");
// }

//! .checked => property that determines the checked state of an HTML chekbox or radio btn

// const mySubmit = document.getElementById("mySubmit");
// const myCheckbox = document.getElementById("myCheckbox");
// const visaBtn = document.getElementById("visaBtn");
// const masterCardBtn = document.getElementById("masterCardBtn");
// const payPalBtn = document.getElementById("payPalBtn");
// const subResult = document.getElementById("subResult");
// const paymentResult = document.getElementById("paymentResult");

// mySubmit.onclick = function () {
//   if (myCheckbox.checked) {
//     subResult.textContent = `You are subscribed`;
//     if (visaBtn.checked) {
//       paymentResult.textContent = `You subscribed to visa`;
//     } else if (masterCardBtn.checked) {
//       paymentResult.textContent = `You subscribed to MasterCard`;
//     } else if (payPalBtn.checked) {
//       paymentResult.textContent = `You subscribed to PayPal`;
//     } else {
//       paymentResult.textContent = `You have not chosen any card`;
//     }
//   } else {
//     subResult.textContent = `You are NOT subscribed`;
//   }
// };

//! Ternary operator  condition ? true : false
// let age = 21;
// let message = age >= 18 ? "Your are an adult" : "You ar a minor";
// console.log(message);

//! Switch case
// let day = "Friday";

// switch (day) {
//   case "Sunday":
//     console.log("Sunday");
//     break;
//   case "Monday":
//     console.log("Monday");
//     break;
//   case "Tuesday":
//     console.log("Tuesday");
//     break;
//   case "wednesday":
//     console.log("Wednesday");
//     break;
//   case "Friday":
//     console.log("Friday");
//     break;
//   default:
//     console.log("This is default");
// }

//! String Methods
let n = "Sayouyn";

// 1. chatAt(pos);
// for (let i = 0; i < n.length; i++) {
//   console.log(n.charAt(i));
// }

//Another way
// for (let i = 0; i < n.length; i++) {
//   console.log(n[i]);
// }

// 2. indexOf("char")
// console.log(n.indexOf("y"));

// 3. lastIndexOf("char")
// console.log(n.lastIndexOf("y"));

// 4. Lenght
// console.log(n.length);
