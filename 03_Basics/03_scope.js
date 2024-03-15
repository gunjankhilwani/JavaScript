// var : has global scope
//let and const : has block scope


//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    //console.log("INNER: ", a);
    
}

// console.log(a);
//console.log(b);
// console.log(c);

//Nested Scope
function one(){
    const username = "gunjan"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    //console.log(website);

    //two()
}
//one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// +++++++++++++ INTERESTING +++++++++++++

//way 1: declare function

console.log(addOne(5))
function addOne(num){
    return num+1
}

//way 2: declare function

console.log(addTwo(5))  //error
const addTwo = function(num){
    return num+2
}
// console.log(addTwo(5))   //no error