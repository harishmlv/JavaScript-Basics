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

B. Return type of variables in Non Premitive datatypes

Array     : Object 
Object    : Object
Function  : Function(Object)
*/