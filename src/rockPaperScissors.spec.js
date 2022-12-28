import { game } from "./rockPaperScissors";

describe('RockPaperScissors game', () => {
  test('Wins P1 1', () => {
    const valueP1 = 'Rock';
    const valueP2 = 'Scissors';
    const resp = game(valueP1,valueP2);
    expect(resp).toEqual(1);
  });
  test('Wins P1 2', () => {
    const valueP1 = 'Scissors';
    const valueP2 = 'Paper';
    const resp = game(valueP1, valueP2);
    expect(resp).toEqual(1);
  });
  test('Wins P1 3', () => {
    const valueP1 = 'Paper';
    const valueP2 = 'Rock';
    const resp = game(valueP1, valueP2);
    expect(resp).toEqual(1);
  });
  test('Lose P1 1', () => {
    const valueP2 = 'Rock';
    const valueP1 = 'Scissors';
    const resp = game(valueP1,valueP2);
    expect(resp).toEqual(2);
  });
  test('Lose P1 2', () => {
    const valueP2 = 'Scissors';
    const valueP1 = 'Paper';
    const resp = game(valueP1, valueP2);
    expect(resp).toEqual(2);
  });
  test('Lose P1 3', () => {
    const valueP2 = 'Paper';
    const valueP1 = 'Rock';
    const resp = game(valueP1, valueP2);
    expect(resp).toEqual(2);
  });
  test('Tie', () => {
    const valueP1 = '';
    const valueP2 = '';
    const resp = game(valueP1, valueP2);
    expect(resp).toEqual(0);
  });
});
