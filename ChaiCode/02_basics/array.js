//Array is object, storing a collection of multiple items under a single varible
// In JS arrays are resizable , acan in single array multiple datatypes can be stored
// There could be array inside an array
// Shallow copy i.e same reference point i.e one change reflected to the other

//Methods to declare arrays
// 1.
const myArr = [0, 1, 2, 3, 4, 5];
console.log(myArr);
// console.log(myArr[0]);

//2.
// const myArr2 = new Array("A", "B", "C", "D");
// console.log(myArr2);

//Methods
myArr.push(6); // adds element at last of array
myArr.push(7); // adds element at last of array
myArr.unshift(9); // adds element to the start of the array(heavy cause it shifts all the array elements)
console.log(myArr);

myArr.pop(); // removes last element from array
console.log(myArr);

myArr.shift(); // removes element from the start
console.log(myArr);

console.log(myArr.includes(3)); // return true or false bolean values
console.log(myArr.indexOf(3)); // if element does not exist returns -1 and inddex starts from

//---------------------------------------------------------------------------------

const newArr = myArr.join(); // Bind the array to a single string seprated by comas
console.log(myArr);
console.log(typeof myArr); // typeof an array returns object

console.log(newArr);
console.log(typeof newArr); // typeof an array returned by join is a string

//slice and splice
console.log("A ", myArr);
const myn1 = myArr.slice(1, 3); // Returns a copy of a section of an array
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3); // Removes a section of elemet from an array an retuns it and it includes range also unlike slice 
console.log("C ", myArr); // [0, 4, 5, 6] 
console.log(myn2); // outputs the removed elements [1, 2, 3]
