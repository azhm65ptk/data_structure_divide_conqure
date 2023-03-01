function findRotationCount(arr) {
  let min = arr[0];
  let temp = 0;

  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
      temp = i;
    }
  }
  return temp;
}

module.exports = findRotationCount;
