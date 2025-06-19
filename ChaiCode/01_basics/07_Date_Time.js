//Dates in JavaScript  -> Begins at January 1, 1970 displays in milisecond
let myDate = new Date();
console.log(myDate.toString()); //Wed Jun 18 2025 15:48:51 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); //Wed Jun 18 2025
console.log(myDate.toLocaleString()); //6/18/2025, 3:53:13 PM

console.log(typeof myDate); // It's an object

let mycreatedDate = new Date(2023, 0, 23, 5, 23, 3); // month starts from zero in js
console.log(mycreatedDate.toLocaleString());

let yyyymmdd = new Date("2025-01-28"); // In this format month starts with 1
console.log(yyyymmdd.toLocaleString());

let mmddyyyy = new Date("01-29-2025");
console.log(mmddyyyy.toLocaleString());

//---------Important for Quizz , polls, Hotel booking and many others
let myTimeStamp = Date.now();
console.log(myTimeStamp); //it will give in milisecond
console.log(Math.floor(myTimeStamp) / 1000); //convert into seconds

//-------------------------------------------------------------------
let newDate = new Date();
console.log(newDate); // 2025-06-18T11:34:39.997Z
console.log(newDate.getTime()); // 1750246479997
console.log(newDate.getFullYear()); //2025
console.log(newDate.getMonth()+1); // if not put +1 will give 1 month less cause in js months sarts from 0
console.log(newDate.getDay()); // 3 will give day monday =1 , tuesday 2 , wed =3..




//--------------------------------------------------------------------
const customDate = new Date('2025-06-18');  // use any date you want

const weekday = customDate.toLocaleString('default', {
  weekday: 'long'
});

console.log(weekday); // Output: "Wednesday" (for 2025-06-18)
