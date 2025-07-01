//Frequency Counter Pattern

//Naive Method : Time Complexity O(n^2)
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    // complexity of n
    let currentIndex = arr2.indexOf(arr1[i] ** 2); // complexity of n
    if (currentIndex === -1) {
      return false;
    }
    arr2.splice(currentIndex, 1);
  }
  return true;
}

const result = same([1, 2, 3, 4], [9, 16, 1, 4]);
console.log(result);

//Frequency Counter Pattern : Time Complexity O(n)
//Frequency Counter Pattern : Time Complexity O(n)
function same2(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (const val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (const val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (const key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}
const result1 = same2([1, 2, 3, 4], [9, 16, 1, 4]);
console.log(result1);
