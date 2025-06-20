//Nested object
let user = {
  name: "Sayoun",
  deatils: {
    fullname: {
      firstname: "Sayoun",
      lastname: "Parui",
    },
    contacts: {
      email: "sayounparui@gmail.com",
      phone: 639212545609,
    },
  },
  address: "Varanasi",
};

//**Acessing nested values
console.log(user.name);
console.log(user.deatils.fullname.lastname);
console.log(user.deatils.contacts.email);
console.log(user.deatils.contacts.phone);

//**Merge objects in effecient way
let obj1 = { 1: "a", 2: "b", 3: "c" };
let obj2 = { 3: "d", 4: "e", 5: "f" };
let obj3 = { 6: "g", 7: "h", 8: "i" };
let obj4 = Object.assign({}, obj1, obj2, obj3); //Object.assign(target, source)
console.log(obj4);
//Spread method to merge like in arrays we have done
let obj5 = { ...obj1, ...obj2, ...obj3 };
console.log(obj5);

//Array of objects
let arr = [
  {
    name: "a",
    age: 17,
  },
  {
    name: "b",
    age: 28,
  },
  {
    name: "c",
    age: 19,
  },
];

console.log(arr[1].name, arr[1].age);

//** COnvert keys and values of object into an array
console.log(Object.keys(obj5));
console.log(Object.values(obj5));
console.log(Object.entries(obj5));

//**Checks if key exist or not in an object
console.log(user.hasOwnProperty("address"));
