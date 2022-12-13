const leapYears = function (year) {
  if (!Number.isInteger(year)) return false;
  return year % 400 === 0 || (year % 4 === 0 && year % 100 != 0);
};

// Do not edit below this line
module.exports = leapYears;
