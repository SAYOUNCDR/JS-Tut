let score = 33;

// both are correct
console.log(typeof score);
console.log(typeof score);

let num = "33abc";
let valueInNumber = Number(num); //cant typecast whole string to integer because of "abc" in the string with number 33 is mixed
console.log(typeof valueInNumber);
console.log(num); //string
console.log(valueInNumber); // Output:NaN (it throws type as number)

let zero = null;
let nullValue = Number(zero);
console.log(typeof zero); //type of null is object
console.log(typeof nullValue);
console.log(nullValue); //null converted to number will give 0

let n;
console.log(typeof n); //undefined type

let boolCheck = true;
let numBool = Number(boolCheck);
console.log(boolCheck); //true
console.log(numBool); // boolean converted into number gives 1 and 0
console.log(typeof boolCheck); //boolean type
console.log(typeof numBool); //number type

//Note: "33" string converted into number give 33 as number
//But "33abc" string when converted into number gives NaN cause abc can't be converted into number

//true ==> 1 & false ==> 0

//"" empty string coverted into boolean gives false
//"someString" string converted into boolean true
