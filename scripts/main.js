const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener('click', () =>{
    hamButton.classList.toggle('open');
    navigation.classList.toggle('open');
})

const modeButton = document.querySelector("#modeButton");
const body = document.querySelector('body');
const nav = document.querySelector('nav');
modeButton.addEventListener('click', () =>{
    body.classList.toggle('dark');
    if (document.body.classList.contains('dark')){
        modeButton.src = 'images/light-mode.svg';
        hamButton.style.background = 'white';
        nav.style.color = 'white';
    }
        else{
            modeButton.src = 'images/dark-mode.svg';
        }
})

let numVisits = parseInt(window.localStorage.getItem('numVisits')) || 0;

const sectionInfo = document.querySelector('.information');


const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-4.27&lon=15.28&units=imperial&appid=318b0a0b3e15694b7c687be6b0bcd797'

async function apiFetch(url){
    const response = await fetch(url);
    try {
        if (response.ok){
            const data = await response.json();
            displayWeather(data);
            displayVisits();
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

    let titlePart = document.createElement('h2')
    titlePart.textContent = "Information";
    
    const figure = document.createElement('div');
    
    let wDescription = document.createElement('p')
    const weatherIcon= document.createElement('img');
    wDescription.textContent= `${temp}ºF - ${description}`;
    
    weatherIcon.src = `https://openweathermap.org/img/w/${icon}.png`;
    weatherIcon.alt = "Weather Icon";
    
    figure.appendChild(weatherIcon);
    figure.appendChild(wDescription);
    
    sectionInfo.appendChild(titlePart);
    sectionInfo.appendChild(figure);
}

function displayVisits(){
    const visit = document.createElement('p');

    if (parseInt(visit) === 0){
        visit.textContent = `This is your very first time visiting`;
    }
    else{
        visit.textContent = `Visits: ${numVisits}`;
    }
    numVisits++;
    localStorage.setItem("numVisits", numVisits);

    sectionInfo.appendChild(visit);
}

apiFetch(url);