// Primitive Datatypes
// 7 Types : call by value i.e changes will not appear into the main data

// String , Number , Boolean , null , undefined , Symbol , BigInt

// Symbols exp
const id = Symbol('123');
const anotherid = Symbol('123');

console.log(id === anotherid); // false cause of Symbol


// Non - primitive (call by reference)
// Array, objects, Functions

//Array example
const myarray = ["a", "b", "c"];

//object 
const myObj = {
    name: "Sayoun parui",
    age: 21,
}

//Function

const myFunction = function () {
    console.log("Hello");
}

// To know the datatype of the varible
console.log(typeof myObj)
console.log(typeof id)



// --------------------------------------------------
// memory types ->

// Stack (Primitives[copy]) 

let myname = "Sayoun Gaming"; 
let anothername = myname; // It will go to stack so copy of mynmae comes to another name

anothername = "Kuldeep";

console.log(myname); // sayoun gaming 
console.log(anothername); // kuldeep it was given a copy



//Heap (Non-primitive[reference])
let userOne = {
    email: "sayoun@gmail.com",
    phone:6523,
}
console.log(userOne)


let userTwo = userOne;
userTwo.email = "kuldeep@gmail.com";
console.log(userOne); // now it will print email as kuldeep@gmail.com cause reference data is passed to userTwo object 