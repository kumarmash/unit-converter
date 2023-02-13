/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
const inputEl = document.getElementById("input-el")

convertBtn.addEventListener("click", function () {
  calculateLength()
  calculateVolume()
  calculateMass()
})

function calculateLength() {
    lengthEl.textContent = `${inputEl.value} meters = ${(
        inputEl.value * 3.281
    ).toFixed(3)} feets |
                                ${inputEl.value} feet = ${(
        inputEl.value / 3.381
    ).toFixed(3)} meters`
}

function calculateVolume() {
    volumeEl.textContent = `${inputEl.value} liters = ${(
        inputEl.value * 0.264
    ).toFixed(3)} gallons | 
                                ${inputEl.value} gallons = ${(
        inputEl.value / 0.264
    ).toFixed(3)} liters`
}
function calculateMass() {
    massEl.textContent = `${inputEl.value} kilos= ${(
        inputEl.value * 2.204
    ).toFixed(3)} pounds |
                                ${inputEl.value} pounds = ${(
        inputEl.value / 2.204
    ).toFixed(3)} kilos`
}
