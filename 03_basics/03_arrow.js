// JavaScript “this” keyword
/*
 * “This” keyword refers to an object that is executing the current piece of code. 
 * It references the object that is executing the current function. If the function being referenced 
 * is a regular function, “this” references the global object. If the function that is being 
 * referenced is a method in an object, “this” references the object itself.
 */ // use of "This" = when we have to refer current context

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
/* What is Arrow Function ?

Arrow function {()=>} is concise way of writing JavaScript functions in shorter way. 
Arrow functions were introduced in the ES6 version. 
They make our code more structured and readable.
Arrow functions are anonymous functions i.e. functions without a name but they are often assigned to 
any variable. They are also called Lambda Functions

Note: This works only if the function has only one statement.
 */

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
