console.log("TaskDay-11-RestCountries & Weather using Fetch API");

const pageHeader = document.createElement("h1");
pageHeader.setAttribute("id", "title");
pageHeader.setAttribute("class", "text-center");
pageHeader.innerText = "RestCountries & Weather using Fetch API";
document.body.append(pageHeader);

const pageDesc = document.createElement("p");
pageDesc.setAttribute("id","description");
pageDesc.setAttribute("class", "text-center");
pageDesc.innerText = "Implement the rest countries and Open weather map APIs using Fetch() API";
document.body.append(pageDesc);

const container = document.createElement("div");
container.setAttribute("class", "container");
document.body.append(container);

const containerRow = document.createElement("div");
containerRow.setAttribute("class", "row");
container.append(containerRow);


fetch ("https://restcountries.com/v3.1/all", {
    method: "GET",
})
.then((response) => response.json())
.then((data) => {
    console.log(data);
    renderData(data);
})
.catch((error) => console.log(error))

//renders the received data
function renderData(data) {
    containerRow.innerHTML=`<h2>Loading Please Wait...</h2>`
    setTimeout(()=>{
        containerRow.innerHTML=``;
        data
        .filter((val) => val.capital)
        .map((val) => {
            createCard(val);
        })
    },1000)
}

// Country Cards Created
function createCard(val) {
    containerRow.innerHTML += `
        <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4 col-sm-12">
            <div class="card h-100" id="${val.name.common}">
                <div class="card-header">
                    ${val.name.common}
                </div>
                <img src="${val.flags.png}" alt="CountryFlag" class="card-img-top" />
                <div class="card-body">
                    <div class="card-text"><span class="cardTextName">Native Name : </span> <span class="cardTextValue">${val.name.common}</span></div>
                    <div class="card-text"><span class="cardTextName">Region : </span> <span class="cardTextValue">${val.region}</span></div>
                    <div class="card-text"><span class="cardTextName">Population : </span> <span class="cardTextValue">${val.population.toLocaleString('en-IN')}</span></div>
                    <div class="card-text"><span class="cardTextName">Capital : </span> <span class="cardTextValue">${val.capital}</span></div>
                    <div class="card-text"><span class="cardTextName">CountryCode : </span> <span class="cardTextValue">${val.fifa}</span></div>
                    <div class="card-text"><span class="cardTextName">Latlng : </span> <span class="cardTextValue">${val.latlng}</span></div>
                    <button class="btn btn-primary" onclick='getcountryLocation("${val.name.common}")'>Click for Weather</button>
                    <div class="weatherData" id="weatherData${val.name.common}"></div>
                </div>
            </div>
        </div>
        `
}


const weatherApiKey = "d8226b42ac59ff832e747004abb2eadc"

//get country Location by country name
function getcountryLocation(countryName) {
    const countryApiUrl =`http://api.openweathermap.org/geo/1.0/direct?q=${countryName}&appid=${weatherApiKey}`

    fetch(countryApiUrl)
    .then((response) => response.json())
    .then((data) => {
        // console.log(data[0].lat, data[0].lon);
        getWeather(data[0].lat, data[0].lon, countryName);

    })
}

// get weather description
function getWeather(lat, lon, countryName) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d8226b42ac59ff832e747004abb2eadc`)
    .then((response) => response.json())
    .then((data) => {
        // console.log(data.weather[0].description);
        const weatherData = document.getElementById(`weatherData${countryName}`);
        weatherData.innerHTML = `<h3>Loading...<h3>`
        setTimeout(()=> {
            const temperature = (data.main.temp) - 273.15
            weatherData.innerHTML = `
            <div class="card-text"><span class="cardTextName">Temperature : </span> <span class="cardTextValue">${temperature.toFixed(2)} °C</span></div>
            <div class="card-text"><span class="cardTextName">Weather : </span> <span class="cardTextValue">${data.weather[0].description.toUpperCase()}</span></div>
            `
        },1500)
    })
}