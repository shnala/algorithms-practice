// Write a function that takes in an array of sorted strings and returns the index of its rotation point if it has one, else return -1
// 

var rotationPoint = function(words) {
    var sorted = words.sort();
    console.log(sorted);

    var equivalent = sorted === words;

    if (equivalent) {
        return -1;
    } else {

    }

};

var words = ["great", "ostrich", "panther", "ruby", "chosen", "feathers"];

console.log(rotationPoint(words));