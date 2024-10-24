// window is a global object
// this is not use in function
const user={
    userName:"Saheb",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.userName}`);
    }
}

// user.welcomeMessage()
user.welcomeMessage("sam")

// ******************************************************************************

// Arrow Function:

// const addTwo=(num1,num2)=>{
//     return num1+num2
// }

// const addTwo=(num1,num2)=> num1+num2

// const addTwo=(num1,num2)=> (num1+num2)
const addTwo=(num1,num2)=> ({one:"2000"})
  
console.log(addTwo(3,4));