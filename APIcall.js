(document).ready(function() {
    if (navigator.geolocation) {
        getLocalization();
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
})

function getLocalization() {
    var weatherLoc = "https://weather-proxy.freecodecamp.rocks/api/current?"
    navigator.geolocation.getCurrentPosition(function(position) {
        var lat = "lat=" + position.coords.latitude;
        var lon = "lon=" + position.coords.longitude;
        console.log(lat, lon);
        var getWeather = weatherLoc + lat + "&" + lon;
        console.log(getWeather);
    });
}