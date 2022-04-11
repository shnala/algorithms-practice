// Write code to create a function that accepts a number and returns true if the number is a perfect square, otherwise it returns false.
// You may not use the built-in Math.sqrt method

// var isPerfectSquare = function(num) {
//     let squareRoot = Math.sqrt(num);
//     // console.log(squareRoot);
//     console.log(squareRoot*squareRoot);
//     if (squareRoot*squareRoot === num) {
//         return true;
//     } else {
//         return false;
//     }
// };

// isPerfectSquare(14);
// the above code mostly works but fails to pass for 14 (???)
// apparently multiplying values with running decimals will sometimes result in a whole number T_T

var isPerfectSquare = (num) => {
    let squareRoot = Math.sqrt(num);
    console.log(squareRoot);
    let roundUp = Math.ceil(Math.sqrt(num));
    let roundDown = Math.floor(Math.sqrt(num));
    if (roundUp === roundDown) {
        return true;
    } else {
        return false;
    }
};

//done
//this code works b/c instead of squaring the SR, which sometimes can result in a whole number and thereby invalidate the function, it will instead check whether the SR is a whole number itself. It does this by using Math.ceil and Math.floor to round up/down to the nearest whole integer, which naturally will do nothing if the number is already a whole integer.