// For each = high order array loops

const coding = [ "js", "ruby","java", "python","cpp" ]

// coding.forEach (function (val) {
//     console.log(val);
// })

// Using Arrow function

// coding.forEach( (val) =>{
//     console.log(val);
// })

// function printMe(item) {
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach( (item,index,arr)=>{
//     console.log(item,index,arr);
// })

const myCoding = [
    {
        languageName : "Javascript",
        languageFileName : "js"
    },
    {
        languageName : "Java",
        languageFileName : "jva"
    },
    {
        languageName : "python",
        languageFileName : "py"
    }
]
myCoding.forEach( (item) =>{
    //console.log(item.languageName);
    console.log(item.languageFileName);
})