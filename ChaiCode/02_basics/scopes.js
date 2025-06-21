//Let Var story
var a = 200;
if (true) {
  var a = 300;
}
console.log(a); // var a's vlaue is given inside if block should'nt be accessed outside the {} but it's accessible so its huge problem

//-------------------------
let b = 20;
if (true) {
  let b = 30;
}
console.log(b); // here b's value is from outside if block i.e inside let b is not accessible outside its {} scope

//** Scope basics for functions
function outer() {
  const username = "Sayoun Parui";

  function inner() {
    const website = "https://sayoun-parui.new/index.jsx";
    console.log(username);
  }

  //ReferenceError: website is not defined
  // console.log(website); // outer function can't acess inner member functions

  inner();
}

outer();

//** Expression technique to write function here variable will hold the function

// console.log(addtwo(5)); //will not work throw reference error
const addtwo = function (num) {
  return num + 2;
};

console.log(addtwo(5));
