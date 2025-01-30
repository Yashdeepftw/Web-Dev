/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    // let str1 = str.toLowerCase().split('');
    // let count = 0;
    // console.log(str1);
    // for(let i=0;i<str1.length;i++){
    //   if(str1[i] === 'a'||'i'||'o'||'e'||'u'){
    //     count++;
    //   }
    // }
    // return count;

    let str1 = str.toLowerCase().split('');
    let count = 0;
    let str2 = str1.map((i) =>{
      if(i === 'a'||i === 'i'||i === 'o'||i === 'e'||i === 'u'){
        count++;
      }
    })
    return count;
}
console.log(countVowels('hEllo'));
module.exports = countVowels;