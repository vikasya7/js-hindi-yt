// const tinderuser =new Object() // singleton object
const tinderuser={} // non singleton object

 tinderuser.id="123abc"
 tinderuser.name="zap"
 tinderuser.isloggedin= false

// console.log(tinderuser);
const regularuser={
    email:"some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "vikas",
            lastname:"yadav"
        }
    }
}
// console.log(regularuser.fullname.userfullname.firstname);

const obj1= {
    1:"a",
    2:"b"
}
const obj2={3:"a", 4:"b"}

// const obj3={obj1, obj2}
// const obj3= Object.assign({},obj1,obj2)// empty object is target

const obj3={...obj1,...obj2}
// console.log(obj3);

const users=[
    {
        id:1,
        email:"bhg@gmail.com"
    },

    {
        id:1,
        email:"bhg@gmail.com"
    },

    {
        id:1,
        email:"bhg@gmail.com"
    }
]
users[0].email
// console.log(tinderuser);

// console.log(Object.keys(tinderuser)); //gives an array
// console.log(Object.values(tinderuser));// it also gives an array
// console.log((Object.entries(tinderuser)));// array ke andar array

// console.log(tinderuser.hasOwnProperty('isloggedi'));


const course={
    coursename:"js ",
    price:"999",
    teachername:"vikas"
}
//course.teachername
const {teachername}=course
console.log(teachername);

// {
//     "name":"vikas",
//     "coursename":"jss", // for json
//    " price":"free"     it is api
// }

// [
//     {
             
//     }.   api also come in form of arrays
// ]








