/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputEl = document.getElementById("user-input")
let convertBtn = document.getElementById("convert-btn")
let lengthValue = document.getElementById("meter-feet")
let volumeValue = document.getElementById("liters-gallons")
let massValue = document.getElementById("kilo-pounds")

const meterToFeet = 3.281
const literToGallon = 0.264
const kilogramToPound = 2.204
const gallonToLiter = 3.785


convertBtn.addEventListener("click", function(){
    let baseValue = inputEl.value
    let metersToFeet = baseValue*meterToFeet
    let feetToMeters = baseValue/meterToFeet
    lengthValue.textContent = `${baseValue} meters = ${metersToFeet.toFixed(2)} feet | ${baseValue} feet = ${feetToMeters.toFixed(2)} meters` 
    let litersToGallons = baseValue*literToGallon
    let gallonsToLiters = baseValue*gallonToLiter
    volumeValue.textContent = `${baseValue} liters = ${litersToGallons.toFixed(2)} gallons | ${baseValue} gallons = ${gallonsToLiters.toFixed(2)} liters`
    let kiloToPound = baseValue*kilogramToPound
    let poundToKilo = baseValue/kilogramToPound
    massValue.textContent = `${baseValue} kilos = ${kiloToPound.toFixed(2)} pounds | ${baseValue} pounds = ${poundToKilo.toFixed(2)} kilos`
})




