//this -> current execution context

function setUsername(username) {
    this.username = username;
    console.log("Called");
}

function createUser(username, email, password) {
    // setUsername(username); //Tis is wrooong this wont call setUsername function like other languages
    setUsername.call(this, username); //This is correct this will hold the reference 
    this.email = email
    this.password=password
}

const user01 = new createUser("Sayoun", "sayounparui@gmail.com", 123);
console.log(user01)
