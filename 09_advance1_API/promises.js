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


// When any data come from network
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve({username:"Herry", email:"herrymalviya@gmail.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
})

// Chaining of promise & error = .then().then().catch()

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username:"Harish", password:"hariom"})
        }
        else{
            reject('ERROR: something went wrong')
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
   console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=> console.log("The promise is either resolved or rejected"))

// Promise with Async Await syntax

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username:"Javascript", password:"123"})
        }
        else{
            reject('ERROR: Javascript went wrong')
        }
    },1000)
})

async function consumePromiseFive(){
  try {
    const response =  await promiseFive
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E:", error);
//     }
// }
// getAllUsers()

// fetch('https://jsonplaceholder.typicode.com/users')
fetch('https://api.github.com/users/harishmlv')

.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error) => console.log(error))