// Write a function that takes in an integer and returns it as a Roman numeral string

var intToRoman = function(num) {
    let digits = String(num).length
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
    
    if (digits === 1) {
        
    }
};

// var num = 5;
var num = 2024;

console.log(intToRoman(num))