const accountId = 21345
let accountEmail = "ad@gmail.com"
var accountPassword = "212132"
accountCity = "pune"

// accountId = 45678  //not allowed

accountEmail = "adn@gmail.com"
accountPassword = " 12345"
accountCity = "Nagpur"
let accountState;

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
