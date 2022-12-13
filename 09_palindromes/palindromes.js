const palindromes = function (str) {
  str = str.toLowerCase().trim().replaceAll(/\W/g, "");
  let size = str.length;
  let isPalindromes = true;
  for (let i = 0; i < size / 2; i++) {
    if (str.charAt(i) !== str.charAt(size - i - 1)) {
      isPalindromes = false;
      break;
    }
  }
  return isPalindromes;
};

// Do not edit below this line
module.exports = palindromes;
