//object literals
const mysym= Symbol("key1")

const jsuser={
    name:"Saheb",
    [mysym]:"myKey1", //This is the correct way to declare Symbol
    age:22,
    location:"Kolkata",
    email:"sahebkumarghale@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Sunday"]
}

// console.log(jsuser.name);
// console.log(jsuser["name"]); Write way to use object declare
//console.log(typeof jsuser[mysym]);
//console.log(jsuser[mysym]);

jsuser.email="saheb@gpt.com"
//console.log(jsuser)

//Object.freeze(jsuser)
jsuser.email="nicx@123.com"
//console.log(jsuser);

jsuser.greeting=function(){
    console.log("Hello JS user");
}

// console.log(jsuser.greeting());

jsuser.greetingtwo=function(){
    console.log(`Hello",${this.name}`)
}
console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());