const weatherLoc = "https://weather-proxy.freecodecamp.rocks/api/current?";

document.addEventListener("DOMContentLoaded", function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const lat = "lat=" + position.coords.latitude;
            const lon = "lon=" + position.coords.longitude;
            const acc = "acc=" + position.coords.accuracy;
            console.log(lat, lon, acc);
            let getWeather = weatherLoc + lat + "&" + lon;
            console.log(getWeather);
            getWeatherAPI(getWeather);
        });
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
});

function getWeatherAPI(getWeather) {
    fetch(getWeather)
        .then((res) => res.json())
        .then((data) => getDatos(data));
}

function getDatos(dato) {
    const temp = document.createElement("h2");
    temp.textContent = dato.main.temp + " ºC";
    document.getElementById("temp").appendChild(temp);
    const speed = document.createElement("h2");
    speed.textContent = dato.wind.speed + " m/s";
    document.getElementById("speed").appendChild(speed);
    const weather = document.createElement("h3");
    weather.textContent = dato.weather[0].main;
    document.getElementById("weather").appendChild(weather);
    const name = document.createElement("h1");
    name.textContent = dato.name;
    document.getElementById("name").appendChild(name);
    const country = document.createElement("h1");
    country.textContent = dato.sys.country;
    document.getElementById("country").appendChild(country);
    const feelslike = document.createElement("h2");
    feelslike.textContent = dato.main.feels_like + " ºC";
    document.getElementById("feelslike").appendChild(feelslike);
}