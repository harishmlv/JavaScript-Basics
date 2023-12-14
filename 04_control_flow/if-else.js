// Conditional Statements = IF - ELSE, ELSE IF 

// < , > , >= , <= , == , != , === , !== , && , || , 

const isUserLoggedIn = true
const temprature = 41


// if ( temprature < 50 ) {
//     console.log("Temprature is less then 50");
// }
// else {
//     console.log("Temprature is greater then 50");
// }

const score = 200

// if (score > 100) {  // scope
//     let power = "fly"
//     console.log(` User Power :  ${power}`);
// }
// console.log(` User Power :  ${power}`);

// short hand notation

const balance = 1000

// if (balance > 500) console.log("true"); // implicit scope = executes in one line

// IF ELSE

// if (balance < 500) {
//     console.log("Less then 500");
// } 
// else if (balance < 750) {
//     console.log("Less then 750");
// }
// else if (balance < 900) {
//     console.log("Less then 900");
// }
// else {
//     console.log("Greater then 1000");
// }

const userLoggedIn = true
const debitCard = true 
const loggedInFromGoogle = false
const loggedInFromInsta = true

if (userLoggedIn && debitCard) {  // it will check both conditions and all should be true
    console.log("Allowed to buy course");
}
if (loggedInFromGoogle || loggedInFromInsta ) { //it will check both conditions and any one should be true
    console.log("User Logged in");
}

