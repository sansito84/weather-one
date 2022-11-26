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

            // changeElement(weather, main);
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
    backgroundGenerator();
}

function backgroundGenerator() {
    var container = document.getElementById("main");
    const clima = document.getElementById("weather").textContent;
    console.log(container, clima);
    if (clima === "Clouds") {
        container.style.backgroundImage = "url('https://i.pinimg.com/originals/c1/f0/09/c1f009b219a31b387765b9a7bd8f6f1b.gif')";
        container.style.color = "mediumgray";
    }
    if (clima === "Rain") {
        container.style.backgroundImage = "url('https://www.gannett-cdn.com/-mm-/09629241d104a4756c279bf1ea4294534f1d70f1/c=0-59-640-421/local/-/media/2016/10/31/INGroup/Evansville/636135276888682113-sunny1.jpg?width=1200&disable=upscale&format=pjpg&auto=webp')";
    }
    if (clima === "Snow") {
        container.style.backgroundImage = "url('https://i.gifer.com/3Pm1.gif')"
        container.style.color = "grey";
    }
    if (clima === "Hail") {
        container.style.backgroundImage = "url('https://media.tenor.com/RO0pokQ2mwgAAAAC/hail-hail-storm.gif')";
        container.style.color = "white";
    }
    if (clima === "Fog") {
        container.style.backgroundColor = "green";
        container.style.color = "white";
    }
    if (clima === "Thunderstom") {
        container.style.backgroundColor = "yellow";
        container.style.color = "white";
    }
    if (clima === "Clear") {
        container.style.backgroundImage = "url('https://www.gannett-cdn.com/-mm-/09629241d104a4756c279bf1ea4294534f1d70f1/c=0-59-640-421/local/-/media/2016/10/31/INGroup/Evansville/636135276888682113-sunny1.jpg?width=1200&disable=upscale&format=pjpg&auto=webp')";
        container.style.color = "light gray";
    }
}

// create a function to change background color of element with Id="main" deppending of Id="weather" innerText value
// function changeElement(element, div) {
//     console.log(element.innerText)
//     if ((element.innerText === "Rain")) {
//         div.style.backgroundColor = "red";
//     }
//     if ((element.innerText === "Clouds")) {
//         div.style.backgroundColor = "gray";
//     }

// }