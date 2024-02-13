const user = [
  {
    id: 1,
    email: "dike@mail.com",
  },
  {
    id: 1,
    email: "dike@mail.com",
  },
  {
    id: 1,
    email: "dike@mail.com",
  },
];

// console.log(user[1].email)
// console.log(user)

// console.log(Object.keys(user))
// console.log(Object.values(user))
console.log(Object.entries(user));

console.log(user[1].hasOwnProperty("email"));

const course = {
  name: "js in hindi",
  price: "999",
  courseInstructor: "Hitesh",
};


const {name: name} = course

console.log(name)