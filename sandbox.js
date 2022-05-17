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

// var words = ["great", "ostrich", "panther", "ruby", "chosen", "feathers"];

// console.log(words[0] > words[1]);
// // Returns false; 'great' is not greater than 'ostrich' because 'o' is higher in the alphabet

// console.log(words[0] > words[4]);
// Returns true; 'great' is greater than 'chosen' because 'c' is lower in the alphabet.

// console.log(Math.floor(121 % 10));
// console.log(Math.floor(1/10));

// const word = "flower";
// console.log(word.slice(0, 8));
// // if the end point of the slice method extends beyond the length of the word/array, it will just extend to the end of the word/array.
// console.log(word.length);

// // const s = "()[]{}";
// // console.log(s.pop());
// // certain array methods cannot be used on strings"

// let a = "1010";
// let b = "1011";

// const aBin = `0b${a}`
// const bBin = `0b${b}`

// console.log(BigInt(aBin));
// const sum = BigInt(aBin) + BigInt(bBin);
// console.log(sum.toString(2));

// const nums1 = [1,2,3,0,0,0]
// const nums2 = [2,5,6]

// nums1.splice(1, 0, nums2[2]);
// console.log(nums1);
// just testing splice

const test = (thing) => {
    // NOTE: recursive() will not fire unless it is called. 
    function recursive(y) {
        // NOTE: this recursive function has no break, and will fire infinitely if one of the triggers below is uncommented.
        console.log('Trigger 1');
        // recursive(thing); 
        // only 'Trigger 1' will be logged; 'Trigger 2' and 'Trigger 3' will not.

        console.log('Trigger 2');
        // recursive(thing); 
        // 'Trigger 1' and 'Trigger 2' will be logged; 'Trigger 3' will not.

        console.log('Trigger 3');

        // This 'return' will never be reached
        return;
    };
    // At this point, recursive() will fire a second time.
    // If this line is commented out, recursive() will not fire, even when test() is called.
    // recursive(thing);
    console.log('Trigger 4');
};

const thing = [1,2,3];
test(thing);