/** FOR loop
 * 
 Syntax 

 for (let index = 0; index < array.length; index++) {
    const element = array[index];
}
 */

// for (let i = 1; i <= 10; i++) {   // 1st way to print
//     console.log(i);
// }

// for (let i = 1; i <= 10; i++) {  // 2nd way to print
//     const element = i;
//     console.log(element);
// }

// for (let i = 1; i <= 10; i++) {  // Using IF condition
//     const element = i;
//     if (element == 5) {
//         console.log("5 is best number");
//     }
//     console.log(element);
// }

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop ${j} and Inner Loop ${i}`);
       //console.log(i  + ' * ' + j + ' = ' + i * j );
    }
}

// using Array

let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}
let number = 5 // print table of 5 
for (let indexNum = 1; indexNum <= 10; ++indexNum) {
    // console.log(number * indexNum);  
}

// break and continue


// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log("Detected 5");
//         break
//     }
//     console.log(`value of i is ${index}`);  
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("Detected 5");
        continue
    }
    console.log(`value of i is ${index}`);  
}
