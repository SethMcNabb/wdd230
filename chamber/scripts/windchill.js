let currenttemp = document.querySelector(".temperature").textContent;
let currentwind = document.querySelector(".windspeed").textContent;
let windchillfield = document.querySelector(".windchill");

currenttemp = parseInt(currenttemp)
currentwind = parseInt(currentwind)

if (currenttemp <= 50 && currentwind >3) {
    let chill = Math.round((35.74 + (0.6215 * currenttemp)) - (35.75 * Math.pow(currentwind,0.16)) + (0.4275*currenttemp*Math.pow(currentwind,0.16)));
    windchillfield.textContent = chill
} else {
    windchillfield.textContent = "N/A"    
};