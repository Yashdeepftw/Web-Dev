// Pick

// interface User {
//     name: string,
//     age: number,
//     email: string,
//     password: string
// }

// type UpdatedProps = Pick<User, 'name' | 'age' | 'email'>;

// function updateUser(updatedProps: UpdatedProps) {

// }

// Partial

// interface User {
//     name: string,
//     age: number,
//     password: string,
//     email: string
// }

// type UpdatedProps = Pick<User, 'name' | 'age' | 'email'>;

// type UpdatedPropsOptional = Partial<UpdatedProps>


// function updateUser(updatedProps: UpdatedPropsOptional) {
    
// }

// Readonly

// type User = {
//     readonly name: string,
//     age: number
// }

// const user: User = {
//     name: 'John',
//     age: 25,
// }

// user.age = 22;
// user.name = 'john'

// Records 

// type User = {
//     id: number,
//     username: string
// }

// // type Users = {
// //     [key: number]: User;
// // }

// type Users = Record<string, User>

// const users: Users = {
//     1: {
//         id: 1,
//         username: 'kirat'
//     },
//     2: {
//         id: 2,
//         username: 'singh'
//     }
// }

// Map

// type User = {
//     name: string,
//     age: number
// }

// const users = new Map<string, User>();

// users.set('jhon', { name: 'john', age: 23});
// users.set('kirat', { name: 'singh', age: 24});

// const user = users.get('jhon');
// users.delete('kirat');
// console.log(user);

// Exclude 

type Eventype = 'click' | 'scroll' | 'mousemove';

type ExcludeEvent = Exclude<Eventype, 'scroll'>;

const handleEvent = (event: ExcludeEvent) => {
    console.log(`Handling event: ${event}`);
};

handleEvent('click')