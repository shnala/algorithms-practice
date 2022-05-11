/**
 * @param {string} s
 * @return {boolean}
 */

// identical to exercise 34 but doing it anyway for practice
// create a stack queue 
 var isValid = function(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        const element = s[i];
        if (element === "(" || element === "{" || element === "[") {
            stack.push(element);
            continue;
        };

        if (element === ")") {
            if (stack.pop() !== "(") {
                return false;
            }
            continue;
        };

        if (element === "}") {
            if (stack.pop() !== "{") {
                return false;
            }
            continue;
        };

        if (element === "]") {
            if (stack.pop() !== "[") {
                return false;
            }
            continue;
        };
    };

    // catch for when there is an unclosed bracket at the end of the string, e.g. "(){} ["
    if (stack.length !== 0) return false;

    // if the loop completes then none of the returns were activated, indicating that 's' contains valid brackets. Return 'true'

    return true;
};

// const s = "{ } [ ( [] ) ]";
// should return true
const s = "()[]{}";
// should return true
console.log(isValid(s));

// done, faster than 30%, smaller than 90% other solutions