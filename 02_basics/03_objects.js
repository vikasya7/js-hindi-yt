// singletone

// object literals


const mysym= Symbol("key1")

const  Jsuser ={
    name:"vikas",
    "full name":"vikas yadav",
    [mysym]:"key1",  
    age:1,
    location : "lucknow",
    email: "vy@gmail.com",
    isLoggedIn: false,
    lastloggindays:["monday","saturdays"]
}
// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["full name"]);
// console.log(Jsuser[mysym]);// we will not use inverted commmas

Jsuser.email="vikaschatgpt@.com"
// Object.freeze(Jsuser)
Jsuser.email="vvv@.com"
// console.log(Jsuser["email"]);
// console.log(Jsuser);

Jsuser.greeting= function(){
    console.log("hello js user");
    
}
console.log(Jsuser.greeting);
Jsuser.greetingtwo= function(){
    console.log(`hello js user ,${this.name}`);
    
}
console.log(Jsuser.greetingtwo());

