// Immediatly Invoked Function Expressions (IIFE)

/**What is the use of IIFE in JavaScript?
IIFE in javascript is one of the good ways to hide data from the global scope as it creates its own scope.
IIFE in javascript is used often while creating your own javascript library to 
avoid unnecessary conflicts like duplicate variables and functions in the global scope. */
// global scope ke variable ya conflicts ko hatane ke lie iife use kia jata hai 

// function chai() {
//     console.log(`DB Connected `);
// }
// chai()

(function chai() {  // this is called Named IIFE
    console.log(`DB Connected `);
}) ();  //  1st () is Function Definition and 2nd () is Execution and ; is important at last


// with Arrow function = unnamed IIFE
// ( () => {
//     console.log(`DB Connected Two `);
// }) ()

// with variable function = unnamed IIFE
( (name) => {
    console.log(`DB Two Connected by ${name}`);
}) ('Harish')