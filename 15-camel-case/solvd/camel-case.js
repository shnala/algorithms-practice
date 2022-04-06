// Write code to create a function that accepts a string and returns the string in camelCase

var camelCase = function(str) {
    newstring = str.split(" ");
    newWords = [];
    firstWord = newstring[0].toLowerCase();
    newWords.push(firstWord);
    for (let i = 1; i < newstring.length; i++) {
        const word = newstring[i];
        letters = word.split("");
        letters[0] = letters[0].toUpperCase();
        const newWord = letters.join("");
        newWords.push(newWord);
    }
    
    return newWords.join("");
};

console.log(camelCase("I love jillian"));
//first word should not be capitalized
//done