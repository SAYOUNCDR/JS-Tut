// Does JS have classes
// Yes JS does have classes but this feature was introduced  with ECMAScript 2015
// However its important to note that JS is prototpe-based language
// Classes are primarly syntactic sugar overr existing prototype based inheritance mechanism

// ##OOP
/*
- Constructor function
- Prototypes
- Classes
- Instances (new, this)
*/



//Object literal
const user = {
  username: "Sayoun",
  logIn: 8,
  singnedIn: true,

  getUserDetails: function () {
    console.log(`Got user deatils from database: UserName: ${this.username}`);
  },
};

console.log(user.username);
user.getUserDetails();


// - Constructor function
function users(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn;
    this.greetings = () => {
        console.log(`${username }`);
    }
    return this; // wtihout this also work it will eventually return this
}

const userOne = new users("hitesh", 12, true);
const userTwo = new users("Sayoun", 9, false);

console.log(userOne);
console.log(userTwo);

console.log(userOne.constructor);


//instanceOf
console.log(userOne instanceof users);


