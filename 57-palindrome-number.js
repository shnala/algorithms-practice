/**
 * @param {number} x
 * @return {boolean}
 */

// return true if integer 'x' is a palindrome integer, i.e. it reads the same backwards as forwards.
 var isPalindrome = function(x) {
    let reverse = parseInt(x.toString().split("").reverse().join(""));
    // let reverse = string.reverse();
    console.log(reverse);

    if (reverse === x) {
        return true;
    } else {
        return false;
    }
};

// done, faster than 42.5%, smaller than 7.48%

const x = 121;
console.log(isPalindrome(x));