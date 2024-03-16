//for each loop is used mpstly in arrays and in array of objects 
const coding = ["js", "rb", "py", "java", "python"]

// coding.forEach( function (val) {
//     console.log(val);

// })

//for each using arrow fn
// coding.forEach( (item) => {
//     console.log(item);

// })

// function printMe(item){
//     console.log(item);
// }
//coding.forEach(printMe)


// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })


// array of object
const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "python",
        languageFileName : "py"
    },
    {
        languageName : "java",
        languageFileName : "java"
    }
]
myCoding.forEach((vals) => {    
    console.log(vals.languageName)
    //console.log(vals.languageFileName)
    console.log(vals);
    //console.log(typeof vals);
})