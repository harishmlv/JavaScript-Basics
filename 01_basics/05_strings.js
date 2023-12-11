const name = "Harish"
const repoCount = 50

// console.log(name + repoCount + " Value"); outdated way to get output

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //Modern way to get output using backticks ``

const gameName = new String('Harish')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length); // used to find out length of the String
// console.log(gameName.toUpperCase()); // used to convert String to upper case
// console.log(gameName.charAt(3)); // used to find the Character or value from Array by Array Number
// console.log(gameName.indexOf('i')); // Which character on which position in Array

const newString = gameName.substring(0, 4) // Substring  function 
//console.log(newString);

const anotherString = gameName.slice(-6, 4)  // Slice function
//console.log(anotherString);

const newStringOne = "   Harish   "
// console.log(newStringOne);
// console.log(newStringOne.trim()); // Trim function 

const url = "https//www.harish.com/harish%20malviya"
// console.log(url.replace('%20', '-')) // Replace function 
// console.log(url.includes('harish')) // 'harish included on string or not- answer will come in true/false

const game2= new String('herry-malviya-harish')
console.log(game2.split('-')) // Split function 