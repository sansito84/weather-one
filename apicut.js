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
    const icon = "https://raw.githubusercontent.com/visualcrossing/WeatherIcons/2de560da89d87de44e3ca2a6593a12c19c8346d3/SVG/1st%20Set%20-%20Monochrome"
    const weather = data.currentConditions.pressure;

    console.log(weather);
    let dateTime = data.currentConditions.datetime;
    console.log(dateTime);
    let i = data.currentConditions.icon;
    console.log(icon);
    let iconFile = icon + "/" + i + ".svg"
    console.log(iconFile);
    iconImage.setAttribute("src", iconFile)
    let maxTodayF = data.days[0].tempmax;
    let minTodayF = data.days[0].tempmin;
    console.log(maxTodayF);
    console.log(minTodayF);
    // convert maxTodayF fahrenheit to celcius
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
    max1.textContent = "Max " + Math.round((maxi1 - 38) / 1.8) + " ºC";
    const min1 = document.getElementById("min1");
    min1.textContent = "Min " + Math.round((mini1 - 38) / 1.8) + " ºC";

    const max2 = document.getElementById("max2");
    max2.textContent = "Max " + Math.round((maxi2 - 38) / 1.8) + " ºC";
    const min2 = document.getElementById("min2");
    min2.textContent = "Min " + Math.round((mini2 - 38) / 1.8) + " ºC";

    const max3 = document.getElementById("max3");
    max3.textContent = "Max " + Math.round((maxi3 - 38) / 1.8) + " ºC";
    const min3 = document.getElementById("min3");
    min3.textContent = "Min " + Math.round((mini3 - 38) / 1.8) + " ºC";

    let icon1 = icon + "/" + iconi1 + ".svg";
    let icon2 = icon + "/" + iconi2 + ".svg";
    let icon3 = icon + "/" + iconi3 + ".svg";

    iconImage1.setAttribute("src", icon1);
    iconImage2.setAttribute("src", icon2);
    iconImage3.setAttribute("src", icon3);




    const maxToday = document.getElementById("maxToday")
    const minToday = document.getElementById("minToday");
    console.log(maxToday);
    console.log(minToday);
    maxToday.textContent = "Max " + Math.round((maxTodayF - 38) / 1.8) + " ºC";
    minToday.textContent = "Min " + Math.round((minTodayF - 38) / 1.8) + " ºC";

    console.log(maxToday);
    console.log(minToday);
    // const temp = data.main.temp;
    // const temp2 = data.main.temp_min;
    // const temp3 = data.main.temp_max;
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