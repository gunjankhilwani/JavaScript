// reduce 
//way 1: to write
const myNums =[1,2, 3, 4]
// const myTotal = myNums.reduce( (acc, currval)=>{
//     console.log(`accumulator ${acc} and Current Value ${currval}`);
//     return acc + currval

// }, 0)   
// console.log(myTotal);

//way 2: to write
// const myTotal = myNums.reduce( (acc, currval)=>(acc + currval), 0) 
// console.log(myTotal);

//way 3: to write
const myTotal = myNums.reduce( function (acc, currval){
        console.log(`accumulator ${acc} and Current Value ${currval}`);
        return acc + currval
    
    }, 0)   
    console.log(myTotal);



//another example

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
   
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay)


    