/*
 * JavaScript is a dynamically typed language and not static language, 
 * which means that data types of variables are determined by the value they hold at runtime 
 * and can change throughout the program as we assign different values to them. 
 * 
 * 
 */

// ***** Data Types *****

// 1. Primitive datatypes/Call by value datatypes 
// (7 types) => String, Number, Boolean, Null, Undefinied, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol ('123')

// console.log(id === anotherId);

const bigNumber = 123456789101112n

// 2. Non Primitive datatypes/Reference datatypes
// => Arrays, Objects, Functions

// Array Example
const heros = ["Shaktiman","Hatim","Karma"]

// Object example
let myObj = {
    name: "Herry",
    age: 23,

}

// Function example
const myFunction = function(){
    console.log("Hello World");
}
console.log(typeof heros);

/* 

A. Return type of variables in Premitive datatypes

Number    :  Number
String    :  String
Boolean   :  Boolean  
Null      :  Object
Undefined :  Undefined
Symbol    :  Symbol
BigInt    :  BigInt

B. Return type of variables in Non Premitive datatypes/Reference Type

Array     : Object 
Object    : Object
Function  : Function(Object)
*/

/* ********* Memory **********

Types of Memory :-
(1) Stack memory, (Used in Primitive) = we get copy (creates a copy of updated value) 
(2) Heap memory (Non Primitive) = we get reference (means update in original value)

*/
let myYtName = "Herry Malviya"
let anotherName = myYtName
anotherName = "Harish malviya"

console.log(myYtName);
console.log(anotherName);

let user1 = {
    email: "herrymlv@google.com",
    upi: "herry@ybl"
}

let user2 = user1
user2.email = "harishmlv@google.com"

console.log(user1.email);
console.log(user2.email);