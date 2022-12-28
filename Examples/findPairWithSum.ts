const newArr = [1, 2, 3, 4, 4]
const newArr1 = [1, 2, 3, 4, 9]
const sum = 8;

const hasPairWithSum = (arr: Number[], sum: Number) => {
  let mySet = new Set();
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    console.log(mySet)
    if (mySet.has(arr[i])) {
      return true;
    }
    mySet.add((sum - arr[i]));
  }
  return false;
}

console.log(hasPairWithSum(newArr, sum));
console.log(hasPairWithSum(newArr1, sum));
