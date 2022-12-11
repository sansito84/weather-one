const APIVS = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/`;
const key = "?key=VFE8G4CQXPJ65CQDXTT5JDKCH";

newFunction();

function newFunction() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const lat2 = position.coords.latitude;
            const lon2 = position.coords.longitude;
            let APIS = `${APIVS + lat2},${lon2}${key}`;
            // console.log(getWeather);
            console.log(APIS);
            getMoreWeather(APIS);
        });
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

function getMoreWeather(APIS) {
    // console.log(APIVS);
    fetch(APIS)
        .then((res) => res.json())
        .then((data) => getDatis(data));
}

function getDatis(data) {
    // console.log(data);
    const icon =
        "https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/2nd%20Set%20-%20Monochrome";

    // currentTime information

    let i = data.currentConditions.icon;
    // console.log(icon);
    let iconFile = icon + "/" + i + ".svg";
    // console.log(iconFile);
    iconImage.setAttribute("src", iconFile);

    //location
    const name = document.createElement("h2");
    name.textContent = data.name;
    document.getElementById("name").appendChild(name);

    // today condition

    let maxTodayF = data.days[0].tempmax;
    let minTodayF = data.days[0].tempmin;


    const maxToday = document.getElementById("maxToday");
    const minToday = document.getElementById("minToday");

    maxToday.textContent = "Max " + Math.round((maxTodayF - 32) / 1.8) + " ºC";
    minToday.textContent = "Min " + Math.round((minTodayF - 32) / 1.8) + " ºC";

    // today description
    let todayDescription = data.description;
    console.log(todayDescription);
    const description = document.getElementById("description");
    description.textContent = todayDescription;

    // current conditions
    let temp = document.createElement("h1");
    temp.textContent = Math.round(((data.currentConditions.temp) - 32) / 1.8) + " ºC";
    document.getElementById("temp").appendChild(temp);

    const feelslike = document.createElement("h2");
    feelslike.textContent = Math.round(((data.currentConditions.feelslike) - 32) / 1.8) + " ºC";;
    document.getElementById("feelslike").appendChild(feelslike);

    //wind direction and speed

    const deg = document.createElement("img");

    deg.textContent = Math.round(data.currentConditions.winddir);
    deg.setAttribute("id", "wind");
    document.getElementById("deg").appendChild(deg);
    console.log("deg: " + deg)

    const speed = document.createElement("h3");
    speed.textContent = data.currentConditions.windspeed + " km/h";
    document.getElementById("speed").appendChild(speed);

    // look for 3 days in the future

    let maxi1 = data.days[1].tempmax;
    let mini1 = data.days[1].tempmin;
    let iconi1 = data.days[1].icon;
    let maxi2 = data.days[2].tempmax;
    let mini2 = data.days[2].tempmin;
    let iconi2 = data.days[2].icon;
    let maxi3 = data.days[3].tempmax;
    let mini3 = data.days[3].tempmin;
    let iconi3 = data.days[3].icon;

    const max1 = document.getElementById("max1");
    max1.textContent = "Max " + Math.round((maxi1 - 32) / 1.8) + " ºC";
    const min1 = document.getElementById("min1");
    min1.textContent = "Min " + Math.round((mini1 - 32) / 1.8) + " ºC";

    const max2 = document.getElementById("max2");
    max2.textContent = "Max " + Math.round((maxi2 - 32) / 1.8) + " ºC";
    const min2 = document.getElementById("min2");
    min2.textContent = "Min " + Math.round((mini2 - 32) / 1.8) + " ºC";

    const max3 = document.getElementById("max3");
    max3.textContent = "Max " + Math.round((maxi3 - 32) / 1.8) + " ºC";
    const min3 = document.getElementById("min3");
    min3.textContent = "Min " + Math.round((mini3 - 32) / 1.8) + " ºC";

    let icon1 = icon + "/" + iconi1 + ".svg";
    let icon2 = icon + "/" + iconi2 + ".svg";
    let icon3 = icon + "/" + iconi3 + ".svg";

    iconImage1.setAttribute("src", icon1);
    iconImage2.setAttribute("src", icon2);
    iconImage3.setAttribute("src", icon3);

    // calling datetime

    let datetime1 = data.days[1].datetime;
    let datetime2 = data.days[2].datetime;
    let datetime3 = data.days[3].datetime;

    const date1 = document.getElementById("date1");
    const date2 = document.getElementById("date2");
    const date3 = document.getElementById("date3");
    date1.textContent = datetime1;
    date2.textContent = datetime2;
    date3.textContent = datetime3;

    const humidity = document.createElement("h2");
    humidity.textContent = data.currentConditions.humidity + "%";
    document.getElementById("humidity").appendChild(humidity);





    windDegree();


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



function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("txt").innerHTML = h + ":" + m + ":" + s;
    t = setTimeout("startTime()", 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}