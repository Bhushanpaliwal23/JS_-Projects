// es6

// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }

//   encryptPassword() {
//     return `${this.password}`;
//   }

//   changeUserName() {
//     return `${this.username.toUpperCase()}`;
//   }
// }

// const chai = new User("dike", "dike@mail.com", "123");

// console.log(chai.encryptPassword());
// console.log(chai.changeUserName());

// Behind The scene

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}
User.prototype.encryptPassword = function () {
  return `${this.password}`;
};

User.prototype.changeUserName = function () {
  return `${this.username.toUpperCase()}`;
};

const tea = new User('tea','tea@mail.com','123')
console.log(tea.changeUserName())
console.log(tea.encryptPassword())
