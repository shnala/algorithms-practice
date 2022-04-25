// Write a function that takes in a Roman Numeral string and returns its integer form
// Must be able to recognize threshold values, i.e. IV, IX, XL, XC, CM,  etc.

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
};

var romanToInt = function(str) {
    let sum = 0;
    let idx = 0;

    while (idx < str.length) {

        const character = str[idx];
        
        if (character === "C" && str[idx+1] === "M") {
            idx +=2;
            sum += 900;
        } else if (character === "M") {
            sum +=1000; 
            idx +=1;
        } else if (character === "C" && str[idx+1] === "D") {
            idx +=2;
            sum += 400;
        } else if (character === "D") {
            sum +=500;
            idx +=1;
        } else if (character === "X" && str[idx+1] === "C") {
            sum += 90;
            idx +=2;
        } else if (character === "C") {
            sum += 100;
            idx +=1;
        } else if (character === "X" && str[idx+1] === "L") {
            sum += 40;
            idx +=2;
        } else if (character === "L") {
            sum += 50;
            idx +=1;
        } else if (character === "I" && str[idx+1] === "X") {
            sum += 9;
            idx +=2;
        } else if (character === "X") {
            sum += 10;
            idx +=1;
        } else if (character === "I" && str[idx+1] === "V") {
            console.log('Adding 4');
            idx +=2;
            sum += 4;
        } else if (character === "V") {
            console.log('Adding 5');
            idx +=1;
            sum += 5;
        } else if (character === "I") {
            console.log('Adding 1');
            idx +=1;
            sum += 1;
        };
    };
    
    return sum;
};

const str = "III";
console.log(romanToInt(str));

//done 