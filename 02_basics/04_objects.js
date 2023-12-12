// const tinderUser = new Object() // Singleton Object
const tinderUser = {} //basic way to create object = Non Singleton Object

tinderUser.id = "123abc"
tinderUser.name = "Herry"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {     // object inside object
    email : "someone@google.com",
    fullname : {
        userfullname : {    // nesting of object
            firstname : "Harish",
            lastname : "Malviya"
        }
    }
}
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname.firstname);

// ******************** Merge Two objects ***********************************************************

let obj1 = {1:"a", 2:"b"}
let obj2 = {3:"c", 4:"d"}
let obj3 = {5: "e", 6:"f"} 

// three ways to merge objects

// let obj4 = {obj1, obj2, obj3} // 1st way 
// let obj4 = Object.assign({},obj1, obj2, obj3) // 2nd way 
let obj4 = {...obj1, ...obj2, ...obj3} // 3rd way = use of Spread operator

// console.log(obj4);

//********************** When getting values from Database *******************************/

const users = [
    {
        id:1,
        email: "hello@google.com"
    },
    {
        id:2,
        email: "hi@google.com"
    },
    {
        id:3,
        email: "hey@google.com"
    },
    {}
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // extract keys from object tinderUser
console.log(Object.values(tinderUser)); // extract values from object tinderUser
console.log(Object.entries(tinderUser)); // entries = Rarely used 

// check if property available or not in the object 

console.log(tinderUser.hasOwnProperty('isLoggedIn')) // isLoggedIn availbale in tinderUser obj. or not = True
console.log(tinderUser.hasOwnProperty('isLogged')) // isLoggedIn availbale in tinderUser obj. or not = False
