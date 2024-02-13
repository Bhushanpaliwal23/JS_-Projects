const user = {
    username: "HITESH",
    loginCount: 8,
    email: "hitesh@mail.com",
    signedIn: true,

    getUserDetails: function() {
        // console.log("Got user detatis from db")
        // console.log(`${this.username}`)
        console.log(this)
    }
}
console.log(this)
// console.log(user.username)
// console.log(user.getUserDetails());


function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function () {
        console.log(`welcome ${this.username}`)
    }

    return this    // this is not necessary
}
const userOne = new User('dike', 9, true)
const usertwo = new User('chai', 1, false)

// console.log(userOne.greeting())
console.log(usertwo.constructor) ///====================

// 1 new :- this create new object 
// 2 constructor function is called
// 3 everythig is injected
// 4 then you ge i the funcion 


