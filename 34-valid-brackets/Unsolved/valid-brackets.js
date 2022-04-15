// Write a function to take a string and return true if it contains valid sets of matching brackets, else return false

var str = "{ } [ ( [] ) ]";

const validBrackets = (str) => {
    let strStack = [];

    for (let i = 0; i < str.length; i++) {
        const e = str[i];
        if (e === "{" || e === "(" || e === "[" ) {
            strStack.push(e);
        };

        if (e === ")") {
            if (strStack.pop() !== "(") {
                return false;
            };
            continue;
        };

        if (e === "}") {
            if (strStack.pop() !== "{") {
                return false;
            };
            continue;
        };

        if (e === "]") {
            if (strStack.pop() !== "[") {
                return false;
            };
            continue;
        };
    };

    return true;
};

console.log(validBrackets(str));

// const validBrackets = function(str) {
//     strMap = {};

//     for (let i = 0; i < str.length; i++) {
//         const character = str[i];
//         if (strMap[character]) {
//             strMap[character]++;
//         } else {
//             strMap[character] = 1;
//         };
//     };

//     if (strMap["("])  {
//         if (!strMap[")"]) {
//             return false;
//         };
//     };

//     if (strMap["{"])  {
//         if (!strMap["}"]) {
//             return false;
//         };
//     };

//     if (strMap["["])  {
//         if (!strMap["]"]) {
//             return false;
//         };
//     };

//     console.log(strMap);
//     return true;
// };
// works but fails the last test wherein brackets are improperly nested, function must be able to check for this


    // strMap = {};
    // string = str.split(" ");
    
    // for (let i = 0; i < string.length; i++) {
    //     const character = string[i];
    //     if (character === "(") {
    //         if (string[i + 1] === ")") {
    //             return false;
    //         };
    //     };

    //     if (character === "{") {
    //         if (string[i + 1] === "}") {
    //             return false;
    //         };
    //     };

    //     if (character === "[") {
    //         if (string[i + 1] === "]") {
    //             return false;
    //         };
    //     };


    // }