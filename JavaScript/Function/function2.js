// function calculateCartPrice(...num1){
//     return num1
// }
// console.log(calculateCartPrice(200,400))

function calculateCartPrice(val1,val2,...num1){
    return num1
}
// console.log(calculateCartPrice(200,400,300,400,500))

// Function With Object:type1
// const user ={
//     username:"saheb",
//     price:199
// }
//
// function handleObject(anyObject){
//     return(`username is ${anyObject.username} and price is ${anyObject.price}`)

// }
// console.log(handleObject(user))

// Function With Object: type2
function handleObject(anyObject){
    console.log(`${anyObject.username},${anyObject.price}`)
}
handleObject({
    username:"sahwb",
    price:199
})

// Function with Array:
// const myArray=[200,400,100]

// function returnSecondValue(getArray){
//     return getArray[1]
// }
// console.log(returnSecondValue(myArray))

// Function with Array: type2
function returnSecondValue(getArray){
    return getArray
}
console.log(returnSecondValue([100,200,300]))
