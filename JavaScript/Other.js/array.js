const myarr=[0,1,2,3,4,5]
const myHero=["Captain America","ironMan","Thor"]
//console.log(myarr);
//console.log(myHero[1]);

//Array Method:-
//Push:
//console.log(myHero.push("Vision"));
//console.log(myHero);

//pop:
//console.log(myHero.pop(3));
//console.log(myHero);

// const newArr=myarr.join()
// console.log(myarr);
// console.log(newArr);
// console.log(typeof newArr);

const myn1=myarr.slice(1,3)
// console.log("A",myn1);
// console.log(myarr);

// const myn2=myarr.splice(2,3)
// console.log("B",myn2);
//  console.log(myarr);

// const marvel_heros =["flash","thor","iron man"]
// const dc_heros=["captain","ww","dd"]

//marvel_heros.push(dc_heros)
//console.log(marvel_heros)

//marvel_heros.concat(dc_heros)
//console.log(marvel_heros)

// const newHero=marvel_heros.concat(dc_heros)
// console.log(newHero);

// const all_new_heros=[...marvel_heros,...dc_heros] //This the one of the way of merge a two array.s
// console.log(all_new_heros)

// const ee=[1,2,[3,4,5,[67,8,54,6],4],5,[6,4,6],7,4]
// console.log(ee)
// console.log(ee.flat(Infinity));

// console.log(Array.isArray("Saheb"));
// console.log(Array.from("Saheb"));

let score1=100
let score2=200
let score3=300

// console.log(Array.of(score1,score2,score3));

// Multiple value to unique value
const arr=[1,2,3,4,6,2,3,4,1,6,8,6,9,6,7,5]
const uniqueArr=[...new Set(arr)];
console.log(uniqueArr);