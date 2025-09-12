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

interface User {
    name: string,
    age: number,
    password: string,
    email: string
}

type UpdatedProps = Pick<User, 'name' | 'age' | 'email'>;

type UpdatedPropsOptional = Partial<UpdatedProps>


function updateUser(updatedProps: UpdatedPropsOptional) {

}