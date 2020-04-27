const findLongestWord = function(string) {
  const arr = string.split(' ');
  console.log(arr);

  let longestWord = arr[0];

  for (let i = 0; i < arr.length; i += 1) {
    if (longestWord.length < arr[i].length) {
      longestWord = arr[i];
    }
  }
  return longestWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

console.log(findLongestWord('Google do a roll'));

console.log(findLongestWord('May the force be with you'));
