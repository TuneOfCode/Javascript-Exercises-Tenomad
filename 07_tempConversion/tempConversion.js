const convertToCelsius = function (fahrenheit) {
  return +((fahrenheit - 32) * (5 / 9)).toFixed(1);
};

const convertToFahrenheit = function (celsius) {
  return +(32 + celsius * (9 / 5)).toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
