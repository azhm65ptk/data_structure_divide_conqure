function sortedFrequency(arr, n) {
  count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (n == arr[i]) count++;
  }
  if (count == 0) return -1;
  return count;
}

module.exports = sortedFrequency;
