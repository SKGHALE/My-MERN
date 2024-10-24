//const tinderUser=new Object() //This Is singleton Object
const tinderUser={}  //This Is not singleton 
tinderUser.id="1234";
tinderUser.email="saheb@12332";
tinderUser.age=18;
//console.log(tinderUser)

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));

const regularUser={
    email: "some@gmail.com",
    fullName:{
        userName:{
            firstName:"Saheb",
            lastName:"Ghale"
        }
    }
}
//console.log(regularUser.fullName.userName);

const obj1={1:"a",2:"b"}
const obj2={5:"q",6:"e"}
const obj4=Object.assign({},obj1,obj2) //This a one of the way of merge a two or more object.
//const obj3={...obj1, ...obj2}
console.log(obj4); // This the second way of merge a two or more object.

//console.log(tinderUser.hasOwnProperty('age'));

const course={
    courseName:"Web Development",
    courseFees:999,
}
//console.log(course.courseName);
// console.log(course);
const {courseName}=course //This a another way to declare a property or object
//const {courseName:sayantani}=course //This is the change of a property name

//console.log(sayantani)
