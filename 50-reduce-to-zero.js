// Reduce positive integer 'num' to zero by dividing it by 2 when even, and subtracting by 1 when odd. Return the number of 'steps' required before 'num' reaches zero.

var numberOfSteps = function(num) {
    let steps = 0;

    while (num > 0) {
        if (num % 2 === 0) {
            steps++;
            num/= 2;
        } else {
            steps++;
            num--;
        };
    };

    return steps;
};

const num = 123;

console.log(numberOfSteps(num));

// done but long runtime for some reason