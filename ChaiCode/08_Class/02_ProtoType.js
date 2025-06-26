//📚 JavaScript Prototypes - Quick Notes
//✅ Prototypes allow objects to inherit properties and methods from other objects.
//✅ If a property/method is not found in the object, JavaScript searches its prototype chain.
//✅ The search continues up the chain until the property is found or reaches null (end of chain).
//✅ Methods added to the prototype are shared across all instances, making memory usage efficient.

let user = {
  name: "Sayoun",
  greet: function () {
    console.log("Hello!");
  },
};

let admin = {
  role: "Admin",
};

admin.__proto__ = user; // admin inherits from user

console.log(admin.name); // 👉 Sayoun (inherited)
admin.greet(); // 👉 Hello! (inherited)

// admin --> user --> Object.prototype --> null

let heros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpidyPower: function () {
    console.log(`Spidy's power is ${this.spiderman}`);
  },
};

Object.prototype.allAcess = function () {
  console.log("This data will be acess by all");
};
Array.prototype.onlyArrayAcess = function () {
  console.log("This can be only acecssef by Array or its child dataType");
};
//In JS all things are basically an object if we add data in prototype of Object all others can also acess that prototpes data cause Object is top level hirarcy

heros.allAcess(); //Array can access prototype data of Oject
// heroPower.onlyArrayAcess(); // Error: Object cant acess array prototype

//Inheritance

const userTeacher = {
  name: "Sayoun",
  email: "Sayoun@gmail.com"
}
const teacher = {
  makeVideo : true
}

const techingSupport = {
  isAvailable : false
}

const TASupport = {
  makeAssignment: 'JS Assignment',
  fullTime: true,

  __proto__: techingSupport
}

teacher.__proto__ = userTeacher

//modern syntax
Object.setPrototypeOf(techingSupport, teacher)

// New topic

let myName = "Sayoun      ";
let theirName = "   DeepSeek";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True Length is : ${this.trim().length}`);
};
console.log(myName.length);
myName.trueLength(); //This will give true length after trim

"DeepSeek  ".trueLength();
"MicroSoftGIMINI".trueLength();
