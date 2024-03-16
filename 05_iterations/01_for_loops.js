// for loop 

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        //console.log("5 is the best number");
    }
    //console.log(element);
    
}
//console.log(element);

for (let i = 1; i <=10 ; i++) {
    //console.log(`Outer Loop ${i}`);
    for (let j = 1; j <= 10; j++) {
        //console.log(`Inner Loop ${j} and Outer Loop ${i} `);
        //console.log(i + '*' + j + ' = ' + i*j);
   
    }
    
}
let myArr = ["ironman", "thor", "batman"]
console.log(myArr.length);
for(let index = 0; index<myArr.length; index++){

    const element = myArr[index]
    console.log(element);  
    
    //or 
    //console.log(myArr[index]);
}

// break and continue
//break: breaks the control flow, jumps out of a loop
//continue : skip one loop iteration, when an condition occur

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}