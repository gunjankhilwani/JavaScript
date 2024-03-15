// Stack memory (Primitives)
let myYotubename = "gunjancodes"

let anothername = myYotubename;
anothername = "chaiaurcode" //does not change original value, you will get the copy

console.log(myYotubename);
console.log(anothername);

// Heap memory (Non Primitives)
let userOne = {
    email : "user@google.com",
    upi : "userybl"
}
let userTwo = userOne;      //reference; changes done in the original value itself

userTwo.email = "gunjan@google.com";
console.log(userOne.email);
console.log(userTwo.email);

// in heap, they both will get the same refernce