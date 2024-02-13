const promiseOne = new Promise(function (resolve, reject) {
  //DO an aynsk task
  // db calls, cryptography

  setTimeout(function () {
    console.log("Async task is completed");
    resolve();
  }, 1000);
});
promiseOne.then(function () {
  console.log("Promise is consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async 2 resolved");
    resolve();
  }, 1000);
}).then(function () {
  console.log("promise 2 resolved");
});

const promise3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "chai", email: "chai@example.com" });
  }, 1000);
});

promise3.then(function (user) {
  console.log(user);
});

const promise4 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "chai", password: "123" });
    } else {
      reject("Error: Something went wrong");
    }
  }, 1000);
});

promise4
  .then(function (user) {
    console.log(user);
    return user.username;
  })
  .then(function (username) {
    console.log(user.username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("promise is either resolved or rejected");
  });

promise5 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "chai", password: "123" });
    } else {
      reject("Error: Something went wrong");
    }
  }, 1000);
});

async function consumePromise5() {
  try {
    const response = await promise5;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromise5();

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://api.github.com/users/hiteshchoudhary')
//         console.log(response)
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// }
// getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})