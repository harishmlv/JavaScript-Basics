const accountId = 14453
let accountEmail = "harish@gmail.com"
var accountPassword = "12345"
accountCity = "Indore"
let accountState;

// accountId = 2 // Not allowed

accountEmail = "herry@gmail.com"
accountPassword = "212121"
accountCity = "Khargone"

console.log(accountId);
/* 
Prefer not to use var 
because of issue in block scope and functional scope
*/ 
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])