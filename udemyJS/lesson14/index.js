function amountOfPages(summary) {
  let result = '';
  let count = 0;
  for (let i = 1; i <= summary; i++) {
    result += i;
    if (result.length === summary) {
      count = i;
      break;
    }
  }
  return count;
}
console.log(amountOfPages(25));

function inPangram(str) {
  let strArr = str.toLowerCase();
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  console.log(strArr, alphabet);
  for (let i = 0; i < alphabet.length; i++) {
    if (strArr.indexOf(alphabet[i]) < 0) {
      return false;
    }
  }
  return true;
}

console.log(inPangram('This is not a pangram.'));

function deepCount(a) {
  let count = a.length;
  for (let i = 0; i < a.length; i++) {
    if (Array.isArray(a[i])) {
      count += deepCount(a[i]);
    }
  }
  return count;
}

function deepCount(a) {
  return a.reduce(
    (s, e) => s + (Array.isArray(e) ? deepCount(e) : 0),
    a.length,
  );
}

console.log(deepCount([[[[[[[[[]]]]]]]]]));
