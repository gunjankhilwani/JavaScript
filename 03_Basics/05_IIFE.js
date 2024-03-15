//IIFE : Immediately Invoked Function Expression

//named IIFE
(function chai(){
    console.log("DB CONNECTED");
})();

//IMP: If You want to write two IIFE together then use ; at the end of the first IIFE.

//unnamed IIFE
//parameter passed here
( (name) => {
    console.log(`DB CONNECTED AGAIN ${name}`);
})("gunjan")

// ( () => {
//     console.log("DB CONNECTED AGAIN");
// })()

// (function code(){
//     console.log("DB CONNECTED AGAIN");
// })()