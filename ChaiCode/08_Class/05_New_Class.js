class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptedPassword() {
    return `${this.password}encrypt`;
  }

  changeUsername() {
    return `${this.username.toUpperCase()}`;
    }
    
    logInDetails() {
        console.log(`Username is : ${this.username}`)
    }
}

class teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}

const userOne = new User("Sayoun", "sxh@gmmail.com", 541);
console.log(userOne.encryptedPassword());
console.log(userOne.changeUsername());
userOne.logInDetails()

const teacherUser = new teacher("hitesh", "chai@gmail.com", 123);
teacherUser.addCourse();
teacherUser.logInDetails()


