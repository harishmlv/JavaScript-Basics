// If the Promise is stored in variable

const promiseOne = new Promise(function(resolve, reject){
    // Do an Async task
    // DB calls, Cryptography, Network
    setTimeout(function() {
        console.log('Async task 1 is completed');
        resolve()
    }, 1000);
})

// If the Promise is not stored in variable we can directly use .then

promiseOne.then(function(){
    console.log('Promise 1 Consumed');
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})