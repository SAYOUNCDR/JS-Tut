const name = "Sayoun";
const repoNums = 18;

// console.log(name + repoNums + "Value");
console.log(`Hello my name is ${name} and my repo count is ${repoNums}`);

const newName = new String("kuldeep"); // Provides many inbuit function
console.log(newName[0]);
console.log(newName.__proto__);
console.log(newName.length);
console.log(newName.toLocaleUpperCase()); // doesnt chnage original value
console.log(newName.charAt(4));
console.log(newName.indexOf("e"));

const newString = newName.substring(0, 4);
console.log(newString); // till 4 , excluding 4th index

const anotherSting = newName.slice(0, 4);
console.log(anotherSting);

const newString1 = "        hitesh   ";
// trim removes spaces before and after of the string
console.log(newString1.trim());

const url = "https://sayoun%20parui.com";
console.log(url.replace("%20", "-"));

console.log(url.includes("sayoun"));

const stringarray = "sayoun-kuldeep-deepti";
const arraystr = stringarray.split("-");
console.log(arraystr);
