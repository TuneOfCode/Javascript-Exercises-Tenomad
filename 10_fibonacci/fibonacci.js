const fibonacci = function (num) {
  num = +num;
  let num1 = 1,
    num2 = 0,
    temp;
  if (num < 0) return "OOPS";
  while (num > 0) {
    temp = num1;
    num1 += num2;
    num2 = temp;
    num--;
  }
  return num2;
};

// Do not edit below this line
module.exports = fibonacci;
