/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

// ransomnote must only use letters that are contained in magazine
// each character in magazine can only be used once
// create an object representing all characters and their counts in magazine
// if there is a character in ransomeNote that is not contained in magazine, return false
// 

 var canConstruct = function(ransomNote, magazine) {
     magazineMap = {};
    for (let i = 0; i < magazine.length; i++) {
        const character = magazine[i];
        if (!magazineMap[character]) {
            console.log('Char doesnt exist');
            magazineMap[character] = 1;
        } else {
            magazineMap[character]++;
        };
    };

    for (let i = 0; i < ransomNote.length; i++) {
        const character = ransomNote[i];
        // Even though this is just a log, the key [character] is still being decremented on magazineMap, thereby returning false.
        // console.log(magazineMap[character]-- < 0)
        if (!magazineMap[character]) {
            console.log(magazineMap);
            return false;
        } else if (magazineMap[character]) {
            magazineMap[character]--;
        };

        if (magazineMap[character] < 0) {
            return false;
        };
    };

    return true;
};

const ransomeNote = "aa";
const magazine = "aab";

console.log(canConstruct(ransomeNote, magazine));