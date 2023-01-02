const newArr = [1, 2, 3, 4, 4]
const newArr1 = [1, 2, 3, 4, 9]
const sum = 8;

const hasPairWithSum = (arr: Number[], sum: Number) => {
  let mySet = [];
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (mySet.includes(arr[i])) {
      return [mySet.indexOf(arr[i]), i];
    }
    mySet.push((sum - arr[i]));
  }
  return null;
}

console.log(hasPairWithSum(newArr, sum));
console.log(hasPairWithSum(newArr1, sum));
