const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return Math.abs(a - b);
};

const sum = function (values) {
  let size = values.length;
  if (size < 1) return 0;
  return +values.reduce((total, current) => total + current, 0);
};

const multiply = function (values) {
  return +values.reduce((total, current) => total * current, 1);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (num) {
  if (num === 0 || num === 1) return 1;
  return num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
