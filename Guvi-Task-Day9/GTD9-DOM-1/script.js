console.log("TaskDay9-1-DOM Pagination Task");

const divTitle = document.createElement("h1");
divTitle.setAttribute("id", "title");
divTitle.style.textAlign = "center";
divTitle.innerText = "DOM Pagination Task";
document.body.append(divTitle);

const divdesc = document.createElement("p");
divdesc.setAttribute("id", "description");
divdesc.style.textAlign = "center";
divdesc.innerText = "This Task is to create a pagination result view";
document.body.append(divdesc);

const divtableresponsive = document.createElement("div");
divtableresponsive.setAttribute("class", "table-responsive");
document.body.append(divtableresponsive);;

const divtable = document.createElement("table");
divtable.setAttribute("class", "table table-bordered");
divtable.setAttribute("id", "table");
divtableresponsive.append(divtable);

const tableheader = document.createElement("thead");
divtable.append(tableheader);

const tableheadrow = document.createElement("tr");
tableheader.append(tableheadrow);

const th = document.createElement("th");
tableheadrow.append(th);

const tablebody = document.createElement("tbody");
divtable.append(tablebody);


// Creating Container div

const divContainer = document.createElement("div");
divContainer.setAttribute("class", "container");
document.body.append(divContainer);

// Creating PageNo Switch div

const divPageChangeSwitch = document.createElement("div");
divPageChangeSwitch.setAttribute("id", "buttons");
divPageChangeSwitch.setAttribute("class", "d-flex justify-content-center");
divContainer.append(divPageChangeSwitch);


// GoTo First Page Loading

const loadFirstPage = document.createElement("button");
loadFirstPage.innerHTML = "&lt;&lt; First";
loadFirstPage.setAttribute("class", "btn-pg-First")
loadFirstPage.setAttribute("onclick", "pagination(0, 5, 'btn-pg-1')")
divPageChangeSwitch.append(loadFirstPage);


// GoTo Previous Page Loading

const loadPreviousPage = document.createElement("button");
loadPreviousPage.innerHTML = "&lt; Previous";
loadPreviousPage.setAttribute("class", "btn-pg-previous")
divPageChangeSwitch.append(loadPreviousPage);

const btnPagePrevious = document.querySelector(".btn-pg-previous");
btnPagePrevious.addEventListener("click", function() {
    const pageBtn = document.querySelectorAll(".btn-pgNo");
    for(let i=0; i<pageBtn.length; i++) {
        if(pageBtn[i].style.backgroundColor === "rgb(134, 181, 197)") {
            if(((i*5)-5) < 0 ) {
                break;
            } else {
                const start = ((i*5)-5);
                const end = (i*5);
                // console.log((i*5)-5 , (i*5) , `btn-pg-${i}`);
                pagination(start , end , `btn-pg-${i}`);
                break;
            }
        }
    };
});


// GoTo Next Page Loading

const loadNextPage = document.createElement("button");
loadNextPage.innerHTML = "Next &gt;";
loadNextPage.setAttribute("class", "btn-pg-next")
divPageChangeSwitch.append(loadNextPage);

const btnPageNext = document.querySelector(".btn-pg-next");
btnPageNext.addEventListener("click", function() {
    const pageBtn = document.querySelectorAll(".btn-pgNo");
    for(let i=0; i<pageBtn.length; i++) {
        // console.log(i, pageBtn[i], pageBtn[i].style.backgroundColor);
        if(pageBtn[i].style.backgroundColor === "rgb(134, 181, 197)") {
            if (i === pageBtn.length-1) {
                break;
            } else {
                const start = ((i*5)+5);
                const end = ((i*5)+10);
                // console.log((i*5)+5 , ((i*5)+10) , `btn-pg-${i+2}`);
                pagination(start , end , `btn-pg-${i+2}`);
                break;
            }

        }
    };
});


// GoTo Last Page Loading

const loadLastPage = document.createElement("button");
loadLastPage.innerHTML = "Last &gt;&gt;";
loadLastPage.setAttribute("class", "btn-pg-last")
divPageChangeSwitch.append(loadLastPage);

const btnPageLast = document.querySelector(".btn-pg-last");
btnPageLast.addEventListener("click", function() {
    const pageBtn = document.querySelectorAll(".btn-pgNo");
    const start = ((pageBtn.length*5)-5);
    const end = pageBtn.length*5;
    pagination(start , end , `btn-pg-${pageBtn.length}`);
});


// // No. of Pagination Buttons creation based on available contents
// //  by passing which set of data to load while clicking.

// Creating PageNo Collection div
const divPageNoCollection = document.createElement("div");
divPageNoCollection.setAttribute("id", "pageNoCollection");
divContainer.append(divPageNoCollection);


// Result View Creation

const divResult = document.createElement("div");
divResult.setAttribute("class", "result");
divContainer.append(divResult);


function pagination(sliceStart, sliceEnd, btnHg) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json");
    xhr.send();
    xhr.onload = function() {
        const dataArray = JSON.parse(xhr.response);

        divPageNoCollection.innerHTML="";

        let sum = 1;
        for (let i=0; i<dataArray.length; i+=5) {
            const button = document.createElement("button");
            button.setAttribute("class", `btn-pgNo`);
            button.setAttribute("id", `btn-pg-${sum}`);
            button.setAttribute("onclick", `pagination(${i}, ${i+5}, "btn-pg-${sum}")`)
            button.innerText = sum;
            sum++;
            divPageNoCollection.append(button);
        };

        const pageBtn = document.querySelectorAll(".btn-pgNo");
        pageBtn.forEach(node => {
            node.style.backgroundColor = "rgb(211, 243, 250)";
        });
        const btnHighlight = document.getElementById(btnHg)
        btnHighlight.style.backgroundColor = "rgb(134, 181, 197)";
        
        divResult.innerHTML = "";
        let pagedata = dataArray.slice(sliceStart, sliceEnd);
        pagedata.forEach((val) => {
            divResult.innerHTML += `
            <div class="card">
                <div><strong>Id:</strong> ${val.id},</div>
                <div><strong>Name:</strong> ${val.name},</div>
                <div><strong>Email:</strong> ${val.email}</  div>
            <div>
            `;
        });
        }
}

// Initializing the result view with 1st page content
let sliceStart = 0;
let sliceEnd = 5;
pagination(sliceStart, sliceEnd, "btn-pg-1");





