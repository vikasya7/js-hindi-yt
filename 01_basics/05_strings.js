const name="vikas"
const repocount= 50

// console.log(name + repocount +"value");
console.log(`hello my name is ${name} and my repo count is ${repocount}`); // modern way 

const gamename= new String('vikas-vk')
console.log(gamename[0]);
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf('k'));

const newString =gamename.substring(0,4)// 4 not included
console.log(newString);


const anotherString=gamename.slice(-7,4)
console.log(anotherString);


const newStringOne=" vikas   "
console.log(newStringOne.trim());

const url="https://vikas.com/vikas%20yadav"
console.log(url.replace('%20', '-'));
console.log(url.includes('vikas'));

console.log(gamename.split('-'));










