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
