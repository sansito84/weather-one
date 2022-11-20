let weatherLoc = "https://weather-proxy.freecodecamp.rocks/api/current?";

document.addEventListener("DOMContentLoaded", function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var lat = "lat=" + position.coords.latitude;
            var lon = "lon=" + position.coords.longitude;
            var acc = "acc=" + position.coords.accuracy;
            console.log(lat, lon, acc);
            let getWeather = weatherLoc + lat + "&" + lon;
            console.table(getWeather);
            getWeatherAPI(getWeather);
        });
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
});

function getWeatherAPI(getWeather) {
    fetch(getWeather)
        .then((response) => response.json())
        .then((json) => console.log(json));
}
document.getElementById('acc')