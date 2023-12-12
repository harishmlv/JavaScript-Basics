// Learn Singleton
// Object.create

// Object literals

// Symbol declaration 

let mySym = Symbol("key1") //use and declare this symbol in object below

const JsUser = {        // Declaration of Object 
    name : "Harish",
    "full name" : "Harish Malviya",
    [mySym] : "mykey1",    // right way to define Symbol
    age : 21,
    location : "Indore",
    email : "harish@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
}

// console.log(JsUser.email);  // Access details from object (most common way) 
// console.log(JsUser["email"]); // Access object (Right way to access) 
// console.log(JsUser["full name"]); 
// console.log(JsUser[mySym]); // right way to access Symbol = special cases like this asked in interview

JsUser.email = "harish@chatgpt.com" // easy way to change data inside object
//Object.freeze(JsUser)  // now object is freezed and cannot be changed

JsUser.email = "harish@yahoo.com" // data not changed in object
// console.log(JsUser);

JsUser.greeting = function(){     // object with function without any parameter 
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){     // object with function without any parameter 
    console.log(`Hello JS user, ${this.name} `);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());