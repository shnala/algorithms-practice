// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string

// ```js
// var str = "Hello World!";
// ```

// - Given the preceding function, the following object should be returned:

// ```js
// { H: 1, e: 1, l: 3, o: 2, ' ': 1, W: 1, r: 1, d: 1, '!': 1 }
// ```
//a key for each letter and a count for each instance of that letter


// var characterCount = function(str) {
//     const charObject = new Object();
//     const words = str.split(" ");
//     words.forEach(word => {
//         const letters = word.split("");
//         for (let i = 0; i < letters.length; i++) {
//             const letter = letters[i];
//             if (letter in charObject) {
//                 charObject[letter]++;
//             } else {
//                 charObject[letter] = 1;
//             }
//         }
//     });

//     return charObject;
// };

//The code above works but doesn't account for spaces

var characterCount = (str) => {
    let charObject = {};
    for (let i = 0; i < str.length; i++) {
        const letter = str[i];
        if (letter in charObject) {
            charObject[letter]++;
        } else {
            charObject[letter] = 1;
        }
    }
    return charObject;
}
//The above code works and passes the test. Note that it is not necessary to split the string into individual words, as done in the first attempt.
//NOTE: New keys made for object by wrapping the new keys in brackets, lines 40 and 42. Not sure how this works but seems very handy

// console.log(characterCount("I love you Jillian"));

//done