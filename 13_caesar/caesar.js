const caesar = function (str, shiftNum) {
  const AUnicode = "A".charCodeAt();
  const ZUnicode = "Z".charCodeAt();
  const aUnicode = "a".charCodeAt();
  const zUnicode = "z".charCodeAt();
  const distance = Math.abs(ZUnicode - AUnicode) + 1;
  let result = "";
  let size = str.length;
  for (let i = 0; i < size; i++) {
    let characterUnicode = str.charCodeAt(i);
    if (characterUnicode >= AUnicode && characterUnicode <= ZUnicode) {
      characterUnicode += shiftNum;
      while (characterUnicode < AUnicode) characterUnicode += distance;
      while (characterUnicode > ZUnicode) characterUnicode -= distance;
    } else if (characterUnicode >= aUnicode && characterUnicode <= zUnicode) {
      characterUnicode += shiftNum;
      while (characterUnicode < aUnicode) characterUnicode += distance;
      while (characterUnicode > zUnicode) characterUnicode -= distance;
    }
    result += String.fromCharCode(characterUnicode);
  }
  return result;
};

// Do not edit below this line
module.exports = caesar;
