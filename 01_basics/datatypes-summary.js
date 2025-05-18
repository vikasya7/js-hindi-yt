// primitive

// 7 types: String, Number, Boolean,null, undefined,Symbol, BigInt

const score=100
const scorevalue=0.3

const isLoggedin=false
const outsidetemp=null
let useremail=undefined // or let useremail;

const id=Symbol('123')
const anotherid=Symbol('123')

console.log(id==anotherid);// false

// const bignumber=2679386385335933568n






// Reference (non primitive)

// arrays, objects, Functions


const heroes=["shaktimaan", "naagraj", "doga"]
let myobj={
    name:"vikas",      // objects
    age:22,
}

const myfunction=function(){ 
    console.log("hello");
    
}
console.log(typeof myfunction);

// bigint datatype-->undefined for null it is object
// datatype for function-->object function
// datatype for arrays-->object 