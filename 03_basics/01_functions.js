function sayMyName() {
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("I");
    console.log("S");
    console.log("H");
}

// sayMyName() // Function Execute

// function addTwoNumbers(number1, number2) {  // number1, number2 are *PARAMETERES*
//     console.log(number1 + number2);
// }
// addTwoNumbers(3, 4)  // 3, 4 are *ARGUMNETS*

function addTwoNumbers(number1, number2) {  // number1, number2 are *PARAMETERES*
    // console.log(number1 + number2); // instead of console.log use below format

    let result = number1 + number2
    return result 

    // return = number1 + number2 2nd way to return output without creating third variable

    console.log("Herry"); // nothing prints after result
}
const result = addTwoNumbers(3, 5)
// console.log("Result is", result);

function loginUserMessage(username = "Sunny") {
    if(!username) {
        console.log("Please Enter a Username");
        return
    }
    return `${username} Just Logged In`
}
console.log(loginUserMessage("Herry"));