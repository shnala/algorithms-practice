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

// const haystack = "hello";
// const needle = "ll";
// expected output: 2

const haystack = "aaaaa";
const needle = "bba";
// expected output: -1

console.log(strStr(haystack, needle));
