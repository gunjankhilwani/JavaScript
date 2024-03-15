// singelton object
//const tinderUser = new Object()

//non singelton object or literal object
const tinderUser = {}

tinderUser.id = "1234ba"
tinderUser.name = "Tommy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

//object inside object 
const regularUser = {
    email : "abc@gmail.com",
    fullname : {
        userfullname : {
            firstname : "gunjan",
            lastname : "Sen"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "c", 4 : "d" }

// assign :copy the values and properties from one or more source objects to a target object
//const obj3 = Object.assign({}, obj1,obj2)

//spread
const obj3 = {...obj1, ...obj2} //better & easy
//console.log(obj3);

console.log(tinderUser);
console.log(Object.keys(tinderUser));   //Output comes in Array Datatypes
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));


//Array Of Objects
// const users = [
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
// ]

// users[1].email
// console.log(users);