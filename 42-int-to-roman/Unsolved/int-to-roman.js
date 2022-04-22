// Write a function that takes in an integer and returns it as a Roman numeral string
// break number down into chunks
// subtract those chunks from the startving value until it equals 0
// e.g., start at 2024
// greater than 1000, remove 1000 and add 'M' to result
// do this twice so that 2 'M's are added to the result, and 2000 is removed from starting value
// value is now 24; remove 10 and add 'X' to result
// do this twice
// value is now 4; add 'IV' to result

var intToRoman = function(num) {
    let digits = String(num).length
    let result = [];
    let symbols = {
        1: 'I',
        2: 'II',
        3: 'III', 
        5: 'V', 
        10: 'X',
        50: 'L',
        100: 'C',
        500: 'D',
        1000: 'M',
    }
    
    while (num > 0) {
        if (num >= 1000) {
            num-=1000;
            result.push('M');
        }

        if (num >= 900) {
            num -= 900;
            result.push('CM');
        }

        else if (num >= 500) {
            num-=500;
            result.push('D');
        }

        else if (num >= 400) {
            num-=400;
            result.push('CD');
        }

        else if (num >=100) {
            num-=100;
            result.push('C');
        }

        else if (num >=90) {
            num-=90;
            result.push('XC');
        }

        else if (num>=50) {
            num-=50;
            result.push('L');
        }
        
        else if (num >= 10) {
            num-=10;
            result.push('X');
        }
// NOTE: cannot use 'num === 9' etc. for the smaller numbers
        else if(num >= 9) {
            num-=9;
            result.push('IX');
        }

        else if(num >= 5) {
            num-=5;
            result.push('V');
        }

        else if(num >= 4) {
            num-=4;
            result.push('IV');
        }

        else if(num >= 1) {
            num-=1;
            result.push('I');
        }
    };

    const realResult = result.join("");
    return realResult;
};

// var num = 5;
// var num = 13;

console.log(intToRoman(num));
//done