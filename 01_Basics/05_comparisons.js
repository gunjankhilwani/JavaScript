// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0); //equality check
console.log(null >= 0); //comparison operator

//comparison operator and equality check work differently
//comparison operator convert null to a number, treating 
//it as 0, thats why null >= 0 is true and null > 0 is false

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === ; strict, checks two operand are equal and are of same datatype too

console.log("2" === 2);