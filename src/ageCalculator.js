let anchor = new Date();
const lifeExpectancy = 77;

export class AgeCalculator {
  constructor(age){
    this.age = age;
  }

getYear(){
  let userYear = (anchor.getFullYear()-this.age);
  return userYear;
}

getYearInMercury(){
  mercuryYear = math.floor(this.age/.24);
  return mercuryYear;
}
getYearInVenus(){
  venusYear = math.floor(this.age/.64);
  return mercuryYear;
}
getYearInMars(){
  marsYear = math.floor(this.age/1.88);
  return marsYear;
}
getYearInJupiter(){
  jupiterYear = math.floor(this.age/11.86);
  return jupiterYear;
}
}
