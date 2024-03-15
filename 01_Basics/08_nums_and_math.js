//--------------------------Numbers-----------------------------------
const score = 400
//console.log(score);

//explicitly define datatype
const balance = new Number(100)
//console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));    //no. of digits to appear after the decimal point

const otherNumber = 123.87690
//console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN'));


// -------------------Maths----------------------

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));

// console.log(Math.ceil(4.2));    
// console.log(Math.floor(4.9));
// console.log(Math.sqrt(16));

// console.log(Math.min(4,5,7,2,3,2));
// console.log(Math.max(4,3,7,8,9));

console.log(Math.random()); // comes between 0 and 1
console.log((Math.random()*10) + 1);    // +1 : to avoid 0 case
console.log(Math.floor(Math.random()*10) + 1); //floor : round of to lowest value

//in case of max and min
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);