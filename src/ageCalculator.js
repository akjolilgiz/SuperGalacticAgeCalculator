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
  console.log(venusYear);
}
getYearInMars(age){
  let marsYear = Math.floor(age/1.88);
  return marsYear;
}
getYearInJupiter(age){
  let jupiterYear = Math.floor(age/11.86);
  return jupiterYear;
}
getLifeExpectancyOnEarth(status){
  let userLifeExpectancy = 0;
  if(this.age < lifeExpectancy){if (status === "Yes") {
    userLifeExpectancy = lifeExpectancy - 10 - this.age}
    else {userLifeExpectancy = lifeExpectancy - this.age}
  } else if (this.age > lifeExpectancy){ userLifeExpectancy = this.age - lifeExpectancy}
    return userLifeExpectancy;
  }
}
