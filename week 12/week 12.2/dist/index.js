"use strict";
// Pick
Object.defineProperty(exports, "__esModule", { value: true });
const users = new Map();
users.set('jhon', { name: 'john', age: 23 });
users.set('kirat', { name: 'singh', age: 24 });
const user = users.get('jhon');
users.delete('kirat');
console.log(user);
