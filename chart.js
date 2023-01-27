const APIVS = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/`;
const key = "VFE8G4CQXPJ65CQDXTT5JDKCH";

newFunction();

function newFunction() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const lat2 = position.coords.latitude;
            const lon2 = position.coords.longitude;
            let APIS = `${APIVS + lat2},${lon2}?key=${key}`;
            // console.log(APIS);
            getDaysWeather(APIS);
        });
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

function getDaysWeather(APIS) {
    // //console.log(APIVS);
    fetch(APIS)
        .then((res) => res.json())
        .then((data) => getDatas(data));
}

function getDatas(data) {
    let currentHour = new Date().getHours().toString();

    // Arreglo para almacenar temperaturas
    let temperatureData = [];
    let fullData = [];

    // Iterar sobre data.days[0].hours[]
    for (let i = 0; i < data.days[0].hours.length; i++) {
        // Obtener hora del elemento actual
        let time = data.days[0].hours[i].datetime.toString();
        // Si la hora es mayor o igual a la hora actual, almacenar temperatura
        if (time >= currentHour) {
            temperatureData.push(Math.round((data.days[0].hours[i].temp - 32) / 1.8));
            fullData.push(data.days[0].hours[i].conditions);
        }
    }

    // si la cantidad de datos es menor a 6 agregar los datos del siguiente día
    if (temperatureData.length < 6) {
        // Iterar sobre data.days[1].hours[]
        for (let i = 0; i < data.days[1].hours.length; i++) {
            // Si la hora es mayor o igual a la hora actual, almacenar el elemento
            temperatureData.push(Math.round((data.days[1].hours[i].temp - 32) / 1.8));
            fullData.push(data.days[1].hours[i].conditions);
        }
    }
    //console.log(temperatureData);

    console.log(fullData);

    let hoursCount = 1 + new Date().getHours();

    let chartHours = [];
    for (let i = 0; i < temperatureData.length; i++) {
        couuntHours = hoursCount++;
        if (couuntHours > 24) {
            couuntHours = couuntHours - 24;
        }
        chartHours.push(couuntHours);
    }

    // fullData.forEach(element => {
    //     const hours = document.createElement("div");
    //     hours.textContent = fullData.element;
    //     document.getElementById("hours").appendChild(hours);

    // });

    //console.log(chartHours, currentHour);


    // Obtener una referencia al elemento canvas
    var ctx = document.getElementById("chart").getContext("2d");


    var gradient = ctx.createLinearGradient(0, 0, 0, 1000);
    gradient.addColorStop(0, "rgba(255, 0, 0, 1)");
    gradient.addColorStop(0.25, "rgba(255, 0, 0, 0.5)");
    gradient.addColorStop(0.5, "rgba(255, 255, 0, 0.5)");
    gradient.addColorStop(0.75, "rgba(255, 255, 0, 0.5)");
    gradient.addColorStop(1, "rgba(0, 255, 0, 0.5)");

    Chart.defaults.global.responsive = true;
    // Crear una nueva instancia de Chart utilizando el elemento canvas y los datos para el gráfico
    var chart = new Chart(ctx, {
        type: "line", // Tipo de gráfico (bar, line, etc.)
        data: {
            labels: chartHours, // Etiquetas para cada serie de datos
            datasets: [{
                label: "temp in ºC", // Etiqueta para esta serie de datos
                data: temperatureData, // Valores para cada punto de datos
                backgroundColor: gradient, // Color de fondo para cada barra
                pointStyle: 'url(https://simpleicons.org/icons/e.svg)'
            }, ],
        },
        options: {
            plugins: {
                legends: {
                    display: true,
                    // labels: {
                    //     usePointStyle: true,
                    // }
                },
                tooltip: {
                    enabled: true,
                }
            },
            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero: false,
                        callback: function(value) {
                            return `${value}:00`;
                        },
                    },
                }, ],
                yAxes: [{
                    ticks: {
                        callback: function(value) {
                            return `${value}ºC `;
                        },
                    },
                }, ],
            },
        },
    });
}