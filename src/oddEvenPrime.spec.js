import { isPrime } from "./oddEvenPrime";
import { isOdd } from "./oddEvenPrime";
import { game } from "./oddEvenPrime";

describe('Odd Even Prime code kata', () => {
  test('Números primos', () => {
    const numbers = [3, 7, 5, 4];
    const result = numbers.map((num)=>isPrime(num))
    const expectedResult = [true, true, true, false]
    expect(result).toEqual(expectedResult);
  });
  test('Números pares', () => {
    const numbers = [2, 8, 4, 9];
    const result = numbers.map((num)=>isOdd(num))
    const expectedResult = [true, true, true, false]
    expect(result).toEqual(expectedResult);
  });
  test('Números impares', () => {
    const numbers = [7, 5, 3, 2];
    const result = numbers.map((num)=>isOdd(num))
    const expectedResult = [false, false, false, true]
    expect(result).toEqual(expectedResult);
  });
  test('Juego', () => {
    const numbers = [2, 3, 7, 8];
    const result = numbers.map((num)=>game(num))
    const expectedResult = ['Prime', 'Even', 'Even', 'Odd']
    expect(result).toEqual(expectedResult);
  });
});
