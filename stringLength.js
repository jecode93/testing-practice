const stringLength = (str) => {
  if (str.length > 10) {
    throw new Error('Characters should not longer than 10');
  } else if (str.length === 0) {
    throw new Error('Should have at least 1 character');
  } 
  return str.length;
};

module.exports = stringLength;