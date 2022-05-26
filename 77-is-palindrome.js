/**
 * @param {string} s
 * @return {boolean}
 */

// similar to previous palindrome exercise, however, this function must remove all spacing and punctuation and evaluate the string thereafter.
// e.g., s = "A man, a plan, a canal: Panama" should return true, b/c the function will reduce it to "amanaplanacanalpanama" which is the same forwards and backwards.
// a valid string will consist of only lowercase letters and numbers
 var isPalindrome = function(s) {
     // regex from stackoverflow
    let simpleString = s.toLowerCase().replace(/[^a-zA-Z0-9]/g,'');
    let reverse = "";

    // loop backwards thru array to create a reverse
    for (let i = simpleString.length - 1; i >= 0; i--) {
        const element = simpleString[i];
        reverse+=element;
    }

    return reverse === simpleString;
};
// done, faster than 25%, smaller than 48%

const s = "A man, a plan, a canal: Panama";
// should return true

// const s = " "
// should return true

// const s = "race a car"
// should return false

console.log(isPalindrome(s));