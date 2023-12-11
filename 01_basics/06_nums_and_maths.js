const score = 400
//console.log(score);

const balance = new Number(100)
// console.log(balance)

//console.log(balance.toString().length); // type changed from Number to String and also can add the props. of string
//console.log(balance.toFixed(2)); // output = 100.00

const otherNumber = 23.8966 // output is 23.9 
//console.log(otherNumber.toPrecision(3)); // use of toPrecision 

const hundreds = 1000000 // output = 1,000,000 US / 10,00,000 INDIA 
// console.log(hundreds.toLocaleString()); // use of toLocaleString as per US standards
// console.log(hundreds.toLocaleString('en-IN')); // use of toLocaleString as per INDIAN standards

// ********* MATHS ***********

// console.log(Math);
// console.log(Math.abs(-4)); // convert to Absolute (output = 4) 
// console.log(Math.round(4.65)); // Round of (output = 5)
// console.log(Math.ceil(4.22)); // Round of (output = 5) takes greatest then 4
// console.log(Math.floor(4.22)); // Round of (output = 4) takes lowest value
// console.log(Math.min(5,4,3,2,8)); // Minimum value inside Array = 2
// console.log(Math.max(5,4,3,2,8)); // Maximum value inside Array = 8

console.log(( Math.random() *10 ) +1 ); // value always in between 0-1 

const min = 10
const max = 20

console.log(Math.floor (Math.random() * ( max - min + 1 )) + min);