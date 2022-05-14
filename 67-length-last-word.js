/**
 * @param {string} s
 * @return {number}
 */
// given string 's' of words separated by spaces, return the length of the last word
// must account for instances where multiple spaces are used
// walk backwards from end of 's' until the first instance of space after a letter
// avoid using split in order to use less memory
 var lengthOfLastWord = function(s) {
    let count = 0;
    
    // Remove any unecessary spaces
    let trim = s.trimEnd();

    // This needs to go here instead of at the top in order to pass test where s = "a " so that the space at the end is removed
    if (!trim.includes(" ")) {
        return trim.length;
    };
    
    // Walk backwards from 's' until space
    for (let i = trim.length -1; i > 0; i--) {
        const currentChar = trim[i];
        if (currentChar === " ") {
            break;
        } else if (currentChar !== " ") {
            console.log(currentChar);
            count++;
        };
    };

    return count;
};
// done, faster than 53%, smaller than 5%

const s = "luffy is still joyboy";
// should return 6

// const s = "   fly me   to   the moon  ";
// should return 4

// const s = "a ";
// should return 1

console.log(lengthOfLastWord(s));

// var lengthOfLastWord = function(s) {
//     let split = s.split("");
//     let count = 0;
    
//     // Remove any unecessary spaces
//     while (split[split.length - 1] === " ") {
//         split.pop();
//         console.log('Removing spaces...');
//     };
//     console.log(split);


//     // This needs to go here instead of at the top in order to pass test where s = "a " so that the space at the end is removed
//     if (!split.includes(" ")) {
//         return split.length;
//     };
    
//     // Walk backwards from 's' until space
//     for (let i = split.length -1; i > 0; i--) {
//         const currentChar = split[i];
//         if (currentChar === " ") {
//             break;
//         } else if (currentChar !== " ") {
//             console.log(currentChar);
//             count++;
//         };
//     };

//     return count;
// };

// done, faster than 25%, smaller than 8%