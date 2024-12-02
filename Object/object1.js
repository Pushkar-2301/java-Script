// const tinderUser= new Object()  #SingleTon Object
const tinderUser={} //non Singleton
tinderUser.id="101a"
tinderUser.name="Sammy"
tinderUser.isloggedin=false

//console.log(tinderUser);
const regularUser={
email: "xyz@gmail.com",
fullname:{
    userfullname: {
        firstname :"Pushkar",
        lastname : "Sikarwar"
    }
}

};
const users = [
    {
        id: 1,
        email: "Pushkar@gmail.com"
    },
    {
        id: 2,
        email: "Pushkar@gmail.com"
    },
    {
        id: 3,
        email: "Pushkar@gmail.com"
    }
];

users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); // converts objects into array of keys
// console.log(Object.values(tinderUser)); //converts objects into array of values
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isloggedin'));

//Object Destructure

const course={
    coursename : "javaScript",
    price : "999",
    teacher : "Pushkar"

}
//course.teacher
const {teacher}= course;
console.log(teacher);
const {teacher : t}= course;
console.log(t);







