let myName = "        hitesh       "

console.log(myName.length)

let myHeros = ["thor", "spiderman"]

let powers = {
    thor: "electricity",
    spiderman: "sling",
    getSpiderPower: function(){
        console.log(`SpiderMan's Powers is ${this.spider}`)
    }
}

Object.prototype.sayHello = function() {
    console.log("Hello Welcome to the world of Marvel")
}

Array.prototype.helloHeros = function() {
    console.log("Say Hello to Heros")
}

String.prototype.trueLength = function() {
    return this.trim().length
}

myHeros.helloHeros()
powers.sayHello()
console.log(myName.trueLength())

// ============================================================ 

// inharitance

const User = {
    name: "chai",
    emai: "chai@email.com",
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fulltime: true,
    __proto__:TeachingSupport
}

Teacher.__proto__ = User


// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)