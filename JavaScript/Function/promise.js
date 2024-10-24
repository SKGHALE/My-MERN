// const promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log('ABC')
//         resolve()
//     }, 1000);

// })

// promise.then(function () {
//     console.log("promise consumed")
// })

// Method @2:
// const promiseTwo = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("API REQUEST COMING");
//         resolve()
//     }, 1000);
// }).then(function () {
//     console.log("API  REQUEST SOLVED");
// })

//Method @3:
// const promiseThree = new Promise((resolve, reject) => {
//   setTimeout(function () {
//     resolve({
//       userName: "Sahebb Kumar Ghale",
//       email: "sahebkumarghale@gmail.com",
//     });
//   }, 1000);
// }).then((user) => {
//   console.log(user.userName);
//   //console.log(user);
// });

// Method @4:
// const promiseFour = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = false;
//         if (!error) {
//             resolve({ idCard: '2341', Name: 'Saheb' })
//         } else {
//             reject('Error 404')
//         }
//     }, 1000)
// })
//     .then((user) => {
//         // console.log(user.idCard);
//         console.log(user);
//     })
//     .catch((err) => {
//         console.log(err);
//     })
//     .finally(()=>console.log("finally resolved"))

// Fetch Method @1: Replacement of .then and .catch method :
// async function  getallUsers(){
//     try {
//         const response = await fetch('https://dummyapi.online/api/movies')
//         const data = await response.json()
//         console.log(data);
//     }
//     catch (error) {
//         console.log('E:',error);
//     }
// }
//  getallUsers()

//Fetch Method @2: Easy for Me:
// fetch('https://dummyapi.online/api/movies')
// .then((response)=>{
//     return response.json()
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log(error);
// })
