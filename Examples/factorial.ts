function findFactorialRecursive(number) {
  if (number === 2) {
    return 2
  }
  return number * findFactorialRecursive(number - 1);
}
console.log('Recursive : ', findFactorialRecursive(5))

function findFactorialIterativeFor(number) {
  let answer = 1;
  for (let i = 2; i <= number; i++) {
    answer = answer * i
  }
  return answer;
}
console.log('IterativeFor : ', findFactorialIterativeFor(5))

function findFactorialIterativeWhile(number) {
  let answer = 1;
  while (number > 1) {
    answer = answer * number;
    number--;
  }
  return answer;
}
console.log('IterativeWhile : ', findFactorialIterativeWhile(5))
