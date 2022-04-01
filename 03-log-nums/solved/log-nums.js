// Write code to print all numbers from 1 to `num`
// Assume `num` will be a positive number

// var logNums = function(num) {
//     // console.log(`Initializing. ${num}`)
//     while (num > 0) {
//         console.log(num);
//         num--;
//     }
    
//     //Only runs when 'while' loop is complete
//     console.log("Complete");

// };


// logNums(5);

//done but this counts DOWN from num, whereas the challenge was to count UP to num

var logNums = function(num) {
    let start = 1;
    while (start <= num) {
        console.log(start);
        start++;
    }
};

logNums(10);

//done