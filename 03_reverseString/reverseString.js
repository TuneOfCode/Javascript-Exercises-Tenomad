const reverseString = function (str) {
  let size = str.length;
  let result = "";
  if (size === 0) return "";
  for (let i = size - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
};

// Do not edit below this line
module.exports = reverseString;
