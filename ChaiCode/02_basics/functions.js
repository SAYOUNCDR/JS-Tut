//** Functions
function addition(num1, num2) {
  return num1 + num2;
}
let result = addition(2, 4);
console.log(result);

//** Default parameter function
function greet(username = "Sam") {
  return `Welcome to the website ${username}`;
}
console.log(greet("Sayoun"));

//** Rest operator in JS ... (Store all arguments in an array)
function addPrices(...prices) {
  let sum = 0;
  for (let i of prices) {
    sum += i;
  }

  return sum;
}
console.log(addPrices(2, 3, 4, 5, 9));

//** Pass Object in the function
let user = {
  username: "Sayoun Parui",
  age: 21,
};

function handleObject(obj) {
  console.log(`Hey! Welcome ${obj.name}, Your age is ${obj.age}`);
}
//1st method pass object
// handleObject(user);

//2nd way pass whole ov=bj defination in function call
handleObject({
  username: "Sayoun Parui",
  age: 21,
});


//** Pass array in function
let arr = [1, 2, 3, 4, 5];
function handleFunction(arrs) {
    return arrs;
}

console.log(handleFunction(arr))
