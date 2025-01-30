// const name = "histesh"
// const repoCount = 50
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// const max = 100;
// const min = 80;
// console.log(Math.floor(Math.random() * (max - min + 1) + min));
// let newDate = new Date();
// console.log(newDate);
// console.log(newDate.toLocaleDateString())
// let myTimeStamp = Date.now();
// // console.log(Math.floor(myTimeStamp/1000));
// let date1 = new Date("2023-01-1T00:00:00")
// let date2 = new Date("2023-01-2T00:00:00")
// console.log(date1);
// console.log(date2);


let  arr = [1,3,45,6,6];
// console.log( arr)
// arr.push(96);
// console.log(arr)
// arr.pop(0)
// console.log(arr)
// arr.unshift(9);
// arr.shift();
// console.log(arr)
// const newArr = arr.join();
// console.log(newArr)
// const arr2 = new Array(1,2,3,4);
// console.log(typeof arr2);


const marvelHeros = ["thor","ironman","spiderman"]
const dcHeros = ["superman","batman","flash"]
// marvelHeros.push(dcHeros);
// const bothArray = marvelHeros.concat(dcHeros);
// console.log(bothArray);
// const allNewHeros = [...marvelHeros, ...dcHeros];
// console.log(allNewHeros);
// const newArray = [1,2,3,4,5,[6,7,8,9],[3,2,32,[23,233]]];
// const ussableAnotherArray = newArray.flat(Infinity);
// console.log(ussableAnotherArray);

// const Arr = [1,2,3];
// console.log(Array.isArray(Arr)); 
// console.log(Array.from("histesh"));
// console.log(Array.from({}));

const mySbl = Symbol("key1")
const JsUsers = {
    name: "Hitesh",
    [mySbl]:"key2",
    age: 28,
    location:"Jaipur",
    email:"Histesh@gmail.com",
    isLoggesfIn:false,
    lastLoginDays:["Monday","Saturday"]
}
// console.log(JsUsers);
// console.log(JsUsers["name"]);
// console.log(JsUsers[mySbl]);
// JsUsers.email = "hitesh@chatgpt.com";
// Object.freeze(JsUsers);
// JsUsers.email = "hitesh@google.com";
// console.log(JsUsers);

// JsUsers.greeting = function(){
//     console.log("Hello JS Usres");
// }
// console.log(JsUsers.greeting());


// const TinderUser = new Object();
const TinderUser = {};
TinderUser.id = "123abc";
TinderUser.name = "Sammy";
TinderUser.isLoggedin = false;


// console.log(TinderUser);

const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Hitesh",
            lastname:"choudhary"
        }
    }
}
// console.log(regularUser.fullname?.userfullname.firstname)
const Obj1 = {
    1:"a",
    2:"b"
}
const Obj2 = {
    3:"c",
    4:"d"
}
// const Obj3 = {Obj1,Obj2}
// const Obj3 = Object.assign({},Obj1,Obj2);
const Obj3 = {...Obj1,...Obj2}
// console.log(Obj3);

const Users = [
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:2,
        email:"s@gmail.com"
    }
]
// console.log(Users[0].email)
// console.log(TinderUser);
// console.log(Object.keys(TinderUser));
// console.log(Object.values(TinderUser));
// console.log(Object.entries(TinderUser));
// console.log(TinderUser.hasOwnProperty("isLoggedin"));

const course = {
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"Hitesh"
}
const {courseInstructor: instructor} = course;
// console.log(instructor);

// {
//     name:"hitesh",
//     coursename:"js in hindi",
//     price:"free",
// }

function calculateCartPrice(num1){
    return num1;
}
// console.log(calculateCartPrice(100));

const users = {
    name:"hitesh",
    price:999,
    welcomeMessage:() =>{
        console.log("hello");
    }
}
// console.log(users.welcomeMessage);

const arrr = [1,2,3,4,5,6,7,8,9];
// let  newarr = [];
// for(let i=0;i<arrr.length;i++){
//     newarr.push(arrr[i]*2);
// }
// console.log(newarr);
// function transform(i){
//     return i*2;
// };
// console.log(arrr.map((i) => {
//     return i*3;
// }))

const input = [1,2,3,4,5];
let newArr = [];
// for(let i=0;i<input.length;i++){
//     if(input[i]%2==0){
//         newArr.push(input[i]);
//     }
// }
// console.log(newArr);
// console.log(input.filter((i) => {i%2==0}));

// function updateClock(){
//     let time = new Date();
//     let hours = time.getHours();
//     let minutes = time.getMinutes();
//     let seconds = time.getSeconds();

//     hours = (hours<10)? "0"+hours:hours;
//     minutes = (minutes<10)? "0" + minutes:minutes;
//     seconds = (seconds<10)? "0" + seconds:seconds;

//     let currentTime  = hours + ":" + minutes + ":" + seconds;
//     console.log(currentTime);

    
// }
// setInterval(updateClock, 1000);
// updateClock();

// Promise
