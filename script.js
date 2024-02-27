// ************ INSERTION SORT**************

// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let numberToInsert = arr[i];
//     let j = i - 1;
//     while (j >= 0 && arr[j] > numberToInsert) {
//       arr[j + 1] = arr[j];
//       j = j - 1;
//     }
//     arr[j + 1] = numberToInsert;
//   }
// }

// const arr = [-8, 44, 22, -2, -10, -22, 33, 24, 65, 34, 78];
// insertionSort(arr);
// console.log("Insertion Sorted Array is", arr);
// **************** QUICK SORT ******************
function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

const arr = [-2, 3, -42, -64634, 33, 55, 77, 99, 12];

console.log("Quick Sort array is", quickSort(arr));

// ***************** MERGE SORT **********************
