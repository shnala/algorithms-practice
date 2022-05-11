// const a = { x: 1, y: 1000 };
// const b = { x: 1 };

// console.log(a['y']);
// prettyPrint("Yo");
// var string = "Hello";
// var charCode = string.charCodeAt(0);
// var offset = 1;

// // var offsetChar = String.fromCharCode(((charCode - 65 + offset) % 26) + 65); // Original, returns 'I'
// // var offsetChar = String.fromCharCode((charCode - 65 + offset) + 65); // Without % 26, still returns 'I'
// // var offsetChar = String.fromCharCode(((charCode - 65 + offset) % 26)); // Without +65, returns nothing
// console.log((charCode - 65 + offset) % 26); // This returns 8 which is 'backspace' in UTF-16.
// console.log((charCode - 65 + offset)); // This still returns 8.
// console.log(8 % 26); // Also returns 8
// console.log(26 % 26); // Returns 0
// console.log(28 % 26); // Returns 2
// var offsetChar = String.fromCharCode(((charCode - 65 + offset) % 26) + 65);

// Should print 'I' because H is offset by +1 in the caesar cipher
// console.log(offsetChar);

var words = ["great", "ostrich", "panther", "ruby", "chosen", "feathers"];

console.log(words[0] > words[1]);
// Returns false; 'great' is not greater than 'ostrich' because 'o' is higher in the alphabet

console.log(words[0] > words[4]);
// Returns true; 'great' is greater than 'chosen' because 'c' is lower in the alphabet.

// console.log(Math.floor(121 % 10));
// console.log(Math.floor(1/10));

const word = "flower";
console.log(word.slice(0, 8));
// if the end point of the slice method extends beyond the length of the word/array, it will just extend to the end of the word/array.
console.log(word.length);

const s = "()[]{}";
console.log(s.pop());
// array methods cannot be used on strings"