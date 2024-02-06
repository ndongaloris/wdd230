// const visit = document.querySelector('#visit');
// let numVisits = Number(window.localStorage.getItem('count'))|| 0;
// let todayDate = Number(window.localStorage.getItem('date')) || 0;
// let theDate = new Date().getDay();
// if (numVisits === 0){
//     visit.textContent = "Welcome! Let us know if you have any questions.";
// }
// else if((todayDate - theDate) < 1) {
//     visit.textContent = "Back so soon! Awesome!";
// }
// else{
//     visit.textContent = `You last visited ${todayDate - theDate} days ago.` ;
// }

// numVisits++;
// localStorage.setItem('count', numVisits);
// localStorage.setItem('date', theDate);
const sectionInfo = document.querySelector('.weather');


const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-4.27&lon=15.28&units=metric&dt=1586468027&appid=318b0a0b3e15694b7c687be6b0bcd797'
const forecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=-4.27&lon=15.2&appid=318b0a0b3e15694b7c687be6b0bcd797';

async function apiFetch(url, cast){
    const response = await fetch(url);
    const response2 = await fetch(cast);
    try {
        if (response.ok || reponse2.ok){
            const data = await response.json();
            const data2 = await response2.json();
            
            displayWeather(data);
            displayForecast(data2);
            console.log(data);
        }
        else{
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

function displayWeather(data){
    const temp = data.main.temp;
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;
    
    const figure = document.createElement('div');
    
    let name = document.createElement('h2')
    name.textContent = `${data.name.split(" ")[0]}, ${data.sys.country}`;

    let degree = document.createElement('h3');
    let wDescription = document.createElement('h3');
    degree.textContent= `${temp}℃`;
    wDescription.textContent= `${description}`;
    
    const fig = document.createElement('figure')

    const weatherIcon= document.createElement('img');
    weatherIcon.src = `https://openweathermap.org/img/w/${icon}.png`;
    weatherIcon.alt = "Weather Icon";
    
    fig.appendChild(weatherIcon);
    fig.appendChild(degree);

    figure.className = "figure";
    figure.appendChild(name);
    figure.appendChild(fig);
    figure.appendChild(wDescription);
    
    sectionInfo.appendChild(figure);
}
function displayForecast(url){
    const forecast = document.createElement("div");
    forecast.className = "forecast";

    const fTitle = document.createElement("h2");
    fTitle.textContent = "5-day forecast";
    forecast.appendChild(fTitle);

    const ulist = document.createElement("ul");
    ulist.className = 'temps';
    for (let index = 0; index < 5; index++) {
        const list = document.createElement('li');
        const element = url['list'][index];
        
        const date = document.createElement('span');
        const degree = document.createElement('span');
        const description = document.createElement('span');
        const icon = document.createElement('img');
        const figure = document.createElement('figure');
        const dateTime = element.dt_txt;

        date.textContent = dateTime.split(" ")[0];
        degree.textContent = element.main.temp;
        description.textContent = element.weather[0].description;
        icon.src = `https://openweathermap.org/img/w/${element.weather[0].icon}.png`;

        figure.appendChild(icon);
        figure.appendChild(degree);

        list.appendChild(date);
        list.appendChild(figure);
        list.appendChild(description);

        ulist.appendChild(list);
    };
    forecast.appendChild(ulist);
    sectionInfo.appendChild(forecast);

}
apiFetch(url, forecast);