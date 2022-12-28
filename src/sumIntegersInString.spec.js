import { sumOfIntegersInString } from "./sumIntegersInString";

describe('Sum Integers in String code kata', () => {
    test('Should Return 3', () => {
        const value = 'h3ll0w0rld';
        const resp = sumOfIntegersInString(value);
        expect(resp).toEqual(3);
      });
      test('Should Return 3635', () => {
        const value = 'The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog';
        const resp = sumOfIntegersInString(value);
        expect(resp).toEqual(3635);
      });
});
