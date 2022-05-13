/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

// find first instance of 'needle' in 'haystack', return -1 if no instance is found.
// need catch for when 'needle' is an empty string; return 0
 var strStr = function(haystack, needle) {
    if (needle === "") {
        return 0;
    };

    return haystack.indexOf(needle);
};
// done, faster than 64%, smaller than 90%, if only they were all this easy （；´д｀）ゞ

// alternate, non-original solution
var strStr = function(haystack, needle) {
    // catch for empty string
    if(!needle.length) return 0;
    // catch for if haystack does not contain needle
    if(!haystack.includes(needle)) return -1;
    // haystack will split at instance of 'needle', the result is a string of length equal to the index value of the first instance of 'needle'
    // [0] incase 'needle' occurs more than once. [0] ensures only the first instance of 'needle' is returned
    return haystack.split(`${needle}`)[0].length;
};

// const haystack = "hello";
// const needle = "ll";
// expected output: 2

const haystack = "aaaaa";
const needle = "bba";
// expected output: -1

console.log(strStr(haystack, needle));
