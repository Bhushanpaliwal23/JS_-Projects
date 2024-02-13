// const user = {
//   name: "Bhushan",
//   age: 23,
//   welcomeMessage: function () {
//     // console.log(` hi ${this.name} , how are you`);
//     // console.log(this)
//     return true;
//   },
// };

// // console.log(this)

// // console.log(user.welcomeMessage())
// user.name = "Dike";
// // console.log(user.welcomeMessage())

// function hello() {
//   let name = "dike";
//   // console.log(this.name)
// }
// hello();

// const arrow = () => {
//   let name = "dike";
//   console.log(this);
// };
// arrow();

// const add = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(add(22, 33));

// const add2 = (num1, num2) => num1 + num2;
// console.log(add2(22, 33));

// const add3 = (num1, num2) => num1 + num2;
// console.log(add3(22, 33));

// const user1 = {
//   uname: "dike",
// };
// const add4 = (user) => (user);
// console.log(add4(user1));

// // IIFE : Immediately Invoked Function Expresion

// (function chai() {
//   console.log("hello 1st iffe");
// })();

// (() => {
//   console.log("this is iffe 2");
// })();





let arr = [1,2,3,4,5,6,7]


// arr.map((item) => {
//   narr.push(item+1)
//   return narr
// })

// // narr = []
// console.log(arr)
// arr.forEach((item,index,arrow)=>{
//  arr[index] =item+1
// }
// )
// console.log(arr)

// // arr = [1,2,3,4,5,6,7]

// arr.map((item,index,arrow)=>{
//   return arr[index] =item+1
//  })
// console.log(arr)


// Original array
let numbers = [1, 2, 3, 4, 5];

let doubledNumbers =[]

// Using forEach to modify the original array
numbers.forEach((num) => num * 2);
console.log(numbers); // Output: [2, 4, 6, 8, 10] (original array remains unchanged)

// console.log(numbers); // Output: [2, 4, 6, 8, 10]

// // Using map to create a new array without modifying the original
// doubledNumbers = numbers.map(num => num * 2);

console.log(doubledNumbers); // Output: [4, 8, 12, 16, 20]
