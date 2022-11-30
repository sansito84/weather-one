const weatherLoc = "https://weather-proxy.freecodecamp.rocks/api/current?";

document.addEventListener("DOMContentLoaded", function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const lat = `lat=${position.coords.latitude}`;
            const lon = `lon=${position.coords.longitude}`;
            const acc = `acc=${position.coords.accuracy}`;
            // console.log(lat, lon, acc);
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
    // const temp = document.createElement("h1");
    // temp.textContent = Math.round(dato.main.temp) + " ºC";
    // document.getElementById("temp").appendChild(temp);
    const speed = document.createElement("h3");
    speed.textContent = dato.wind.speed + " km/h";
    document.getElementById("speed").appendChild(speed);
    // const weather = document.createElement("h2");
    const weather = dato.weather[0].main;
    document.getElementById("weather").textContent = weather;
    const name = document.createElement("h2");
    name.textContent = dato.name;
    document.getElementById("name").appendChild(name);
    const country = document.createElement("h2");
    country.textContent = dato.sys.country;
    document.getElementById("country").appendChild(country);
    // const feelslike = document.createElement("h2");
    // feelslike.textContent = Math.round(dato.main.feels_like) + " ºC";
    // document.getElementById("feelslike").appendChild(feelslike);
    const deg = document.createElement("img");
    deg.textContent = Math.round(dato.wind.deg);
    deg.setAttribute("id", "wind");
    const humidity = document.createElement("h3");
    humidity.textContent = dato.main.humidity + "%";
    document.getElementById("humidity").appendChild(humidity);
    document.getElementById("deg").appendChild(deg);



    backgroundGenerator(weather);
    windDegree();
}
// modifica elementos dependiendo del valor de weather
function backgroundGenerator(weather) {
    var container = document.getElementById("main");
    const clima = weather
    const fondo = document.querySelectorAll('.fondo')[0];


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

function windDegree() {
    var windDegree = document.getElementById("wind").textContent;
    // console.log(windDegree);
    let a = "";
    let loader = document.getElementById("loader");
    let main = document.getElementById("main");
    // console.log(loader)

    if (
        (windDegree > 337 && windDegree <= 360) ||
        (windDegree >= 0 && windDegree < 22)
    ) {
        a = "./assets/imgs/norte.svg";
    }
    if (windDegree > 22 && windDegree <= 67) {
        a = "./assets/imgs/noreste.svg";
    }
    if (windDegree > 67 && windDegree <= 112) {
        a = "./assets/imgs/este.svg";
    }
    if (windDegree > 112 && windDegree <= 157) {
        a = "./assets/imgs/sureste.svg";
    }
    if (windDegree > 157 && windDegree <= 202) {
        a = "./assets/imgs/sur.svg";
    }
    if (windDegree > 202 && windDegree <= 247) {
        a = "./assets/imgs/suroeste.svg";
    }
    if (windDegree > 247 && windDegree <= 292) {
        a = "./assets/imgs/oeste.svg";
    }
    if (windDegree > 292 && windDegree <= 337) {
        a = "./assets/imgs/noroeste.svg";
    }
    wind.setAttribute("src", a);
    main.style.display = "block";
    footer.style.display = "block";
    loader.classList.add("visually-hidden");
}

// function getMoreWeather(APIS) {
//     // console.log(APIVS);
//     fetch(APIS)
//         .then((res) => res.json())
//         .then((data1) => getDatis(data1));
//     console.log(data1)
// }

// function getDatis(data1) {

// }