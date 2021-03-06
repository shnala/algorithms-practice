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

// const test = (thing) => {
//     // NOTE: recursive() will not fire unless it is called. 
//     function recursive(y) {
//         // NOTE: this recursive function has no break, and will fire infinitely if one of the triggers below is uncommented.
//         console.log('Trigger 1');
//         // recursive(thing); 
//         // only 'Trigger 1' will be logged; 'Trigger 2' and 'Trigger 3' will not.

//         console.log('Trigger 2');
//         // recursive(thing); 
//         // 'Trigger 1' and 'Trigger 2' will be logged; 'Trigger 3' will not.

//         console.log('Trigger 3');

//         // NOTE: this 'return' will not prevent 'Trigger 4' from activating. Return will only exit the recursive() function.
//         // This 'return' will never be reached if any of the recursive() calls are uncommented.
//         return;
//     };
//     // At this point, recursive() will fire a second time.
//     // If this line is commented out, recursive() will not fire, even when test() is called.
//     recursive(thing);
//     console.log('Trigger 4');
// };

// const thing = [1,2,3];
// test(thing);

// Testing static on Classes
// class ClassWithStaticMethod {
//     static staticProperty = 'someValue';
//     static staticMethod() {
//       return 'static method has been called.';
//     }
//     // Line below is the question; how exactly is it triggered? 
//     // ANSWER: it triggers every time sandbox.js is ran in the terminal. Hence 'initialization block called'
//     static {
//       console.log('Class static initialization block called');
//     }
// }
  
//   console.log(ClassWithStaticMethod.staticProperty);
  // output: "someValue"
//   console.log(ClassWithStaticMethod.staticMethod());
  // output: "static method has been called."

// const test = new ClassWithStaticMethod();

// recursive strategy for reversing a string
// function reverseString(str) {
//   // once str has been iterated through, the function will terminate by triggering this if statement
//   // if we are returning an empty string, how does this function produce anything? where is the reversed string even coming from?
//   if (str === "")
//     return "";
//   else
//     // console.log((str.substr(1)) + str.charAt(0)); is as follows, and then the function terminates
//     // elloh
//     // lloe
//     // lol
//     // ol
//     // o
//     // TODO: Where is the reversed string going? How does it get returned from the function?
//     return reverseString(str.substr(1)) + str.charAt(0);
// }
// reverseString("hello");
// console.log(reverseString("hello"));

// var str = "nice"
// var news = (str.substr(1));
// console.log(str);

// TODO: Bitwise operators?
// '^' Returns a zero in each bit position for which the corresponding bits are the same. [Returns a one in each bit position for which the corresponding bits are different.]
var singleNumber = function(nums) {
  let result = 0

  for (let n of nums) {
    console.log(result ^ n);
      result = result ^ n 
  }
  
  return result
};

const nums = [4, 1, 2, 1, 2];
// first loop: 0 ^ 4 === 4
console.log(6^2);
// second loop: 4 ^ 1 === 5
// third loop: 5 ^ 2 === 7
// fourth loop: 7 ^ 1 === 6
// fifth loop: 6 ^ 2 === 4
// singleNumber(nums);