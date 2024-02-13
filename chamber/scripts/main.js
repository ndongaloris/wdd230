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
const forecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=-4.27&lon=15.2&units=metric&appid=318b0a0b3e15694b7c687be6b0bcd797';
const members = "https://ndongaloris.github.io/wdd230/chamber/data/members.json";


function main(){
    apiFetch(url, forecast);
    member(members);
    events();
    subscribe();
    displayBanner();
}
async function apiFetch(url, cast){
    const response = await fetch(url);
    const response2 = await fetch(cast);
    try {
        if (response.ok){
            const data = await response.json();
            const data2 = await response2.json();
            
            displayWeather(data);
            displayForecast(data2);
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
    
    let name = document.createElement('h2');
    name.textContent = `${data.name.split(" ")[0]}, ${data.sys.country}`;

    let degree = document.createElement('h3');
    let wDescription = document.createElement('h3');
    degree.textContent= `${temp}℃`;
    wDescription.textContent= `${description}`;
    
    const fig = document.createElement('figure');

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
        degree.textContent = `${element.main.temp}℃`;
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
async function member(members){
    const response = await fetch(members);
    try{
        if (response.ok){
            const data = await response.json();
            spotlight(data);
        }
        else{
            throw Error(await response.text());
        }
    }
    catch (error){
        console.log(error);
    }
}
function spotlight(members){
    const spotlight = document.querySelector("#spotlights");
    const already = new Set();
    
    for (let index = 0; index < 3; index++) {
        const randomIndex = Math.floor(Math.random() * members['companies'].length)
        const company = members['companies'][randomIndex];
        const membership = company['membership level']; 
        
        if (membership === "Silver" || membership === "Gold"){
            if (already.has(randomIndex)){
                index--;
                continue;
            }
            already.add(randomIndex);
            const section = document.createElement('div');
            const name = document.createElement('h4');
            const links = document.createElement('a');
            const address = document.createElement('p');
            const number = document.createElement('p');
            const logo = document.createElement("img");
            const figure = document.createElement('figure');
            const figcaption = document.createElement('figcaption');
            
            name.textContent = company.names;
            address.textContent = company.addresses;
            
            links.href = company.website;
            links.textContent = company.website;
            
            number.textContent = company.phone;

            logo.src = company.icon;
            logo.alt = `${company.names} logo`;

            figure.appendChild(logo);
            section.setAttribute("class", "memb");

            figcaption.appendChild(name);
            figcaption.appendChild(address);
            figcaption.appendChild(number);
            figcaption.appendChild(links);

            figure.appendChild(figcaption);
            section.appendChild(figure);

            spotlight.appendChild(section);
        }
        else{
            if (index >= 0){
                index--;
            }
        }
    };

}
function displayBanner(){
    const day = new Date().getDay();
    const days = [1,2,3];
    const banner = document.querySelector("#banner");
    
    if (days.includes(day)){
        const close = document.createElement("a");
        close.className = 'close';
        close.textContent = "X";
        banner.appendChild(close);
    
        const image = document.createElement("img");
        image.src = 'images/banner.webp';
        image.alt = 'white house chamber';
        image.loading = 'lazy';
    
        banner.appendChild(image);
    
        const section = document.createElement('div');
    
        const header = document.createElement('h2');
        header.textContent = "Meet And Greet";
    
        const message = document.createElement('p');
        message.textContent = "We're thrilled to invite you to an evening of networking and collaboration at our Chamber of Commerce Meet and Greet! 🌐 Connect with fellow professionals, explore new opportunities, and build lasting relationships.";
        
        const time = document.createElement('p');
        time.textContent = "🗓️ Date: Wednesday    🕖 Time: 7:00 p.m."
        
        const bannerButton = document.createElement('button');
        bannerButton.textContent = "Register Now";
    
        section.appendChild(header);
        section.appendChild(message); 
        section.appendChild(time); 
        section.appendChild(bannerButton);
    
        banner.appendChild(section);
    }
    else{
        banner.id = 'nobanner';
    }
    banner.addEventListener('click', ()=>{
        banner.id = 'nobanner';
        banner.textContent = ''
    })
}
function events(){
    const eventSection = document.querySelector('.event');

    const header = document.createElement('h2');
    header.textContent = "Current Event";

    const firstP = document.createElement('p');
    firstP.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dolores repellat ex cupiditate reprehenderit aut sint nulla alias omnis nihil officiis deleniti distinctio dicta eos vitae aperiam, quis beatae quaerat.";

    const image = document.createElement('img');
    image.src = 'images/event.webp';
    image.alt = 'People taking part of business event';

    const secondP = document.createElement('p');
    secondP.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dolores repellat ex cupiditate reprehenderit aut sint nulla alias omnis nihil officiis deleniti distinctio dicta eos vitae aperiam, quis beatae quaerat.";

    eventSection.appendChild(header);
    eventSection.appendChild(firstP);
    eventSection.appendChild(image);
    eventSection.appendChild(secondP);

}

function subscribe(){
    const eventSection = document.querySelector('.event');

    const sections = document.createElement("div");
    sections.id = "subscribe";

    const image = document.createElement("img");
    image.src = 'images/sub.webp';
    image.alt = 'white house chamber';
    image.loading = 'lazy';

    sections.appendChild(image);

    const section = document.createElement('div');

    const header = document.createElement('h2');
    header.textContent = "Our Newsletter";

    const message = document.createElement('p');
    message.innerHTML = "🌟 Elevate Your Inbox with Exclusive Insights! <br> 📬 Be in the know and stay ahead of the curve!";
    
    const form = document.createElement('form');

    const input = document.createElement('input');
    input.placeholder = 'myemail@email.com';
    const button = document.createElement('button');
    button.textContent = "Subscribe";

    form.appendChild(input);
    form.appendChild(button);

    const bannerButton = document.createElement('button');
    bannerButton.textContent = "Register Now"; 
    
    section.appendChild(header);
    section.appendChild(message); 
    section.appendChild(form); 
    sections.appendChild(section);

    eventSection.appendChild(sections);
}

main();