const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const windSpeed = document.querySelector("#wind-speed");


const url = 'https://api.openweathermap.org/data/2.5/weather?lat=32.70676413908385&lon=-117.15155047161586&units=imperial&appid=671c492a0807a73bede4032a5519c1ac';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        //console.log(data);
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
}
  

function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(1)}</strong>`;
    windSpeed.innerHTML = `<strong>${weatherData.wind.speed.toFixed(1)}</strong>`;
    
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;


//WINDCHILL//


    const currentTempValue = parseInt(weatherData.main.temp);
    const currentWindValue = parseInt(weatherData.wind.speed);

    if (currentTempValue <= 50 && currentWindValue >3) {
    let chill = Math.round((35.74 + (0.6215 * currentTempValue)) - (35.75 * Math.pow(currentWindValue,0.16)) + (0.4275*currentTempValue*Math.pow(currentWindValue,0.16)));
    document.querySelector('#windchill').innerHTML = `${chill}°F}`
    } else {
    document.querySelector('#windchill').innerHTML = "N/A"
    };
}

apiFetch();

