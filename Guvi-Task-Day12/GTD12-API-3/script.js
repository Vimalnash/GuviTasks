console.log("Task-12-ApiFetch-3");

// Main form Container
const formContainer = document.createElement("form");
formContainer.setAttribute("class", "form-container");
document.body.append(formContainer);

//resultHeader to intimate user
const resultHeader = document.createElement("div");
resultHeader.setAttribute("class", "result-header");
document.body.append(resultHeader);
resultHeader.innerText= "Use the above buttons to start...";

//Result view container
const resultContainer = document.createElement("div");
resultContainer.setAttribute("class", "result-container");
document.body.append(resultContainer);

const menuGetBtns = document.createElement("div");
menuGetBtns.setAttribute("class", "menu-get-btns");
formContainer.append(menuGetBtns);

const getQuotesBtn = document.createElement("button");
getQuotesBtn.setAttribute("class", "btn get-quote-btn");
getQuotesBtn.innerText = "Generate One New Quote";
menuGetBtns.append(getQuotesBtn);

const getMyFavQuotesBtn = document.createElement("button");
getMyFavQuotesBtn.setAttribute("class", "btn my-favquote-btn");
getMyFavQuotesBtn.innerText = "MyFavQuotes";
menuGetBtns.append(getMyFavQuotesBtn);

const pageHeader = document.createElement("div");
pageHeader.setAttribute("class", "page-header");
pageHeader.innerText="Welcome to Get Different Famous Quotes";
formContainer.append(pageHeader);

const searchgroup = document.createElement("div");
searchgroup.setAttribute("class", "search-container");
formContainer.append(searchgroup);

const inputSearch = document.createElement("input");
inputSearch.setAttribute("class", "input-search");
inputSearch.setAttribute("placeholder", "Search - good, love, happy,...");
searchgroup.append(inputSearch);

const searchBtn = document.createElement("button");
searchBtn.setAttribute("class", "btn search-btn");
searchBtn.innerText = "Search";
searchgroup.append(searchBtn);  

// Getting a Random Quote
async function getAdviceQuotes() {
    const response = await fetch("https://api.quotable.io/quotes/random", {method:"GET"},);
    const data = await response.json();
    // console.log(data);
    resultContainer.innerHTML=``;
    renderData(data);
};

// Creating and returning result cards based on quoteApi or ourDbApi
function createView(val) {
    try{
    if (val.content) {
        const card = document.createElement("div");
        card.setAttribute("class", "card");
        card.innerHTML = `
            <div class="card-body">
                <div class="resultData" id="quote-content">${val.content}</div>
                <div class="resultData" id="quote-author"><span>-</span><span id="quote-author-value">'${val.author}'</span></div> 
                <button data-id="${val._id}" id="fav-btn" class="btn fav-btn">Add to Favourites</button>
            </div>
            `
        return card
    };
    if (val.name) {
        const card = document.createElement("div");
        card.setAttribute("class", "card");
        card.innerHTML = `
            <div class="card-body">
                <div class="resultData" id="quote-content">${val.name}</div>
                <div class="resultData" id="quote-author"><span>-</span><span id="quote-author-value">${val.batch}</span></div> 
                <button data-id="${val.id}" id="del-btn" class="btn">Delete</button>
            </div>
            `
        return card
    };
    }
    catch (error) {
        console.log(error);
        return alert("Error", error);
    };
};

// append the cards in resultcontainer
function appendData(val) {
    const cardData = createView(val);
    resultContainer.append(cardData);
};

//looping the received array
function renderData(data){
    data.map((val) => {
        appendData(val);
    });
};

//click event on generate one new quote button
getQuotesBtn.addEventListener("click", (e) => {
    e.preventDefault();
    resultHeader.innerText = `A Quote to Learn`;
    getAdviceQuotes();
});

