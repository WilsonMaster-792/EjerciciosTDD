import { sum } from "./stringSum";
import { iSNaturalNumber } from "./stringSum";

describe('String Sum code kata', () => {
  test('Son números naturales', () => {
    const numbers = ['-1', 'a', '2'];
    const result = numbers.map((num)=>iSNaturalNumber(num))
    const expectedResult = [0, 0, 2]
    expect(result).toEqual(expectedResult);
  });
  test('Sumatoria naturales', () => {
    const result = sum('2','7');
    const expectedResult = 9;
    expect(result).toEqual(expectedResult);
  });
  test('Sumatoria Natural y no natural', () => {
    const result = sum('2','-1');
    const expectedResult = 2
    expect(result).toEqual(expectedResult);
  });
  test('Sumatoria no naturales', () => {
    const result = sum('a','-1');
    const expectedResult = 0
    expect(result).toEqual(expectedResult);
  });
});
