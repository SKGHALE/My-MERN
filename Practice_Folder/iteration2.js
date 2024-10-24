const myObject = {
  js: "javascript",
  cpp: "c++",
  rb: "ruby",
  swift: "swift by apple",
};
for (const key in myObject) {
  // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "cpp", "swift"];
for (const [key] in programming) {
  console.log(programming[key]);
}

const map1 = new Map();
map1.set("IN", "India");
for ([key, value] of map1.entries()) {
  // console.log([key, ":-", value]);
}
