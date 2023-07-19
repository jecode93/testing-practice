const reverseString = require('./reversedString.js');

describe('reverseString', () => {
  test('return reversed string', () => {
    expect(reverseString('world')).toBe('dlrow');
  });
});