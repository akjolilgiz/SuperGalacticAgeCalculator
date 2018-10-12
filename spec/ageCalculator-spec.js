import { AgeCalculator } from '../src/AgeCalculator.js';

describe('AgeCalculator test', function() {

  it('should return correct year of birth when user enters their age', function() {
    let newAgeCalculator = new AgeCalculator(18);
    let result = newAgeCalculator.getYearOfBirth(18);
    expect(result).toEqual(2000);
  });
  it('should return correct age in Mercury', function() {
    let newAgeCalculator = new AgeCalculator(18);
    let result = newAgeCalculator.getYearInMercury(18);
    expect(result).toEqual(Math.floor(18/.24));
  });
  it('should return correct age in Venus', function() {
    let newAgeCalculator = new AgeCalculator(18);
    let result = newAgeCalculator.getYearInVenus(18);
    expect(result).toEqual(Math.floor(18/.64));
  });
  it('should return correct age in Mars', function() {
    let newAgeCalculator = new AgeCalculator(18);
    let result = newAgeCalculator.getYearInMars(18);
    expect(result).toEqual(Math.floor(18/1.88));
  });
  it('should return correct age in getYearInJupiter', function() {
    let newAgeCalculator = new AgeCalculator(18);
    let result = newAgeCalculator.getYearInJupiter(18);
    expect(result).toEqual(Math.floor(18/11.86));
  });
  it('should return amount of years a user has left to live', function() {
    let newAgeCalculator = new AgeCalculator(18);
    let result = newAgeCalculator.getLifeExpectancyOnEarth(18);
    expect(result).toEqual(77-18);
  });
  it('should return amount of years a user has left to live in Mercury time', function() {
    let newAgeCalculator = new AgeCalculator(18);
    let lifeExpectancyOnEarth = newAgeCalculator.getLifeExpectancyOnEarth(18);
    let result = newAgeCalculator.getYearInJupiter(lifeExpectancyOnEarth);
    expect(result).toEqual(Math.floor(59/11.86));
  });

});
