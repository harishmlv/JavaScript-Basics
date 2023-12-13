// var c = 300
let a = 300   // Global Scope

if (true) {  // This is Scope = {} // Blog Scope
    let a = 10
    const b = 20  
    //console.log("Inner :", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

// Example of Nested Scope

function one() {
    const username = "Harish"

    function two() {
        const website = "Youtube"
        console.log(username);
    }
    //console.log(website);

    two()
}
// one()

if (true) {
    const username = "Herry"
    if (username === "Herry") {
        const website = " Youtube"
        //console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// +++++++++++++ Interesting ++++++++++++++

console.log(addOne(5))

function addOne(num) {
    return num + 1
}

addTwo(5) // this will give Error because we are calling function before its declaration, we will learn how to handle this on HOISTING 
const addTwo = function(num) {
    return num + 2
}

