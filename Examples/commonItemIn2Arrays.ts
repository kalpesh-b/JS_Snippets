//check for any common item in given 2 arrays

const arr = ['a', 'b', 'c', 'x'];
const arr1 = ['z', 'y', 'i'];  // false
const arr2 = ['z', 'y', 'x'];  // true



const hasCommonItem = (arr: any[], arr1: any[]) => {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (!obj[item]) {
      obj[item] = true
    }
  };
  console.log(obj)
  for (let j = 0; j < arr1.length; j++) {
    const item = arr1[j];
    if (obj[item]) {
      return true
    }
  };
  return false;
}



console.log(hasCommonItem(arr, arr2))



const hasCommonItem1 = (arr: any[], arr1: any[]) => {
  return arr1.some(item => arr1.includes(item))
}



console.log(hasCommonItem1(arr, arr2))

