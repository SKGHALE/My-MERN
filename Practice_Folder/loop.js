// For Loop Method 1:
for (let i = 0; i <= 10; ++i) {
  // console.log(i);
}

// Method 2:
for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    // console.log("5 is there");
  }
  // console.log(element);
}

// Method 3:
for (let i = 0; i <= 10; i++) {
  if (i == 5) {
    // console.log("5 is there");
  }
  // console.log(i);
}

// Inner and Outer Loop
for (let i = 0; i <= 10; i++) {
  // console.log(`outer loop is ${i}`);
  for (let j = 0; j <= 5; j++) {
    // console.log(`inner loop is ${j} and outer loop is ${j}`);
    // console.log(i + "*" + j + "=" + i * j);
    // console.log("*");
  }
}

// For loop with Array
let myArray = ["ironman", "batman", "superman", "saheb"];
for (let i = 0; i < myArray.length; i++) {
  // console.log(myArray[i]);
}

let myArray1 = ["ironman", "batman", "superman", "saheb"];
for (let i = 0; i < myArray1.length; i++) {
  console.log(myArray1);
}

// Method 4: print 'Hello World'
for (i = 0; i <= 10; i++) {
  const print = "Hello World";
  // console.log(print);
}

for (i = 0; i <= 10; i++) {
  if (i < 5) {
    console.log("Hello World");
  } else {
    console.log("Awsome");
  }
}

// Break and Continue:
for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    console.log("5 is there");
    break;
  }
  console.log(element);
}

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    console.log("5 is there");
    continue;
  }
  console.log(element);
}
