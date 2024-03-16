// ["", "", ""]
// [{}, {}, {}]

// for of loop : print values directly
const arr = [1, 2, 3, 4, 5]

for (const num of arr){
    //console.log(num);
}

const greetings ="Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`);
}

//maps:key,value pair, remembers original insertion order of keys unlike objects, unique values, type of object
const map = new Map()
map.set('IN' , "India")
map.set('USA', "United States Of America")
map.set('Fr', "France")
map.set('IN' , "India")

console.log(map);

for (const [key,value] of map) {        //destructuring
    console.log(key, ':-', value);
    
}

//using for of loop in object 
//for of loop does not work in object as objects are not iterable so we will use for in loop we make objects iterable
// const myObject = {
//     'game1' : 'NFS',
//     'game2' : 'Spiderman'
// }
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }