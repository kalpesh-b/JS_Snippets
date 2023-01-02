var str = "Hey Kalpesh";

function reverse(str: String) {
  if (!str || str.length < 2 || typeof str !== 'string') {
    return "INVALID INPUT";
  }

  const backward = [];
  const totalItems = str.length - 1;

  for (let i = totalItems; i >= 0; i--) {
    backward.push(str[i])
  }
  return backward.join('')
}

console.log(reverse(str));

function reverse2(str: string) {
  return str.split('').reverse().join('');
}
console.log(reverse2(str));

function reverse3(str: string) {
  return [...str].reverse().join('');
}
console.log(reverse3(str));
