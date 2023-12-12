const marvel_heros = ["thor", "ironmen", "spiderman"];
const dc_heros = ["superman","flash", "batman"]

// marvel_heros.push(dc_heros) // PUSH method -  Array inside Array 

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros) // CONCAT method = merge two arrays
// console.log(allHeros);

// ******** Spread Operator ***********

const all_new_heros = [...marvel_heros, ...dc_heros] // Same use as concat array = merge 2 arrays
// console.log(all_new_heros);

const another_array = [ 1,2,3, [ 4,5,6 ], 7, [ 6, 7, [ 4, 5 ]]]
let real_another_array = another_array.flat(Infinity) // Merge all data in single array
console.log(real_another_array);

console.log(Array.isArray("Harish"))
console.log(Array.from("Harish"))
console.log(Array.from({name : "Harish"})) // Important for interviews

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));