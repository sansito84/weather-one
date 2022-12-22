const APIVS = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/`;
const key = "VFE8G4CQXPJ65CQDXTT5JDKCH";

newFunction();

function newFunction() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const lat2 = position.coords.latitude;
            const lon2 = position.coords.longitude;
            let APIS = `${APIVS + lat2},${lon2}?key=${key}`;
            // //console.log(getWeather);
            //console.log(APIS);
            getMoreWeather(APIS);
        });
    } else {
        //console.log("Geolocation is not supported by this browser.");
    }
}

function getMoreWeather(APIS) {
    // //console.log(APIVS);
    fetch(APIS)
        .then((res) => res.json())
        .then((data) => getDatis(data));
}

function getDatis(data) {
    // //console.log(data);
    const icon =
        "https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/2nd%20Set%20-%20Monochrome";

    // currentTime information

    let i = data.currentConditions.icon;
    // //console.log(icon);
    let iconFile = icon + "/" + i + ".svg";
    // //console.log(iconFile);
    iconImage.setAttribute("src", iconFile);
    iconImage.setAttribute("alt", i);


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
    //console.log(todayDescription);
    const description = document.getElementById("description");
    description.textContent = todayDescription;

    // current conditions
    let temp = document.createElement("h2");
    temp.textContent =
        Math.round((data.currentConditions.temp - 32) / 1.8) + " ºC";
    document.getElementById("temp").appendChild(temp);

    const feelslike = document.createElement("h2");
    feelslike.textContent =
        Math.round((data.currentConditions.feelslike - 32) / 1.8) + " ºC";
    document.getElementById("feelslike").appendChild(feelslike);

    //wind direction and speed

    const deg = document.createElement("img");

    deg.textContent = Math.round(data.currentConditions.winddir);
    deg.setAttribute("id", "wind");
    document.getElementById("deg").appendChild(deg);
    //console.log("deg: " + deg)

    const speed = document.createElement("h3");
    speed.textContent = data.currentConditions.windspeed + " km/h";
    document.getElementById("speed").appendChild(speed);

    // look for 3 days in the future

    let maxi1 = data.days[1].tempmax;
    let mini1 = data.days[1].tempmin;
    let iconi1 = data.days[1].icon;
    let lavel1 = data.days[1].description;
    let maxi2 = data.days[2].tempmax;
    let mini2 = data.days[2].tempmin;
    let iconi2 = data.days[2].icon;
    let lavel2 = data.days[2].description;
    let maxi3 = data.days[3].tempmax;
    let mini3 = data.days[3].tempmin;
    let iconi3 = data.days[3].icon;
    let lavel3 = data.days[3].description;
    let maxi4 = data.days[4].tempmax;
    let mini4 = data.days[4].tempmin;
    let iconi4 = data.days[4].icon;
    let lavel4 = data.days[4].description;
    let maxi5 = data.days[5].tempmax;
    let mini5 = data.days[5].tempmin;
    let iconi5 = data.days[5].icon;
    let lavel5 = data.days[5].description;
    let maxi6 = data.days[6].tempmax;
    let mini6 = data.days[6].tempmin;
    let iconi6 = data.days[6].icon;
    let lavel6 = data.days[6].description;



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

    const max4 = document.getElementById("max4");
    max4.textContent = "Max " + Math.round((maxi4 - 32) / 1.8) + " ºC";
    const min4 = document.getElementById("min4");
    min4.textContent = "Min " + Math.round((mini4 - 32) / 1.8) + " ºC";

    const max5 = document.getElementById("max5");
    max5.textContent = "Max " + Math.round((maxi5 - 32) / 1.8) + " ºC";
    const min5 = document.getElementById("min5");
    min5.textContent = "Min " + Math.round((mini5 - 32) / 1.8) + " ºC";

    const max6 = document.getElementById("max6");
    max6.textContent = "Max " + Math.round((maxi6 - 32) / 1.8) + " ºC";
    const min6 = document.getElementById("min6");
    min6.textContent = "Min " + Math.round((mini6 - 32) / 1.8) + " ºC";


    let icon1 = icon + "/" + iconi1 + ".svg";
    let icon2 = icon + "/" + iconi2 + ".svg";
    let icon3 = icon + "/" + iconi3 + ".svg";
    let icon4 = icon + "/" + iconi4 + ".svg";
    let icon5 = icon + "/" + iconi5 + ".svg";
    let icon6 = icon + "/" + iconi6 + ".svg";


    iconImage1.setAttribute("src", icon1);
    iconImage1.setAttribute("title", lavel1);
    iconImage2.setAttribute("src", icon2);
    iconImage2.setAttribute("title", lavel2);
    iconImage3.setAttribute("src", icon3);
    iconImage3.setAttribute("title", lavel3);
    iconImage4.setAttribute("src", icon4);
    iconImage4.setAttribute("title", lavel4);
    iconImage5.setAttribute("src", icon5);
    iconImage5.setAttribute("title", lavel5);
    iconImage6.setAttribute("src", icon6);
    iconImage6.setAttribute("title", lavel6);


    // calling datetime

    let datetime1 = data.days[1].datetime;
    let datetime2 = data.days[2].datetime;
    let datetime3 = data.days[3].datetime;
    let datetime4 = data.days[4].datetime;
    let datetime5 = data.days[5].datetime;
    let datetime6 = data.days[6].datetime;

    const date1 = document.getElementById("date1");
    const date2 = document.getElementById("date2");
    const date3 = document.getElementById("date3");
    const date4 = document.getElementById("date4");
    const date5 = document.getElementById("date5");
    const date6 = document.getElementById("date6");
    date1.textContent = datetime1;
    date2.textContent = datetime2;
    date3.textContent = datetime3;
    date4.textContent = datetime4;
    date5.textContent = datetime5;
    date6.textContent = datetime6;

    // calling time

    const humidity = document.createElement("h2");
    humidity.textContent = data.currentConditions.humidity + "%";
    document.getElementById("humidity").appendChild(humidity);

    var today = new Date();
    var day = today.getDay();
    var daylist = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday ",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    var date =
        today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
    var dateTime = date;
    console.log(dateTime, daylist[day]);
    const fullDay = daylist[day] + " " + dateTime;
    const fecha = document.getElementById("showtime");
    fecha.textContent = fullDay;



    const sunrise = data.currentConditions.sunrise;
    const sunset = data.currentConditions.sunset;

    document.getElementById("sunrise").innerHTML = sunrise;
    document.getElementById("sunset").innerHTML = sunset;

    // const hour = document.getElementById("txt").innerText;

    // console.log(hour, sunrise, sunset);

    windDegree();





    // console.log(temp);
}



// console.log(data.days[0].hours[0].datetimeEpoch);


function windDegree() {
    var windDegree = document.getElementById("wind").textContent;
    // //console.log(windDegree);
    let a = "";
    let loader = document.getElementById("loader");
    let main = document.getElementById("main");
    // //console.log(loader)

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