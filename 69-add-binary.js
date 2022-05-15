/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
// given two binary (1's and 0's) strings 'a' and 'b', return their sum, also as a string
// walk backwards thru each string, adding each digit from both strings
const addBinary = (a, b) => {
    let idx = Math.max(a.length - 1, b.length - 1);
    let numA = Number(a);
    let numB = Number(b);

    while (idx >= 0) {
        if (numA[idx] === undefined || numB[idx] === undefined) {
            console.log('triggerd');
            idx--;
            continue;
        }
        
        while (numA[idx] === 1) {
            
        }
    };
};

    let a = "1010";
    let b = "1011";
    // should return "10101"

    console.log(addBinary(a, b));

// var addBinary = function(a, b) {
//     let idx = Math.max(a.length-1, b.length-1);
//     let result = new Array(idx+1);
//     let carry = 0;

//     while (idx >= 0) {
//         if (a[idx] === undefined || b[idx] === undefined) {
//             console.log('triggerd');
//             continue;
//         } else if (a[idx] + b[idx] == 2 && carry === 1) {
//             result[idx] = 0;
//             carry = 0;
//             idx--;
//         } else if (a[idx] + b[idx] == 2) {
//             result[idx] = 0;
//             carry = 1;
//             idx--;
//         } else if (carry === 1) {

//         } else {
//             result[idx] = a[idx] + b[idx];
//             idx--;
//         }
//         return
//     }
// };
// incomplete