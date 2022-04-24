// The strings must be exactly one character apart in difference. this means:
// One string has one letter swapped out for another
// One string is shorter than the other

// The function should return 'false' if the strings are MORE than one character apart in difference, or if the strings are already exactly identical.
// Otherwise, return true

const oneEditAway = function(str1, str2) {
let idx = 0;
let differences = 0;

// Catch for when both strings are exactly identical.
if (JSON.stringify(str1) === JSON.stringify(str2)) {
    return false;
}

// Compare the strings. Check, at the same index for each string, that the character at that index matches between the two strings. You can do this by using a counter for the index.
// If the character matches, incremenet the counter, and proceed to the next index.
// If the character does NOT match, increment a separate counter which counts differences between the strings.
// If at any point this second counter is greater than 1, then the function should return false
// If, however, the counter is EQUAL to one by the time both strings have been iterated through, then return true.

for (let i = 0; i < str1.length; i++) {
    if (str1[idx] === str2[idx]) {
        console.log(`Comparing ${str1[idx]} to ${str2[idx]}. Result is ${str1[idx] === str2[idx]}`)
        idx++;
    } else if (str1[idx] !== str2[idx]) {
        console.log(`Comparing ${str1[idx]} to ${str2[idx]}. Result is ${str1[idx] === str2[idx]}`)
        differences++;
        idx++;
    };

    if (differences > 1) {
        return false;
    }
};

// console.log(JSON.stringify(str1) === JSON.stringify(str2));
// console.log(JSON.stringify(str2));

return true;
}

var str1 = "Hello";
var str2 = "Hexlo";
console.log(oneEditAway(str1, str2));