 /* ****** Array ********
The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.

Description
In JavaScript, arrays aren't primitives but are instead Array objects with the following core characteristics:

1. JavaScript arrays are resizable and can contain a mix of different data types. 
(When those characteristics are undesirable, use typed arrays instead.)

2.JavaScript arrays are not associative arrays and so, array elements cannot be accessed using 
arbitrary strings as indexes, but must be accessed using nonnegative integers 
(or their respective string form) as indexes.

3.JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at 
index 1, and so on — and the last element is at the value of the array's length property minus 1.

4.JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any 
JavaScript objects create shallow copies, rather than deep copies).

 */

const myArr = [0,1,2,3,4,5]

// const myHeroes = ["Thor" , "Iron Men"]
// const myArr2 = new Array(9,8,7,6,5)
// console.log(myArr);
// console.log(myArr[1]);
// console.log(myHeroes);
// console.log(myArr2)

// ******* Array Methods ******

// myArr.push(6) // new value 6 is added in the Array
// myArr.push(7) // new value 7 is added in the Array
// myArr.pop() // removes the last value in Array

// myArr.unshift(9) // new value 9 added at the beginning in Array
// myArr.shift() // removes value

// console.log(myArr.includes(8));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log( typeof newArr);

// Slice & Splice 

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);