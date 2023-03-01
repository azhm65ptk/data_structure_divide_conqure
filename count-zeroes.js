function countZeroes(arr, n) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) count++;
  }
  if (count === 0) return 0;
  else return count;
}

module.exports = countZeroes;
