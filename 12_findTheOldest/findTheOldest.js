const findTheOldest = function (people) {
  return people
    .map((item) => {
      let currentYear = new Date().getFullYear();
      let yearOfBirth = item.yearOfBirth ?? currentYear;
      let yearOfDeath = item.yearOfDeath ?? currentYear;
      return {
        name: item.name,
        age: yearOfDeath - yearOfBirth,
      };
    })
    .sort((item1, item2) => item2.age - item1.age)[0];
};

// Do not edit below this line
module.exports = findTheOldest;
