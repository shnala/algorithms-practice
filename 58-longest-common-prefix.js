/**
 * @param {string[]} strs
 * @return {string}
 */

// if there is no common prefix, return an empty string ""
// strs[i] will only contain lowercase English letters
// 
//  var longestCommonPrefix = function(strs) {
//     // catch for an empty array or when no array is provided
//     if (strs.length === 0 || strs === undefined) {
//         return "";
//     };

//     let prefix = strs.reduce((previousValue, currentValue) => {
//         let i = 0;
//         // while the letter[i] of previousValue and currentValue are not null AND are equivalent, perform this loop.
//         // 'i' will be incremented, which will advance the loop to the next letter until the letters between the words do not match.
//         // don't need curly brackets cuz one line
//         while (previousValue[i] && currentValue[i] && previousValue[i] === currentValue[i]) i++;

//         // at this point the loop has been broken because letter[i] is not the same between the words. Therefore 'i' represents the breaking point, so we can use the slice method to trim the word up to point 'i', and the return will be the common prefix of all the words.
//         return previousValue.slice(0, i);
//     });
    

//     return prefix;
// };

var longestCommonPrefix = (strs) => {
    let prefix = strs.reduce((previous, current) => {
        // current will be sliced according to previous's length. While the return from this slice does NOT equal previous itself, this loop will fire.
        // makes no difference if previous.length > current.length
        while (current.slice(0, previous.length) !== previous) {
            // previous is sliced to the length of current.length -1. 
            // the loop will end once previous has been sliced enough such that its return value is the same as current.slice(0, previous.length)
            previous = previous.slice(0, previous.length -1)
        };

        // at this point the loop has been broken because 'current' sliced to the length of 'previous' yields the same letters. We will return 'previous' since it has been sliced to just the common prefix.
        return previous;
    });

    return prefix;
};

// done, faster than 42%, smaller than 43%


const strs = ["flower","flow","flight"];
// expected output: "fl"

console.log(longestCommonPrefix(strs));