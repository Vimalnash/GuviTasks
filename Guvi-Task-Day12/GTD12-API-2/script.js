console.log("Task-12-ApiFetch-2");
const pageHeader = document.createElement("h2");
pageHeader.setAttribute("class", "page-header");
pageHeader.innerText = "Welcome To Learn About List Of Famous Poets And Their Titles"
document.body.append(pageHeader);

const formContainer = document.createElement("div");
formContainer.setAttribute("class", "form-container");
document.body.append(formContainer);

const form = document.createElement("form");
form.setAttribute("class", "form");
formContainer.append(form);

// Creating button for to load the available authors list
const getAuthorListBtn = document.createElement("button");
getAuthorListBtn.setAttribute("class", "btn btn-load-Author-List");
getAuthorListBtn.setAttribute("id", "btn-load-Author");
getAuthorListBtn.innerText = "Show Author List";
form.append(getAuthorListBtn);

const selectList = document.createElement("div");
selectList.setAttribute("class", "select-container");
form.append(selectList);

const lblSelectAuthor = document.createElement("Label");
lblSelectAuthor.setAttribute("for", "author");
lblSelectAuthor.innerText = "Select Author";
lblSelectAuthor.setAttribute("class", "lables");
selectList.append(lblSelectAuthor);

const selectAuthor = document.createElement("select");
selectAuthor.setAttribute("selectedoption", "author");
selectAuthor.setAttribute("class", "select-author");
selectList.append(selectAuthor);

const authorOption = document.createElement("option");
authorOption.innerText = "";
selectAuthor.append(authorOption);


// Creating button for to generate result view

const getTitleListBtn = document.createElement("button");
getTitleListBtn.setAttribute("class", "btn btn-title-list");
getTitleListBtn.setAttribute("id", "btn-title-list");
getTitleListBtn.innerText = "Show Title List";
form.append(getTitleListBtn);

// Result View Container elements creation
const resultContainer = document.createElement("div");
resultContainer.setAttribute("class", "result-container");
document.body.append(resultContainer);

const resultHeader = document.createElement("div");
resultHeader.setAttribute("class", "result-header");
resultContainer.append(resultHeader);

const resultContent = document.createElement("div");
resultContent.setAttribute("class", "result-content");
resultContainer.append(resultContent);

window.addEventListener('load', function(e) { 
    getAuthorListBtn.focus(); 
})

// getting poetry authors list
async function getAuthorList() {
    try {
    const response = await fetch("https://poetrydb.org/author", {
        method: "GET",
    })

    const authorsList = await response.json();
    // console.log(authorsList);
    renderAuthorsList(authorsList);
    }
    catch (error) {
        console.log(error);
        return alert("Error", error);
    };
};

//Render the Array of authors list and show in select list
function renderAuthorsList(authorsList) {
    authorsList.authors.map((val) => {
        selectAuthor.innerHTML += `<option>${val}</option>`;
    });
    document.querySelector(".select-author").focus();
};

// click event to get the Available Poetry Authors list
form.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.id == "btn-load-Author") {
        alert("SelectAuthor from dropdown list");
        getAuthorList();

    }
});



// Getting Titles written by the Selected Author
async function getAuthorTitles() {
    try {
    const response = await fetch (`https://poetrydb.org/author/${selectAuthor.value}/title`, {
        method: "GET",
    })

    const titlesData = await response.json();
    
    // console.log(titlesData);
    renderAuthorTitles(titlesData);
    }
    catch (error) {
        console.log(error);
        return alert("Select Author To Show the Authors Title List");
    };
};

//Creating cards to display the titles
function createTitleList(titleData) {  
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    card.innerHTML = `
            <div class="card-text">${titleData.title}</div>
        `
    return card
};

//Appends the cards in the result view
function appendAuthorTitles(titleData) {
    const appendData = createTitleList(titleData);
    resultContent.append(appendData);

};

// Initialize the result view and render/loop through the array of titles list
function renderAuthorTitles(titlesData) {
    if(selectAuthor.value) {
    resultHeader.innerText=`Showing Titles for Author : "${selectAuthor.value}"`;
    resultHeader.style.borderBottom = "2px solid saddlebrown";
    }else {
        resultHeader.innerText=``;
        resultHeader.style.borderBottom = "none";
    }
    resultContent.innerHTML=``;
    titlesData.map((val) => {
        appendAuthorTitles(val);
    })
};

// click event to get the titles written by the selected author
form.addEventListener("click", (e) => {
    e.preventDefault();
    if(e.target.id == "btn-title-list") {
        getAuthorTitles();
    }
});
