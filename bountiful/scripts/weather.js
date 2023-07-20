const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const humidity = document.querySelector('#humidity');

const weather = 'https://api.openweathermap.org/data/2.5/weather?lat=33.158093&lon=-117.350594&units=imperial&appid=671c492a0807a73bede4032a5519c1ac'

const forecast = 'api.openweathermap.org/data/2.5/forecast?lat=33.158093&lon=-117.350594&appid=671c492a0807a73bede4032a5519c1ac'

async function apiFetch() {
    try {
      const response = await fetch(weather);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
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
    
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `Weather: ${desc}`;
    humidity.innerHTML = `${weatherData.main.humidity}`;
}

apiFetch();