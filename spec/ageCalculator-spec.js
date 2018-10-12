import { AgeCalculator } from '../src/AgeCalculator.js';

describe('AgeCalculator test', function() {

  it('should return correct year of birth when user enters their age', function() {
    let newAgeCalculator = new AgeCalculator(18);
    let result = newAgeCalculator.getYear();
    expect(result).toEqual(2000);
  });
});
