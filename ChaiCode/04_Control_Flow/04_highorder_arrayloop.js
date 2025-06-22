// for of loop for array
const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
  console.log(num);
}

// Iterate through string using for of loop
const greeting = "Hello Sayoun!";
for (const greet of greeting) {
  console.log(greet);
}

// Maps iterator [for of]
const map = new Map();
map.set("IN", "India");
map.set("USA", "United States Of America");
map.set("Fr", "France");

// console.log(map);
for (const [key, value] of map) {
  console.log(key, " : ", value);
}

// Object iterator [for in]
const object = {
  js: "javascript",
  cpp: "C++",
  r: "rust",
  swift: "Swift",
};

for (const key in object) {
  console.log(key, " : ", object[key]);
}

//foreach **IMPORTANT [callback function ]
const coding = ["js", "c++", "rust", "go", "python", "c"];
coding.forEach(function (val) {
    console.log(val)
})

coding.forEach((value) => {
    console.log(value)
})

//function passing in foreach
function printMe(coding) {
    console.log(coding);
}
coding.forEach(printMe);

//foreach full potential
coding.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

//Array of objects iteration
const mycoding = [
  {
    laguageName: "Javascript",
    laguageFileName: "JS",
  },
  {
    laguageName: "JAVA",
    laguageFileName: "java",
  },
  {
    laguageName: "Python",
    laguageFileName: "py",
  },
];

mycoding.forEach((objItem) => {
  console.log(objItem.laguageName, " : ", objItem.laguageFileName);
});
