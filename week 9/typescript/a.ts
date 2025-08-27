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


function runAfter(fn: () => void) {
    setTimeout(fn, 1000);
}

runAfter(function() {
    console.log('hi there');
})