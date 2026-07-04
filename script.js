//  meter = 3.28084 feet
//  foot = 0.3048 meters
//  liter = 0.264172 gallons
//  gallon = 3.78541 liters
//  kilogram = 2.20462 pounds
//  pound = 0.453592 kilograms

const meter = 3.28084; 
const foot = 0.3048; 
const liter = 0.264172; 
const gallon = 3.78541;
const kilogram = 2.20462; 
const pound = 0.453592; 

let inputBox1= document.getElementById("input");
let button = document.getElementById("buttonClick");
let card1 = document.getElementById("card1");
let card2 = document.getElementById("card2");
let card3 = document.getElementById("card3");

 function convert(value,rate){
    return (value*rate).toFixed(3) ;
}
function updateCard(card,input,unit1,unit2,value1,value2){
    card.textContent =  ` ${input} ${unit1} = ${value1} ${unit2} | ${input} ${unit2}  = ${value2} ${unit1}`;
}
button.addEventListener("click",function(){
   let inputBox = Number(inputBox1.value);

    let meterToFeet = convert(inputBox,meter)
    let feetToMeter = convert(inputBox,foot);
    let literToGallon = convert(inputBox,liter)
    let gallonToLitre = convert(inputBox,gallon)
    let kiloToPound =  convert(inputBox,kilogram)
    let poundToKilo =convert(inputBox,pound)
    updateCard(card1,inputBox,"meters","feet",meterToFeet,feetToMeter);
    updateCard(card2,inputBox,"litre","gallon",literToGallon,gallonToLitre);
    updateCard(card3,inputBox,"kilogram","pound",kiloToPound,poundToKilo)
    // card1.innerHTML = ` ${inputBox} meters = ${meterToFeet} feet | ${inputBox} feet = ${feetToMeter} meters`;
    // card2.innerHTML = ` ${inputBox} litre = ${literToGallon} gallon | ${inputBox} gallon = ${gallonToLitre} litre`;
    // card3.innerHTML = ` ${inputBox} kilogram = ${kiloToPound} pound | ${inputBox} pound = ${poundToKilo} kilogram`
})
