// function greet(firstName: string) {
//     console.log(`hello ${firstName}`);
// }
// greet('yashdeep');

// function sum (a: number, b: number):number {
//     return a + b;
// }

// const value = sum(1,2);
// console.log(value);


// function isLegal(age: number): boolean {
//     if(age > 18) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// const value = isLegal(19);
// console.log(value);


// function runAfter(fn: () => void) {
//     setTimeout(fn, 1000);
// }

// runAfter(function() {
//     console.log('hi there');
// })

// interface

// interface User {
//     firstName: string,
//     lastName: string,
//     age: number,
//     email?: string
// };

// function isLegal(user: User) {
//     if(user.age > 18) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// function greet(user: {
//     firstName: string,
//     lastName: string,
//     age: number
// }) {
//     console.log('hello ' + user.firstName);
// }

// const value = isLegal({
//     firstName: 'harkirat',
//     lastName: 'singh',
//     age: 20
// })

// console.log(value);

// greet({
//     firstName: 'harkirat',
//     lastName: 'singh',
//     age: 20
// })

// interface and class

// interface Person {
//     name: string,
//     age: number,
//     greet(phrase: string): void,
//     email?: string
// }

// class Employee implements Person {
//     name: string;
//     age: number;

//     constructor(n: string, a: number) {
//         this.name = n;
//         this.age = a;
//     }

//     greet(phrase: string) {
//         console.log(`${phrase} ${this.name}`);
//     }
// }

// const e = new Employee('harkirat', 22);
// console.log(e.name);

// types

type User = {
    firstName: string,
    lastName: string,
    age: Number
}

interface User2 {
    firstName: string,
    lastName: string,
}

type User3 = User & User2;

const t: User3 = {
    firstName: 'harkirat',
    lastName: 'singh',
    age: 22
}
console.log(t);