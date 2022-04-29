// Write a function that takes in an absolute file path and simplifies it
// Split string at '/'
// Iterate over array
// Initialize levelCounter = 0, which represents root level.
// IF next char is '.',  we have not changed folders therefore levelCounter is unchaged.
// IF next char is NOT '..' OR '.', add 1 to levelCounter, because we are going deeper by 1 level. Add the value at this index to a new array called 'newPath'
// IF next char is '..',  subtract 1 from levelCounter, because we are moving up by 1 level. Also perform pop() on newPath array to remove the most recently added value from it, so that we end up with the most concise path by the end.
// 

var simplifyPath = function(path) {
    const splitStr = path.split('/');
    console.log(splitStr);
    const newPath = [];

    for (let i = 0; i < splitStr.length; i++) {
        const file = splitStr[i];
        
        // need a catch for 'empty' file which is created when the string is split, 'empty' index is at beginning and end of string
        // IF !file, skip this iteration of the loop. Use 'continue'

        if (!file) {
            continue;
        };

        // If we are not changing folders, i.e. we are at the same level in the file structure, then this index in the array should be skipped in order to create the most concise file path. Use 'continue' 
        if (file === ".") {
            continue;
        };

        if (file === "..") {
            newPath.pop();
            continue;
        };

        newPath.push(file);
    };

    return "/" + newPath.join("/");
};

var path = "/a/./b/../../c/";

console.log(simplifyPath(path));