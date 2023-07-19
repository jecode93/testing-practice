const stringLength = require('./stringLength.js');

describe('stringLength', () => {
  test('returns the correct length', () => {
    expect(stringLength('calculator')).toBe(10);
  });


  test('an error for a string longer than 10 characters', () => {
    expect(() => {
      stringLength('encyclopedia');
    }).toThrow('Characters should not longer than 10');
  });

  test('throws an error', () => {
    expect(() => {
      stringLength('');
    }).toThrow('Should have at least 1 character');
  });
});