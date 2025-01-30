// var a=1;
// console.log(a);

// let a=2;
// a=1;
// console.log(a); 

// const b=1;
// console.log(b);

// let firstname="harkirat";
// let age=18;
// let ismarried=false;
// console.log("this persons name is " + firstname + "and age is " + age + " is married? " + ismarried);

// let n=10;
// for(let i=0;i<n;i++)
// {
//     console.log("hello");
// }

// const age=[21,22,23,24,25];
// for (let i=0;i<age.length;i++)
// {
//     if (age[i]%2==0)
//     {
//         console.log(age[i]);
//     }
// }


// const personarr=["harkirat","raman","priya"];
// const genderarr=["male","male","female"];
// const n=personarr.length;
// for(let i=0;i<n;i++)
// {
//     if(genderarr[i]=="male")
//     {
//         console.log(personarr[i]);
//     }
// }

// const user1=
// {
//     person:"harkirat",
//     gender:"male"
// }
// console.log(user1["gender"]);

// const objectarr=[
//     {
//         firstname:"harkirat",
//         age:23
//     },
//     {
//         firstname:"raman",
//         age:24
//     }
// ]
// console.log(objectarr[1]["age"]);

// function sum(a,b){
//     return a+b;
// }
// const v=sum(1,3);
// console.log(v);

// function sum(num1, num2,functocall) {
//     let result = num1 + num2;
//     functocall(result);
// }

// function displayResult(data) {
//     console.log("Result of the sum is : " + data);
// }

// function displayResultPassive(data) {
//     console.log("Sum's result is : " + data);
// }

// You are only allowed to call one function after this
// How will you displayResult of a sum
// const ans=sum(1,2,displayResult);


// function findIndexOf(str,target){
//     console.log("original String:",str);
//     console.log("index:",str.lastIndexOf(target));
// }
// findIndexOf("Hello World World World","d");
// function findLengthOfStr(str){
//     console.log(str.length);
// }
// findLengthOfStr("Hello i am Yashdeep Chauhan and i am Learning from cohort 2.0");

// function square(n){
//     return n*n;
// }
// function sumOfSquare(a,b){
//     const var1=square(a);
//     const var2=square(b);
//     return var1+var2;
// }
// console.log(sumOfSquare(2,2));


// const fs = require('fs');

// // my own asynchronous function
// function kiratsReadFile(cb) {
//   fs.readFile("a.txt", "utf-8", function(err, data) {
//     cb(data);
//   });
// }

// function onDone(data) {
//   console.log(data);
// }
// kiratsReadFile(onDone);

// const obj={
//   key1:"value1",
//   key2:"value2",
//   key3:"value3"
// };
// console.log(obj);

// const express = require('express');
// const app = express();
// app.listen(3000);
// function sum(n){
//   let ans=0;
//   for(let i=0;i<n;i++){
//     ans=ans+i;
//   }
//   return ans;
// }
// app.get("/", (req,res)=>{
//   // res.send("https");
//   const n = req.query.n;
//   const ans = sum(n);
//   res.send("Value Of N Is = "+ans);
// })

// const express = require("express");
// const app = express();
// app.listen(3000);
// const user = [{
//   name:"john",
//   kidneys:[{
//     healty:false
//   }]
// }];
// app.get("/",(req,res)=>{
//   const johnkidneys = user[0].kidneys;
//   console.log(johnkidneys);
// })
const users = {
  name:"john",
  kidneys:[{
    healthy:false
  }]
};

const express = require("express");
const app = express();
app.listen(3000);

app.get("/",(req,res) => {
  const johnKidneys = users.kidneys;
  const numberOfKidneys = johnKidneys.length;
  let numbersOfHealthyKidneys = 0;
  for (let i = 0;i<numberOfKidneys;i++){
    if (johnKidneys[i].healthy){
      numbersOfHealthyKidneys++;
    }
  }
  const numbersOfUnhealthyKidneys = numberOfKidneys - numbersOfHealthyKidneys;
  res.json({
    numberOfKidneys,
    numbersOfHealthyKidneys,
    numbersOfUnhealthyKidneys
  })
})

app.use(express.json());
app.post("/",(req,res) =>{
  const isHealthy = req.body.isHealthy;
  users.kidneys.push({
    healthy:isHealthy
  });
  res.json({
    msg:"Done!"
  })
})

app.put("/",(req,res) =>{
  for(let i=0;i<users.kidneys.length;i++){
    users.kidneys[i].healthy = true;
  }
  res.json({
    msg:"Done!"
  })
})

app.delete("/",(req,res) =>{
  const newKidneys = [];
  for (let i=0;i<users.kidneys.length;i++){
    if(users.kidneys[i].healthy){
      newKidneys.push({
        healthy:true
      })
    }
  }
  users.kidneys = newKidneys;
  res.json({
    msg:"Done!"
  })
});