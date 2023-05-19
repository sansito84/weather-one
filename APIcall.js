const weatherLoc = "https://weather-proxy.freecodecamp.rocks/api/current?";

document.addEventListener("DOMContentLoaded", function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const lat = `lat=${position.coords.latitude}`;
            const lon = `lon=${position.coords.longitude}`;
            const acc = `acc=${position.coords.accuracy}`;
            //console.log(lat, lon, acc);
            let getWeather = `${weatherLoc + lat}&${lon}`;
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
// crear los elementos en el DOM
function getDatos(dato) {
    const weather = dato.weather[0].main;
    document.getElementById("weather").textContent = weather;
    const name = document.createElement("h2");
    name.textContent = dato.name;
    document.getElementById("name").appendChild(name);
    const country = document.createElement("h2");
    country.textContent = dato.sys.country;
    document.getElementById("country").appendChild(country);

    backgroundGenerator(weather);
    getFlag(country);
}

function getFlag() {
    const flagURL = "https://flagsapi.com/";
    const flag = document.getElementById("country").textContent;
    const bander = flagURL + flag + '/shiny/64.png';
    document.getElementById("flag").setAttribute("src", bander);
    document.getElementById("flag").setAttribute("alt", flag);
    //console.log(flagURL + flag);
}


function backgroundGenerator(weather) {
    var container = document.getElementById("main");
    const clima = weather;
    const fondo = document.querySelectorAll(".fondo")[0];



    // var hidden = document.getElementsById("text");

    if (clima === "Clouds") {
        fondo.style.backgroundImage =
            "url('https://i.pinimg.com/originals/c1/f0/09/c1f009b219a31b387765b9a7bd8f6f1b.gif')";
        container.style.color = "mediumgray";
    }
    if (clima === "Rain") {
        fondo.style.backgroundImage =
            "url('https://www.gannett-cdn.com/-mm-/09629241d104a4756c279bf1ea4294534f1d70f1/c=0-59-640-421/local/-/media/2016/10/31/INGroup/Evansville/636135276888682113-sunny1.jpg?width=1200&disable=upscale&format=pjpg&auto=webp')";
    }
    if (clima === "Snow") {
        fondo.style.backgroundImage = "url('https://i.gifer.com/3Pm1.gif')";
        container.style.color = "grey";
    }
    if (clima === "Hail") {
        fondo.style.backgroundImage =
            "url('https://media.tenor.com/RO0pokQ2mwgAAAAC/hail-hail-storm.gif')";
        container.style.color = "white";
    }
    if (clima === "Fog") {
        fondo.style.backgroundImage =
            "url('https://media.tenor.com/hN8ma5kfmF0AAAAC/fog-mountains.gif')";
        container.style.color = "white";
    }
    if (clima === "Thunderstom") {
        fondo.style.backgroundImage = "url('https://i.gifer.com/KNUi.gif')";
        container.style.color = "white";
    }
    if (clima === "Clear") {
        fondo.style.backgroundImage =
            "url('https://data.whicdn.com/images/281744156/original.gif')";
        container.style.color = "mediumgrey";
    }
}