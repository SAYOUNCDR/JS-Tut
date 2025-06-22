// for loop
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// Looping through an array using for...of
const fruits = ["apple", "banana", "mango"];
// 1. First method
for (const fruit of fruits) {
  console.log(fruit);
}

// 2. Second method
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//break
for (let i = 0; i <= 20; i++) {
  if (i > 5) {
    break; //stops the loop
  }
  console.log(i);
}

console.log("\n");

// continue
for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    continue; //skips the iteration
  }
  console.log(i);
}
