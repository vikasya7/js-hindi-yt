// array

const myarray=[0,1,2,3,4,5, true, "vikas"]
const myheroes=["vikas", "yadav "]
const myarray2=new Array(1,2,3,4)
// console.log(myarray[7]);


// array methods
// myarray.push(6)
// console.log(myarray);
// myarray.pop()
// console.log(myarray);

myarray.unshift(9)
// console.log(myarray);
myarray.shift()
// console.log(myarray);

// console.log(myarray.includes(4));
// console.log(myarray.indexOf(19));
// console.log(myarray.indexOf(4));

// const newArry=myarray.join()  // convert into string
// console.log(myarray);
// console.log(typeof newArry); // string

// slice, splice

console.log("A", myarray);

const myn1=myarray.slice(1,3)
console.log(myn1);

console.log("B", myarray);

const myn2=myarray.splice(1,3) // also updates the value in original array and also it includes the last range
console.log(myn2);
console.log("C", myarray);










