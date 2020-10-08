let search = document.querySelector('#search');

// Whether API KEY
const KEY = '73d277320129a6b6ebccb818488d7528';

// Google API key

const google_places_api_KEY = 'AIzaSyBZ1wwu4SZD8T-P0ZYeFz0pne0wtyrCwfE';

const getPlaces = async () => {
        await new google.maps.places.Autocomplete(search);
}

search.addEventListener('keyup', (e) => {
    if(e.keyCode === 13){
        let city = e.target.value;
        getWeather(city);
    }

})

// /* <h6>${data.main}</h6>*/

const showWeatherData = (data) => {
    // Clouds and description
    let weatherData = data.weather;
    let cloudOutput = [];
    let tempData = Math.floor(data.main.temp - 273);

    for(let x of weatherData){
        cloudOutput +=`
            <div>
                <img src="http://openweathermap.org/img/wn/${x.icon}@2x.png" />
                <h1>${x.main}</h1>
                
                <h5>${x.description}</h5>
                <h1 class="font-weight-bold">${tempData}<sup>o</sup>C</h1>
            </div>
        `;
    }
    document.getElementById("cloudTemplate").innerHTML = cloudOutput;

}

const getWeather =async (city) => {
    let base_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`
    
    try{
        let response = await window.fetch(base_URL);
        let data = await response.json();
        showWeatherData(data);
        console.log(data);
    }catch(error){
        console.error(error);
    }
}