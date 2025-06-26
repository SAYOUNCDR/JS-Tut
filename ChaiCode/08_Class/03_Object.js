function multiplyBy5(num) {
  return num * 5;
}
multiplyBy5.power = 2;
console.log(multiplyBy5(2));
console.log(multiplyBy5.power); // functions can do this also ?
console.log(multiplyBy5.prototype); // it will through empty object {}

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function () {
  this.score++;
};

createUser.prototype.printScore = function () {
    console.log(`Score is ${this.score}`);
}

const user01 = new createUser("Sayoun", 20);
const user02 = new createUser("Hitesh", 15);


console.log(user01)
console.log(user02)