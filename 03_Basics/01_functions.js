function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
// sayMyName()
// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

//good way/readable
function addTwoNumbers(number1, number2){
    // let result = number1+number2;
    // return result;
    return number1+ number2
}
const result = addTwoNumbers(3,5);
console.log("Result : ", result);
//console.log(addTwoNumbers(3,4));



function loginUserMessage(username ="sam"){
    if(!username){      //or if(username===undefined)  means if username is not there then run this block of code
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in `
}
// console.log(loginUserMessage("gunjan"));
//console.log(loginUserMessage());
console.log(loginUserMessage("gunjan"));