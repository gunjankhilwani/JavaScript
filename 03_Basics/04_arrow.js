const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        //console.log(this);    
    }

}
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

//console.log(this);

//way 1: declare fn
// function chai(){
//     let username = "hitesh"
//     console.log(this.username); //this keyword doesn't work inside function 
//     console.log(this);  //imp: alone this keyword refers to the global object
// }
    
// chai()

//way 2: declare fn
// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);  //undefined
// }
// chai()

//way 3: declare fn; Arrow function
// const chai = () =>{
//     username = "gunjan"
//     console.log(this);   //this keyword doesn't work inside arrow function too ,output empty object: {}
// }
// chai()

//explicit return
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

//implicit
//const addTwo = (num1, num2) => ( num1 + num2 )
//console.log(addTwo(3,5));

//for object return
const addTwo = (num1, num2) => ({username : "gunjan"})
console.log(addTwo(3,5));