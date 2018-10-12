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


    let ageCalculator = new AgeCalculator(age);

    let yearOfBirth = ageCalculator.getYearOfBirth(age);
    let ageInMercury = ageCalculator.getYearInMercury(age);
    let ageInVenus = ageCalculator.getYearInVenus(age);
    let ageInMars = ageCalculator.getYearInMars(age);
    let ageInJupiter = ageCalculator.getYearInJupiter(age);
    let userLifeExpectancy = ageCalculator.getLifeExpectancyOnEarth(status);

    $("#yearOfBirth").text("You were born in : " + yearOfBirth);
    $("#ageInMercury").text(" Your age in Mercury : " + ageInMercury);
    $("#ageInVenus").text(" Your age in Mercury : " + ageInVenus);
    $("#ageInMars").text(" Your age in Mercury : " + ageInMars);
    $("#ageInJupiter").text(" Your age in Mercury : " + ageInJupiter);
    $("#lifeExpectancy").text(" You have " + userLifeExpectancy + " years to live on earth");

  });

});
