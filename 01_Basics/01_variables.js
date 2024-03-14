const accountId = 122345
let accountEmail = "gunjan@gmail.com"
var accountPassword = "abc345"
accountCity = "Jaipur"
let accountState;

// accountId = 2   //not allowed
accountEmail = "gun@mail.com"
accountPassword = "688778ndk"
accountCity = "Delhi"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
//console.log(accountId)
/*
Prefer not to use var because of issue in block scope
and functional scope
*/