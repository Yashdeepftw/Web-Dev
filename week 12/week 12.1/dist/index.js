"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sumOfAges(user1, user2) {
    return user1.age + user2.age;
}
const age = sumOfAges({ name: 'john', age: 12 }, { name: 'doe', age: 20 });
console.log(age);
