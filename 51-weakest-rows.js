// iterate through all rows
// count soldiers (1's) in each row
// 


// k indicates the exact number of indixes to return; if there are four indexes in 'mat' but k = 3, then only 3 indixes should be returned.
var kWeakestRows = function(mat, k) {
    let i = 0;
    weakest = [];

    // use map method on array to count soldiers in each row and associate that count with the index value of that row.
    // the const 'soldiers' will become an array of objects, each object representing a row and its associated soldier count.
    const soldiers = mat.map(row => {
        count = 0;
        row.forEach(r => {
            if (r === 1) { 
                count++;
            };
        });
        // Now to associate the count of soldiers with the row from which the count was made:
        let index = mat.indexOf(row);
        return {count, index};
    });

    // Sort by ascending count values; grab the count property on the object.
    soldiers.sort((a,b) => a.count - b.count );
    // Shorten the array to the specified number of indices 'k'
    console.log(soldiers.splice(k));
};

const mat = [[1,1,0,0,0],
[1,1,1,1,0],
[1,0,0,0,0],
[1,1,0,0,0],
[1,1,1,1,1]];
const k = 3;
// should return [2, 0, 3]

console.log(kWeakestRows(mat, k));
// had to refer to solution, needs revisiting