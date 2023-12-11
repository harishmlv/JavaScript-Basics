/**************** DATE ******************** 
JavaScript Date objects represent a single moment in time in a platform-independent format. 
Date objects encapsulate an integral number that represents milliseconds 
*/

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate); // output = Object type

let myCreatedDate = new Date (2023, 0, 23)
// console.log(myCreatedDate.toDateString());

let myCreatedDate2 = new Date (2023, 0, 23, 10, 33)
// console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date ("2023-01-17")
// console.log(myCreatedDate3.toLocaleString());

let myCreatedDate4 = new Date ("09-11-2023")
// console.log(myCreatedDate4.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getDate()+1);
console.log(newDate.getDay()+1);
console.log(newDate.getMonth()+1);

// `${newDate.getDay()} and the time is`

newDate.toLocaleString('default',{
    weekday: "long"
})
