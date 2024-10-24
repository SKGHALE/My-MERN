const arr = [1, 2, 3, 4, 5, 6];
for (const num of arr) {
  // console.log(num);
}
const greetings = "Hello World!";
for (const arr of greetings) {
  console.log(`number1 ${arr}`);
  console.log(`number1 ${greetings}`);
  // arr = arr + 1;
}

// Maps
const map = new Map();
map.set("IN", "India");
map.set("US", "America");
map.set("Fr", "France");
console.log(map);

for (const [key, value] of map) {
  console.log(key, ":-", value);
}

// const myObject = {
//   saheb1: "Nicx",
//   sayantani1: "tusi",
// };
// for (const [key, value] of myObject) {
//   console.log(key, ":-", value);
// }

const myObject = {
  saheb1: "Nicx",
  sayantani1: "tusi",
};
for ([key, value] of Object.entries(myObject)) {
  console.log(key, ":-", value);
}
