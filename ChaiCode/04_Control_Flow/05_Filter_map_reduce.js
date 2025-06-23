//Foreach filter map reduce...

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// For each does not return value , so long process
const myNums = [];
nums.forEach((value) => {
  if (value % 2 === 0) {
    myNums.push(value);
  }
});
// console.log("For each : ", myNums);

// filter is used to return values unlike for each
// const newNums = nums.filter((values) => {
//   return values % 2 === 0;
// });
// console.log("filtered : ", newNums);

//-------------------------------------------------------------------------------
const books = [
  {
    title: "The Silent Sea",
    genre: "Thriller",
    publishDate: 2010,
    edition: 2012,
  },
  {
    title: "JavaScript Essentials",
    genre: "Software Engineering",
    publishDate: 2022,
    edition: 2023,
  },
  {
    title: "History of Time",
    genre: "Science",
    publishDate: 1998,
    edition: 2001,
  },
  {
    title: "Creative Minds",
    genre: "Biography",
    publishDate: 2015,
    edition: 2016,
  },
  {
    title: "Design Patterns",
    genre: "Software Engineering",
    publishDate: 2004,
    edition: 2009,
  },
];

//** .filter
//Question Software Engineering and pusblishdate > 2005
let bookName = books.filter((book) => {
  return book.genre === "Software Engineering" && book.publishDate > 2005;
});
// console.log(bookName);

//** .map
let myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNumbers = myNumbers.map((num) => num + 10);
console.log(newNumbers);

//** Chaining (i.e applying multiply maps and filters)
let chain = [1, 2, 3, 4, 5, 6];
let afterChain = chain
  .map((num) => num * 10)
  .map((num) => num + 5)
  .filter((num) => num > 25);
console.log(afterChain);

//** .reduce() is a JavaScript array method used to reduce an array to a single value by applying a callback function on each element.
// Syntax - array.reduce(callback(accumulator, currentValue), initialValue)
let reduceArr = [1, 2, 3];
let sumArr = reduceArr.reduce((acc, currNum) => acc + currNum, 0); //sum of elemnt sof an array
console.log(sumArr); // Output: 6

//Practice question on .reduce() find total price of product in cart
const cart = [
  { name: "Laptop", price: 60000 },
  { name: "Mobile", price: 20000 },
  { name: "Watch", price: 5000 },
  { name: "Headphones", price: 3000 },
];

let cartSum = cart.reduce((acc, item) => acc + item.price, 0);
console.log(cartSum);

//Find total items as well as totalPrice
let cartSummary = cart.reduce(
  (acc, item) => {
    acc.totalItems += 1;
    acc.totalPrice += item.price;
    return acc;
  },
  {
    totalItems: 0,
    totalPrice: 0,
  }
);
console.log(`Totoal number of items : ${cartSummary.totalItems}`);
console.log(`Total price : ${cartSummary.totalPrice}`);
