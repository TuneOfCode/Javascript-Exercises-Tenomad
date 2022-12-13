const repeatString = function (str, loop) {
  let result = "";
  if (loop < 0) return "ERROR";
  for (let i = 0; i < loop; i++) {
    result += str.trim();
  }
  return result;
};

// Do not edit below this line
module.exports = repeatString;
