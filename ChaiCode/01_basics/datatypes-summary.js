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