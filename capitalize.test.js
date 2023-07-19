const capitalize = require('./capitalize.js');

describe('capitalize', () => {
  test('Capitalization of the first character', () => {
    expect(capitalize('radar')).toBe('Radar');
    expect(capitalize('world')).toBe('World');
  });
});