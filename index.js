// https:

// f18f91750a7f033b42cfd40f2996755e

// api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}

const weatherApi = {

key:"f18f91750a7f033b42cfd40f2996755e",

baseUrl:"https://api.openweathermap.org/data/2.5/weather"
}
// add even lister key function.
const searchInputBox = document.getElementById("input-box");
searchInputBox.addEventListener("keypress",(event) =>{
if(event.keyCode == 13){
    console.log(searchInputBox.value);
    getWeatherReport(searchInputBox.value);
    document.getElementById('weather-body').style.display = "block";
}
   
})

// get weather report
function getWeatherReport (city){
fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)

    .then(weather =>{   return weather.json()})
    .then(showWeatherReport)
}
// show weather report
function showWeatherReport (weather)
{
console.log(weather);
let city = document.getElementById('city');
city.innerText = `${weather.name},${weather.sys.country}`;
let temp = document.getElementById('temp');
temp.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;
let minMaxTemp = document.getElementById('min-max');
minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C(min)/,${Math.ceil(weather.main.temp_max)}&deg;C(max)`;
let weatherType = document.getElementById('weather');
weatherType.innerText = `${weather.weather[0].main}`;
let date = document.getElementById('date');
let toDay = new Date();
date.innerText = toDayDate(toDay);

if (weatherType.textContent == 'Haze'){
    document.body.style.backgroundImage = "url('images/haze.jpg')";
}
else if (weatherType.textContent == 'Clouds'){
document.body.style.backgroundImage = "url('images/cloudy.jpg')"


}

else if (weatherType.textContent == 'Clear'){
    document.body.style.backgroundImage = "url('images/clear.jpeg')"
    
    
    }

    else if (weatherType.textContent == 'Rain'){
        document.body.style.backgroundImage = "url('images/rainy.jpg')"
        
        
        }

}
// date manage
function toDayDate (dateArg){
let days = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
let months = ['january','february','march','april','may','june','july','august','september','october','november','december'];
let year = dateArg.getFullYear();
let month = months[dateArg.getMonth()];
let nowDate  = dateArg.getDate();
let day = days[dateArg.getDay()];
return `${nowDate} ${month} (${day}), ${year}`;

}