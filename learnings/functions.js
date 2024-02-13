function add(num1, num2) {
    let result = num1 + num2
    return result
}
console.log(add(1,43))

function sayHello(name) {
    return `Hello ${name}`
}

console.log(sayHello('Bhushan'))

function disp(val1, val2, ...num1) {
  return num1;
}

console.log(disp(1, 2, 3, 4));

const user = {
  name: "dike",
  email: "dike@mail.com",
};

user1 = [11, 22, 33];

function handleObject(anyObject) {
  console.log(anyObject.name);
  return anyObject.email;
}

console.log(handleObject(user));

function handleArray(anyArray) {
  console.log(anyArray[0]);
  return anyArray[1];
}
console.log(handleArray(user1));

function one() {
  const username = "hitesh";

  function two() {
    website = "youtube";

    console.log(username);
  }
  // console.log(website);
  two();
}

one()

console.log(addone(5))

function addone(num1) {
  return num1 + 1
}


const addtwo =  function (num1) {
  return num1 + 2
}




