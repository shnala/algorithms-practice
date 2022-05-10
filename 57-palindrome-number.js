/**
 * @param {number} x
 * @return {boolean}
 */

// return true if integer 'x' is a palindrome integer, i.e. it reads the same backwards as forwards.
//  var isPalindrome = function(x) {
//     let reverse = parseInt(x.toString().split("").reverse().join(""));
//     // let reverse = string.reverse();
//     console.log(reverse);

//     if (reverse === x) {
//         return true;
//     } else {
//         return false;
//     }
// };
// done, faster than 42.5%, smaller than 7.48%

// another solution
var isPalindrome = (x) => {
    let xArray = String(x).split("");

    // use pop and shift to compare beginning and ending indices
    // if 'x' is an odd number of digits, we need a catch for when there is only one number left to compare. Set loop to only run if xArray.length is greater than 1. Once all digits besides the middle one are removed from 'x', i.e. xArray.length = 1, the loop will stop firing.
    for (let i = 0; xArray.length > 1; i++) {
        if (xArray.pop() !== xArray.shift()) {
            return false;
        };
        
    };

    // if function reaches this point, then 'x' is a palindrome, so return true

    return true;
};
// done, faster than 79%, smaller than 52%


// top solution in discussion
// var isPalindrome = function (x) {
//     if (x < 0) return false

//     let rev = 0

//     // i is initialized with a value of 'x'
//     // this loop reverses the integer via some black magic
//     for (let i = x; i >= 1; i = Math.floor(i / 10)) {
//         // on the first loop, i = x, therefore rev = 0 * 10 + 121 % 10
//         // rev = 1
//         // i now equals Math.floor(121/10), which is 12
//         // loop requisites met, so loop will fire again
//         // rev = 1 * 10 + 12 % 10
//         // rev = 12
//         // i now equals Math.floor(12/10), which is 1
//         // loop fires again
//         // rev = 12 * 10 + 1 % 10
//         // rev = 121
//         console.log(rev * 10 + i % 10);
//         rev = rev * 10 + i % 10
//     }
//     return rev === x
// };

const x = 121;
console.log(isPalindrome(x));