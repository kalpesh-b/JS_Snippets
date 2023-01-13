const array1 = [2, 5, 1, 2, 3, 5, 1, 2, 4];  // 2
const array2 = [2, 1, 1, 2, 3, 5, 1, 2, 4];  // 1
const array3 = [2, 3, 4, 5];  // undefined
const array4 = [0, 2, 0, 3, 4, 5];  // undefined

const findRecurring = (arr) => {
  let map = {}
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    if (map[arr[i]]) {
      return arr[i];
    }
    map[arr[i]] = true;
  }
  return undefined;
}

console.log(findRecurring(array1));
console.log(findRecurring(array2));
console.log(findRecurring(array3));
console.log(findRecurring(array4));
