const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-4.27&lon=15.28&units=imperial&appid=318b0a0b3e15694b7c687be6b0bcd797'

async function apiFetch(url){
    const response = await fetch(url);
    try {
        if (response.ok){
            const data = await response.json();
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

apiFetch(url);