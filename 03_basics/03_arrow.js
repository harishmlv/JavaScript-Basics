// use of "This" = when we have to refer current context

const user = {
    username : "Harish",
    price : 999,

    welcomeMessage: function() {
        console.log(`${this.username} , Welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username ="Herry"
// user.welcomeMessage()

//console.log(this);

// function chai() {
//     let username = "Hariom"
//     console.log(this.username);
// }
// chai()


/**********************  ARROW function *****************************/

// const chai = function() {
//     let username = "Hariom"
//     console.log(this.username);
// }

const chai = () => {   // Arrow function () => {}
    let username = "Hariom"
    console.log(this);
}
// chai()

// const addTwo = (num1, num2) => {  // Basic (Explicit) Arrow Function //Return lgana pad rha hai
//      return num1 + num2
// }

//const addTwo = (num1, num2) =>  num1 + num2  //  Implicit Arrow Function
//const addTwo = (num1, num2) =>  (num1 + num2)  //  Implicit Arrow Function for ReactJS

// If we want to return Object
const addTwo = (num1, num2) =>  ({username: "Harish"})

console.log(addTwo(3,4))
