// Write a function that takes in a string and and an offset and returns a new string with each character moved by the offset
// Negative offsets can be used
// Lowercase letters do NOT equal uppercase letters and will return falsey when compared.
// The string should be broken down into individual characters. These characters should be mapped to an object which will represent the string and each letter's corresponding numerical value.
// The offset will be applied to the numerical values. The result will be the index of the new letter for the cypher.
// An IF statement should run a separate but functionally identical set of code for uppercase characters, and will operate on a seaparate alphabetical array filled with 

var caesarCipher = function(str, offset) {
    // 'a' corresponds to index 1, 'z' corresponds to index 26, etc. Null will represent spaces.
    const alphabet = [
        null, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];
    const strMap = Object.values(str);
    

    console.log(strMap);
};

var str = "hello world";
var offset = 1;

console.log(caesarCipher(str, offset));