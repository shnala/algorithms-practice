// Counts down from 'n' and then reverses to give an answer that counts up from 1 to 'n'
var fizzBuzz = function(n) {
    let result = [];
    while (n > 0) {
        if (n % 3 === 0 && n % 5 === 0) {
            result.push("FizzBuzz");
            n--;
        } else if (n % 3 === 0) {
            result.push("Fizz");
            n--;
        } else if (n % 5 === 0) {
            result.push("Buzz");
            n--;
        } else {
            let numString = n.toString();
            result.push(numString);
            n--;
        };
    };
    
    return result.reverse();
};

// solution that doesn't involve reverse method; counts up from 1 to 'n'

var fizzBuzz = function (n) {
    let result = [];
    let counter = 1;

    while (counter <= n) {
        if (counter % 3 === 0 && counter % 5 === 0) {
            result.push("FizzBuzz");
            counter++;
        } else if (counter % 3 === 0) {
            result.push("Fizz");
            counter++;
        } else if (counter % 5 === 0) {
            result.push("Buzz");
            counter++;
        } else {
            let numString = counter.toString();
            result.push(numString);
            counter++;
        };
    };

    return result;
};