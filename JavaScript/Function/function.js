function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("H");
    console.log("E");
    console.log("B");
}
// sayMyName()

function addTwoNumber(number1, number2){
    return (number1+number2)
}
// console.log(addTwoNumber(3,3));
// console.log("Result",addTwoNumber(3,3));

function loginuserName(username){
    return `${username} justlogged in`
    }
// console.log(loginuserName("Saheb"));

function loginuserName(username){
    if(!username){ //(username===undefined) This is the two way of declare "Undefined"
    console.log("Please Enter Your Name")
    return
    }
    return `${username} justlogged in`
    }
console.log(loginuserName());

// function loginuserName(username="Sam"){
//     if(username===undefined){
//     console.log("Please Enter Your Name")
//     return
//     }
//     return `${username} justlogged in`
//     }
//console.log(loginuserName());


