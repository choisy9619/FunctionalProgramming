function convertToConditionalUpperCase(words) {
  let capitalized = [];

  for (let i = 0; i < words.length; i++) {
    checkWordLenth(words[i])
      ? capitalized.push(words[i].toUpperCase())
      : capitalized.push(words[i].toLowerCase());
  }

  return capitalized;
}

const checkWordLenth = (word) => {
  return word.length > 5;
};

exports.convertToConditionalUpperCase = convertToConditionalUpperCase;
exports.checkWordLenth = checkWordLenth;
