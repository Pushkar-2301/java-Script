// singleTon

//object literals
const mysym= Symbol("Key1")
const JsUser ={
    name: "Pushkar",
    age: 23,
    [mysym]:"mykey1",
    location: "Gwalior",
    email: "Pushkar@gmail.com",
    isloggin: false,
    lastloginDays:["Monday" , "Saturday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mysym]);

JsUser.email ="Pushkar@google.com"
console.log(JsUser);
//Object.freeze(JsUser);
JsUser.email="Pushkar@lala.com"
console.log(JsUser.email)

JsUser.greeting= function(){
    console.log("Hello JS Bhai Kese ho ");
    
}
console.log(JsUser.greeting());
console.log(JsUser.greeting);
JsUser.greeting2= function(){
    console.log(`Hello JS USer, ${this.name}`);
   
}
console.log(JsUser.greeting2());







