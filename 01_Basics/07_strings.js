let myName = "Gunjan"
let repoCount = 20

//String Interpolation 
console.log(`Hello my name is ${myName} and my repo count is ${repoCount}`);

// String and few methods
const gameName = new String('gunjann-nnn-ns')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.indexOf('n'));
// console.log(gameName.charAt(2));

const newString = gameName.substring(0,5)       //it will print from 0th index to 4th index or (5-1)th index
console.log(newString);

const anotherString = gameName.slice(-12,3)     //can use -ve value too
console.log(anotherString);

const newStringOne = "      gunjan     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://github.com/gunjankhilwani/JavaScript"
console.log(url.replace('jan','-'));

//it finds particular string is present or not
console.log(url.includes('gunjanhfvvjv'));

console.log(gameName.split('-'));