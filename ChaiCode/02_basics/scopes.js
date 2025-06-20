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
