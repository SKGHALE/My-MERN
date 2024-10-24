// Stack (primitive), Heap (Non-primitive)

// Stack:

let  myName="Saheb"

anotherName= myName
 anotherName= "Sayantani"
 
console.log(anotherName);

// Stack always gives duplicate value
// Heap always gives reference value

// Heap:

let userOne={
    email:"saheb@google.com",
    userId:"1234"
}
console.log(userOne)

let userTwo=userOne
// console.log(userTwo)
userTwo={
    email:"Sayantanimicrosoft.com",
    userId:"237"
}
//  console.log(userTwo)

 userTwo.email="Raja"
 console.log(userTwo)