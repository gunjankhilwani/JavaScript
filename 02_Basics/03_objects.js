// we can declare object in two ways : 
// As literals and As Constructor

//  Singleton : when we make object using constructor
// object.create


const mySym = Symbol("mykey1");
//Object literals; Key Value Pair
const JsUser = {
    name : "Gunjan",
    "full name" : "Gunjan Khilwani",
    [mySym] : "mykey1",         // if u want to refer symbol then write like this otherwise mySym:"mykey1" is also fine(treats as string)
    age : 22,
    location : "Bhopal",
    email : "gunjan@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Friday"]
}

//to access object
console.log(JsUser.email);
console.log(JsUser["email"]);   //better way
console.log(JsUser["full name"]);

console.log(JsUser[mySym]);
//console.log(JsUser.mySym);  // if we access like this to symbol it gives type String which is wrong
//console.log(typeof JsUser.mySym);



JsUser.email = "gunjan@ai.com"
//Object.freeze(JsUser)   // freeze object means the object no longer able to change
JsUser.email = "gunjan@chatgpt.com"
console.log(JsUser);

//function
JsUser.greeting = function() {
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

//this keyword : when u want to refer same object 