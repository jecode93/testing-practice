const Calculator = require('./calculator.js');

describe('calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add', () => {
    test('Adds two numbers', () => {
      expect(calculator.add(2, 8)).toBe(10);
    });

    test('Add negative numbers', () => {
      expect(calculator.add(-4, -4)).toBe(-8);
    });
  });

  describe('subtract', () => {
    test('Subtracts two numbers', () => {
      expect(calculator.subtract(6, 5)).toBe(1);
    });
  });

  describe('divide', () => {
    test('Divides two numbers', () => {
      expect(calculator.divide(12, 3)).toBe(4);
    });

    test('Throws an error when dividing by zero', () => {
      expect(() => {
        calculator.divide(10, 0);
      }).toThrow('Should not be zero');
    });
  });

  describe('multiply', () => {
    test('Multiplies two numbers', () => {
      expect(calculator.multiply(4, 4)).toBe(16);
    });

    test('Return zero when multiply by zero', () => {
      expect(calculator.multiply(5, 0)).toBe(0);
    });
  });
});