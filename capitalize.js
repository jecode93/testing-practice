function capitalize(str) {
  const [firstChar, ...remainingChars] = str;
    return `${firstChar.toUpperCase()}${remainingChars.join('')}`;
  }
  
  module.exports = capitalize;
  