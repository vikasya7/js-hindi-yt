const marvel_heroes=["thor","ironman","spiderman"]
const dc=["superman","flash","batman"]
// marvel_heroes.push(dc)
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// const allheroes=marvel_heroes.concat(dc) creates a new array does not modify original array
// console.log(marvel_heroes);
// console.log(allheroes);

// const all_newheroes=[...marvel_heroes, ...dc]
// console.log(all_newheroes);


// const anotherarray=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

// const realarray=anotherarray.flat(Infinity)
// console.log(realarray);



console.log(Array.isArray("vikas"));
console.log(Array.from("vikas"));// creates an array
console.log(Array.from({name: "vikas"}))// interesting case

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1, score2, score3));

