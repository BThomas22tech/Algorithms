function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    // if the right number 10 is less than the left number 8. it is false
    if (arr[i] < arr[i - 1]) {5
      return false;
    }
  }
  return true;
}
console.log(isSorted([8, 10, 13]));
console.log(isSorted([100, 20, 200]));
console.log(isSorted([100, 20, 200, 6]));
