class User {
  constructor(username) {
    this.username = username;
  }

  logInDetails() {
    console.log(`Username is : ${this.username}`);
    }
    
    static createID() {
        return `123`;
    }
}  

const u1 = new User("Sayoun")
// console.log(u1.createID()) // will not work