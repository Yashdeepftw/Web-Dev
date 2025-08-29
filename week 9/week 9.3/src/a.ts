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

type Input = number | string;

function firstEl (arr: Input[]) {
    return arr[0];
}