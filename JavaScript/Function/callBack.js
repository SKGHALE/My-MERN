// const calculate=(a,b,operation)=>{
//     return operation(a,b);
// };


// Method 1 :
// const addition=calculate(3,2,(num1,num2)=>{
//     return num1+num2;
// });
// console.log(addition);

// Method 2 :
// const divided =(a,b)=>a-b;
// const result=calculate(12,6,divided);
// console.log(result);

// Method 3 :
// const multipli=function(a,b){
//     return a*b;
// };
// const resultipi = calculate (5,5,multipli);
// // console.log(resultipi);



// const promise=setTimeout(()=>{
//     console.log("hello world");
// },1000);

// console.log("Saheb");

const data = (sec1, sec2, operation) => {
    return operation(sec1, sec2);
};

const result1 = (sec1, sec2) => sec1 + sec2;

setTimeout(() => {
    const value = data(90, 10, result1);
    console.log(value);
}, 1000); 

