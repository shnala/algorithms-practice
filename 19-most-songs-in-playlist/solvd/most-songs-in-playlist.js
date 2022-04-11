// Write code to create a function that accepts an array of numbers
// Each number represents the duration of a song in minutes
// Return the maximum number of songs from the list that can fit in a 60 minute playlist

const songArray = [3, 5, 7, 2, 1, 4, 8, 5, 3, 2, 2, 1, 5, 7, 4, 2, 3, 1, 3, 4, 7, 8, 8, 2];
console.log(songArray.length);

var mostSongsInPlaylist = function(arr) {
  // the array should be sorted so that the shortest songs are added first. This will ensure the highets humber of songs will be added.
  var sortedArr = arr.sort();
  let songLengthTotal = 0;
  let songCount = 0;

    for (let i = 0; i < sortedArr.length; i++) {
      const songLength = sortedArr[i];
      //NOTE: the conditional here should check whether adding the song at the current index would put the total length above 60 minutes. If it does, then the song shouldn't be added.
      if (songLengthTotal + songLength < 60 ) {
        songLengthTotal = songLengthTotal + songLength;
        songCount++;
        console.log(`Total length: ${songLengthTotal} minutes`);
      } else {
        return songCount;
      }
    }

  return songCount;
};

console.log(mostSongsInPlaylist(songArray));

//done 