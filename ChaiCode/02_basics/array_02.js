const marvel_heros = ["Ironman", "DrStrange", "Cap", "Thor"];
const dc_heros = ["superman", "Flash", "Batman", "WonderWomen"];

// marvel_heros.push(dc_heros); // it pushes the whole array as single entity in marvel array
// console.log(marvel_heros);

//To retrive array element which is inside another array
// console.log(marvel_heros[4][3]); // returns WonderWomen

//Merging----------------------------------------------------
// Merge two arrays
// let heros = marvel_heros.concat(dc_heros); // concat combines two or more arrays and returns in a new array
// console.log(heros);

//Another way to merge ** SPREAD **
// let all_new_heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_heros);
//----------------------------------------------------------------



// Nested array solution ** --------------------------------------------
let another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
let simple_another_array = another_array.flat(Infinity); //Returns a new array with all sub-array elements concatinated into it recursevily upto the specified depth
console.log(simple_another_array);



//Convert into array and check if its an array or not-----------------------------------------
console.log(Array.isArray("Sayoun")); // Checks if Sayoun is an array or not
console.log(Array.from("Sayoun")); // Creates an array from iterable object


// **INTRESTING 
console.log(Array.from({ name: "sayoun" })); // [] returns an empty array
// TO convert object into array we have to tell wether array of key is to be made of array of values is to be made


// ** Array from diff elements
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)); // Returns an array from set of elements


//-------------------------------------------------------------------------