const INPUTEL = document.querySelector("#input-field")
const INPUTBTN = document.querySelector("#input-btn")

const METERTOFEET = 3.281
const LITERTOGALLON = 0.264
const KGTOPOUND = 2.204

INPUTBTN.addEventListener ("click", function () {
    renderResult ()
})

function renderResult () {
    let quantity = INPUTEL.value
    if (!quantity) {
        quantity = 0
    }
    
    let conversionM = document.querySelector("#converion-m")
    let mToF = quantity * METERTOFEET
    let fToM = quantity / METERTOFEET
    conversionM.innerHTML = `${quantity} meters = ${mToF.toFixed(3)} feet | ${quantity} meters = ${fToM.toFixed(3)} feet `

    let conversionL = document.querySelector("#converion-l")
    let lToG = quantity * LITERTOGALLON
    let gToL = quantity / LITERTOGALLON
    conversionL.innerHTML = `${quantity} liters = ${lToG.toFixed(3)} gallons | ${quantity} gallons = ${gToL.toFixed(3)} liters `
    
    let conversionKG = document.querySelector("#converion-kg")
    let kgToP = quantity * KGTOPOUND
    let pToKg = quantity / KGTOPOUND
    conversionKG.innerHTML = `${quantity} kilos = ${kgToP.toFixed(3)} pounds | ${quantity} meters = ${pToKg.toFixed(3)} pounds `
}