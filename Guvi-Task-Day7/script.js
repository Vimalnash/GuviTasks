console.log("Task-Day-7")

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function () {
    const data = JSON.parse(xhr.response);
    console.log("All Countries Data", data);


    // ----------Question a----------
    console.log("-----Q-a-Get all the countries from Asia continent /region using Filter function")

    const asiaCountriesdata = data.filter((val) => {
        return val.region === "Asia"
    });
    console.log("Only Asian Countries List", asiaCountriesdata);


    // ----------Question b----------
    console.log("-----Q-b-Get all the countries with a population of less than 2 lakhs using Filter function");

    const lessPopulation = data.filter((val) => {
        return val.population < 200000;
    });
    console.log("List with Population < 2,00,000 : ", lessPopulation);


    // ----------Question c----------
    console.log("-----Q-c-Print the following details name, capital, flag, using forEach function");

    data.forEach((val, index) => {
        console.log(`${index+1}. CountryFlag-${val.flag},  CountryName-${val.name.common},    Capital-${val.capital}`);
    });


    // ----------Question d----------
    console.log("-----Q-d-Print the total population of countries using Reduce function");

    const totalPopulation = data.reduce((acc, val) => {
        acc = acc + val.population;
        return acc;
    }, 0);
    console.log("Total Population of Countries = ", totalPopulation.toLocaleString('en-IN'));

    
    // ----------Question e----------
    console.log("-----Q-e-Print the country that uses US dollars as currency.");
    console.log("------Countries Using US Dollars------");

    data
        .filter((val) => val.currencies)        // Filtering which have Currencies key or else error occurred
        .filter((val) => val.currencies.USD)
        .map((val) => {
            console.log(val.name.common)
        });
}