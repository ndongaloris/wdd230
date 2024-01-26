const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=318b0a0b3e15694b7c687be6b0bcd797'

async function apiFetch(url){
    const response = await fetch(url);
    try {
        if (response.ok){
            const data = await response.json();
            displayResults(data)
        }
        else{
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

function displayResults(data){
    const temp = data.main.temp;
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;

    currentTemp.textContent = temp;
    captionDesc.textContent= description;

    weatherIcon.src = `https://openweathermap.org/img/w/${icon}.png`;
    weatherIcon.alt = "Weather Icon";
}

apiFetch(url);