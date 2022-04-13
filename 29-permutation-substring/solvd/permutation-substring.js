// Write code to create a function that accepts two strings
// Return true if the second string is a substring of any permutation of the first string
// Else return false

var permutationSubstring = function(str, sub) {
    let strMap = {};
    let subMap = {};

    for (let i = 0; i < str.length; i++) {
        const character = str[i];
        if (strMap[character]) {
            strMap[character]++;
        } else {
            strMap[character] = 1;
        };
    };

    for (let i = 0; i < sub.length; i++) {
        const character = sub[i];
        if (!strMap[character]) {
            return false;
        } 
        // else if (subMap[character] !== strMap[character]) {
        //     return false;
        // }
        // substring does not need to have same number of characters therefore this line is not necessary
    };

    return true;
};

//done 