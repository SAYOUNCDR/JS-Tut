const score = 500;
console.log(score);

const balance = new Number(200); // Gives more properties
console.log(balance.toString().length);
console.log(balance.toFixed(3));

// +++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++
console.log(Math.abs(-6));
console.log(Math.round(4.8));
console.log(Math.floor(4.8));
console.log(Math.ceil(4.8));
console.log(Math.sqrt(625));
console.log(Math.min(4, 3, 7, 8));
console.log(Math.max(4, 3, 7, 8));

console.log(Math.random()); //b/w 0-1
console.log(Math.floor(Math.random() * 10) + 1);

// ++++++++++++++++++++ Random Usage ++++++++++++++++++++++++++

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // print b/w 10 -20
