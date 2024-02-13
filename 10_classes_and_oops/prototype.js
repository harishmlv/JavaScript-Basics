// let myName = "harish     "
// let mychannel = "chai     "

// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor:"hammer",
    spiderman: "web",

    getSpiderPower: function() {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

// all objects are stored in harish
Object.prototype.harish = function(){
    console.log(`harish is present in all objects`);
}

Array.prototype.heyHarish = function () {
    console.log(`harish says hello`);
}

// heroPower.harish()
// myHeros.harish()
// heroPower.heyHarish()
// myHeros.heyHarish()

// INHERITANCE

const user = {
    name : "chai",
    email : "chai@gmail.com"
}

const teacher = {
    makeVideo : true
}
const teachingSupport = {
    isAvailable : false
}
const TASupport = {
    makeAssignments : 'JS Assignment',
    fullTime : true,
   __proto__ : teachingSupport // we can also use => teacher.__proto__ = user
}

teacher.__proto__ = user

// Modern syntax 

Object.setPrototypeOf(teachingSupport, teacher)

// to give string superpower 

let anotherUsername = "chaiAurCode    "

String.prototype.trueLength = function (){
     console.log(`${this}`);
    console.log(`True value is ${this.trim().length}`);
}

anotherUsername.trueLength()
"harish".trueLength()
"IceTea".trueLength()