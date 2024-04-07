console.log("Task-12-ApiFetch-1");


const divBodyHeader= document.createElement("h2");
divBodyHeader.setAttribute("class", "bodyheader");
divBodyHeader.innerText="Welcome to Know About Different Pokemon Character Details"
document.body.append(divBodyHeader);

const divContainer = document.createElement("div");
divContainer.setAttribute("class", "container");
document.body.append(divContainer);

const getCharBtn = document.createElement("button");
getCharBtn.setAttribute("class", "btn");
    
getCharBtn.innerHTML = 
`
<img src="./icons/clickbtn.png" title="tap icons" class="img-icon"/>
Get New Pokemon Character Details`
divContainer.append(getCharBtn);

const containerRow = document.createElement("div");
containerRow.setAttribute("class", "row");
divContainer.append(containerRow);

// Get the randon Pokeman character data and its extra details
async function getData(){
    const randomNo = Math.floor(Math.random() * 1025)
    const resCharData = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNo}/`, {
        method: "GET",
    })

    const charData = await resCharData.json();
    // console.log(charData);
    const resCharDataExtras = await fetch(`${charData.species.url}`, {
        method: "GET",
    })

    const CharDataExtras = await resCharDataExtras.json();
    // console.log(CharDataExtras);

    // Calling a function which loads the data to view by user
    viewData(charData, CharDataExtras);
}

// Creating Character details Display
function viewData(charData, CharDataExtras) {

    // to get the array of character special features
    function getCharStats(charStats) {
        charStatsArray = [];
        charStats.map((val) => {
            charStatsArray.push(val.stat.name)
        })
        return charStatsArray
    }

    // to get the array of char basic feature types
    function getCharTypes(charTypes) {
        charTypesArray = [];
        charTypes.map((val) => {
            charTypesArray.push(val.type.name)
        })
        return charTypesArray
    }

    // Load when some extra datas missing
    function viewDataWhenNull() {
        containerRow.innerHTML = `
        <div class="col">
            <div class="card">
                <div class="card-header">
                    <div class="card-header-text">I am ${charData.name}</div>
                    <img src="${charData.sprites.other.home.front_default}" alt="ImageNotAvailable" class="card-image"/>
                </div>
                <div class="card-body">
                    <div class="card-body-header">
                        Character Details
                    </div>
                    <div class="card-body-content">
                        <div class="card-text"><span class="text-caption">Name :</span><span class="text-value">${charData.name}</span></div>
                        <div class="card-text"><span class="text-caption">Weight :</span><span class="text-value">${charData.weight}</span></div>
                        <div class="card-text"><span class="text-caption">Color :</span><span class="text-value">${CharDataExtras.color.name}</span></div>
                        <div class="card-text"><span class="text-caption">growthRate :</span><span class="text-value">${CharDataExtras.growth_rate.name}</span></div>
                    </div>
                </div>
            </div>
        </div>
    `;
    }


    try {
    containerRow.innerHTML = `
        <div class="col">
            <div class="card">
                <div class="card-header">
                    <div class="card-header-text">I am ${charData.name}</div>
                    <img src="${charData.sprites.other.home.front_default}" alt="ImageNotAvailable" class="card-image"/>
                </div>
                <div class="card-body">
                    <div class="card-body-header">
                        Character Details
                    </div>
                    <div class="card-body-content">
                        <div class="card-text"><span class="text-caption">Name :</span><span class="text-value">${charData.name}</span></div>
                        <div class="card-text"><span class="text-caption">Stats :</span><span class="text-value">${getCharStats(charData.stats)}</span></div>
                        <div class="card-text"><span class="text-caption">Types :</span><span class="text-value">${getCharTypes(charData.types)}</span></div>
                        <div class="card-text"><span class="text-caption">Weight :</span><span class="text-value">${charData.weight}</span></div>
                        <div class="card-text"><span class="text-caption">Color :</span><span class="text-value">${CharDataExtras.color.name}</span></div>
                        <div class="card-text"><span class="text-caption">GrowthRate :</span><span class="text-value">${CharDataExtras.growth_rate.name}</span></div>
                        <div class="card-text"><span class="text-caption">Habitat :</span><span class="text-value">${CharDataExtras.habitat.name}</span></div>
                        <div class="card-text"><span class="text-caption">Shape :</span><span class="text-value">${CharDataExtras.shape.name}</span></div>
                    </div> 
                </div>
            </div>
        </div>
    `;
    }
    catch (error) {
        return viewDataWhenNull();
    }
}

// User Click event to get the random pokeman character details
getCharBtn.addEventListener("click", (e) => {
    getData()
});



