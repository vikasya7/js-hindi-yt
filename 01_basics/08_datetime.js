// dates
let mydate= new Date();
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleDateString());
// console.log(typeof mydate);

// let mycreatedate=new Date(2023,0,23)
// let mycreatedate=new Date(2023,0,23,5,3)
// let mycreatedate=new Date("2023-01-14")
let mycreatedate=new Date("01-14-2023")
// console.log(mycreatedate.toLocaleString())
let myTimestamp = Date.now()
// console.log(myTimestamp);
// console.log(mycreatedate.getTime());
// console.log(Date.now()/1000);// to get in seconds
// console.log(Math.floor(Date.now()/1000));

let newDate= new Date()
console.log(newDate);
console.log(newDate.getFullYear());
console.log(newDate.getMonth()+1);

newDate.toLocaleString('default', {
    weekday: "long"
    
})