// search api based on keyword
async function getSearchKeywordQuotes(searchKeyword) {
    try {
    const response = await fetch(`https://api.quotable.io/search/quotes?query=${searchKeyword}`, {method:"GET"},);
    const data = await response.json();
    // console.log(data);
    resultContainer.innerHTML=``;
    if (data.results.length > 0) {
        renderData(data.results);
    } else {
        resultContainer.innerHTML = `<h2 style="text-align: center">There are no results to display</h2>`;
    }
    }
    catch (error) {
        console.log(error);
        return alert("Error", error);
    };
};

// search button event and condition handling
searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (inputSearch.value) {
        resultHeader.innerText = `Showing Result for words in keyword '${inputSearch.value}'`
        getSearchKeywordQuotes(inputSearch.value);
    } else {alert("There are no keywords to search");};
});

// my favourites result generation based on myDbApi
async function getMyFavQuotes() {
    try {
    const res = await fetch("https://6604ddfa2ca9478ea17ea44d.mockapi.io/users", {method:"GET",});
    const data = await res.json();
    // console.log(data);
    resultContainer.innerHTML=``;
    resultHeader.innerText = `Showing Result for My Favourites`;
    renderData(data);
    }
    catch (error) {
        console.log(error);
        return alert("Error", error);
    };
};

// my favourite button click event
getMyFavQuotesBtn.addEventListener("click", (e) => {
    e.preventDefault();
    getMyFavQuotes();
});

// posting/adding new favourite quote to myDbApi
async function storeFavQuote(quoteData) {
    try {
    const res = await fetch("https://6604ddfa2ca9478ea17ea44d.mockapi.io/users", {
        method: "POST",
        body: JSON.stringify(quoteData),
        headers: {
            "content-type" : "application/json",
        },
    });

    const data = await res.json();
    // console.log(data);
    if (data) {
        const userRes = confirm("Do you wish to open My Favourite?");
        if (userRes == true) {getMyFavQuotes()};
    };
    }
    catch (error) {
        console.log(error);
        return alert("Error", error);
    };
};

// Deleting myFavourites in myDbApi
async function deleteFavQuote(id, parent) {
    try {
    const res = await fetch(`https://6604ddfa2ca9478ea17ea44d.mockapi.io/users/${id}`, {
        method: "DELETE",
    });

    const data = await res.json();
    // console.log(data);
    if (data) {
        getMyFavQuotes();
    };
    }
    catch (error) {
        console.log(error);
        return alert("Error", error);
    };
};

// creating of data to post to myFavourites
function addMyFav(name, batch, id) {
    return {
        name: name,
        batch: batch,
        contact: id,
    }
};

// Validate MyFavourites Db to avoid duplicate addition of favourites
async function addValidateMyFavQuotes(id, quoteData) {
    try {
    const res = await fetch("https://6604ddfa2ca9478ea17ea44d.mockapi.io/users", {method:"GET",});
    const data = await res.json();
    let alreadyexists = false;
    data.map((val) => {
        if(val.contact == id) {
            alert("Already available in MyFavourites.");
            alreadyexists = true;
        };
    });
    if(alreadyexists === false) {
        storeFavQuote(quoteData);
    };
    }
    catch(error) {
        console.log(error);
        return 
    }
};

// Click event trigger for addtoFav or deleteFav with userconfirmation
resultContainer.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.target.dataset.id;
    parent = e.target.parentNode.parentNode;
    const name = parent.querySelector("#quote-content").innerText;
    const batch = parent.querySelector("#quote-author #quote-author-value").innerText;
    const quoteData = addMyFav(name, batch, id);
    // console.log(parent, id);

    if(e.target.id == "fav-btn") {
        const userAddFavReq = confirm("Do you want add to My Favourites?");
        if (userAddFavReq == true) {
            addValidateMyFavQuotes(id, quoteData)
        };
    };

    if(e.target.id == "del-btn") {
        const userDelReq = confirm("Confirm Delete?");
        if (userDelReq == true) {
            deleteFavQuote(id);
        };
    };
});

