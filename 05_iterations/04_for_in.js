// for objects we mostly use for- in loop 
const myObject = {
    js : 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
for (const key in myObject) {
    //console.log(key);     //key
   // console.log(myObject[key]); //values
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

// for in loop in arrays
const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    //console.log(key);       //prints keys only
    console.log(programming[key]);  //by this, values can be print
}

// for in loop in map
// const map = new Map()       //map is not iterateable
// map.set('IN' , "India")
// map.set('USA', "United States Of America")
// map.set('Fr', "France")
// map.set('IN' , "India")

// for (const key in map) {
//      console.log(key);  
// }