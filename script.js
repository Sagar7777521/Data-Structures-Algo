function binarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === arr[middleIndex]) {
      return middleIndex;
    }
    if (target < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
}
console.log(binarySearch([2, 3, 5, 6, 8, 9, 11, 22, 44], 11));
console.log(binarySearch([2, 3, 5, 6, 8, 9, 11, 22, 44], 1));
console.log(binarySearch([2, 3, 5, 6, 8, 9, 11, 22, 44], 211));
