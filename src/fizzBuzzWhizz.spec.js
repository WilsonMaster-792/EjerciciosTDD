import { game, isPrime } from "./fizzBuzzWhizz";
describe('Fizz Buzz Game', () => {
  //Verifica si un número es primo
  test('Debería retornar verdadero si un número es primo', () => {
    [2, 3, 5, 7, 13, 11].map(number => expect(isPrime(number)).toBeTruthy());
  });
  //Fizz si es divisible para 3 y no es primo
  test('Debería retornar Fizz si un número es divisible para 3 y no es primo', () => {
    const numbers = [6, 9, 12, 21, 33];
    const result = numbers.map((num)=>game(num))
    const expectedResult = ['Fizz','Fizz','Fizz','Fizz','Fizz']
    expect(result).toEqual(expectedResult);
  });
  //Buzz si es divisible para 5 y no es primo
  test('Debería retornar Buzz si un número es divisible para 5 y no es primo', () => {
    const numbers = [10, 50, 25, 35];
    const result = numbers.map((num)=>game(num))
    const expectedResult = ['Buzz','Buzz','Buzz','Buzz']
    expect(result).toEqual(expectedResult);
  });
  //FizzBuzz si es divisible para 3 y para 5
  test('Debería retornar FizzBuzz si un número es divisible para 5 y 3', () => {
    const numbers = [15, 150, 30, 60];
    const result = numbers.map((num)=>game(num))
    const expectedResult = ['FizzBuzz','FizzBuzz','FizzBuzz','FizzBuzz']
    expect(result).toEqual(expectedResult);
  });
  //whizz si es primo
  test('Debería retornar whizz si un número es primo', () => {
    const numbers = [2, 3, 5, 7, 13, 11];
    const result = numbers.map((num)=>game(num))
    const expectedResult = ['Whizz','Whizz','Whizz','Whizz','Whizz','Whizz']
    expect(result).toEqual(expectedResult);
  });
  //El mismo número si no se cumplen las reglas anteriores
  test('Debería retornar el mismo número si no se cumplen las reglas anteriores', () => {
    [game(1), game(4)].map(number => expect(number));
    const numbers = [1, 4];
    const result = numbers.map((num)=>game(num))
    const expectedResult = numbers
    expect(result).toEqual(expectedResult);
  });
});

