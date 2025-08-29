// enum Direction {
//     Up,
//     Down,
//     Left,
//     Right
// }

// function doSomething(keyPressed: Direction) {
//     if(keyPressed) {
//         console.log('hello')
//     }
// }

// doSomething(Direction.Up);
// doSomething(Direction.Down);


// Generics

type Input = [] | number | string;

function firstEl (arr: Input[]) {
    return arr[0];
}

function identity<T>(args: T): T {
    return args;
}

let val1 = identity<string>('singh');
let val2 = identity<number>(2)
val1.toUpperCase();