let anchor = new Date();
let lifeExpectancy = 77;

export class AgeCalculator {
  constructor(age){
    this.age = age;
  }

getYearOfBirth(age){
  let userYear = (anchor.getFullYear()-age);
  return userYear;
}

getYearInMercury(age){
  let mercuryYear = Math.floor(age/.24);
  return mercuryYear;
}
getYearInVenus(age){
  let venusYear = Math.floor(age/.64);
  return venusYear;
}
getYearInMars(age){
  let marsYear = Math.floor(age/1.88);
  return marsYear;
}
getYearInJupiter(age){
  let jupiterYear = Math.floor(age/11.86);
  return jupiterYear;
}
getLifeExpectancyOnEarth(){
  let yearsLeft = lifeExpectancy - this.age;
  return yearsLeft;
}
}
