import { AgeCalculator } from './ageCalculator.js'
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $("#userInput").submit(function(event) {
    event.preventDefault();
    let age = parseInt($("#userAge").val());
    let status = $("#smoker").val();

    let lifeExpectancy = 77;
    let ageCalculator = new AgeCalculator(age);

    let yearOfBirth = ageCalculator.getYearOfBirth(age);
    let ageInMercury = ageCalculator.getYearInMercury(age);
    let ageInVenus = ageCalculator.getYearInVenus(age);
    let ageInMars = ageCalculator.getYearInMars(age);
    let ageInJupiter = ageCalculator.getYearInJupiter(age);
    let userLifeExpectancy = ageCalculator.getLifeExpectancyOnEarth(status);
    let userLifeExpectancyOnMercury = ageCalculator.getYearInMercury(userLifeExpectancy);
    let userLifeExpectancyOnVenus = ageCalculator.getYearInVenus(userLifeExpectancy);
    let userLifeExpectancyOnMars = ageCalculator.getYearInMars(userLifeExpectancy);
    let userLifeExpectancyOnJupiter = ageCalculator.getYearInJupiter(userLifeExpectancy);


    $("#yearOfBirth").text("You were born in " + yearOfBirth);
    $("#ageInMercury").text(" Your are " + ageInMercury + " years old in Mercury");
    $("#ageInVenus").text(" Your are " + ageInVenus + " years old in Venus");
    $("#ageInMars").text(" Your age " + ageInMars + " years old in Mars");
    $("#ageInJupiter").text(" Your age : " + ageInJupiter + " years old in Jupiter");
    if (age < lifeExpectancy){$("#lifeExpectancy").text(" You will die in " + userLifeExpectancy + " years on earth.")}
    else {$("#lifeExpectancy").text(" You are living " + userLifeExpectancy + " years past average life expectancy! Greate Job!!")};
    $("#lifeExpectancyOnMercury").text(" You will die in " + userLifeExpectancyOnMercury + " years on Mercury.");
    $("#lifeExpectancyOnVenus").text(" You will die in " + userLifeExpectancyOnVenus + " years on Venus.");
    $("#lifeExpectancyOnMars").text(" You will die in " + userLifeExpectancyOnMars + " years on Mars.");
    $("#lifeExpectancyOnJupiter").text(" You will die in " + userLifeExpectancyOnJupiter + " years on Jupiter.");

  });

});
