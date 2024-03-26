console.log("TaskDay9-2-DOM Manipulation with Forms");

const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const firstname = document.querySelector("#first-name").value;
    const lastname = document.querySelector("#last-name").value;
    const address = document.querySelector("#address").value;
    const pincode = document.querySelector("#pincode").value;
    const gender = document.querySelectorAll(".gender");
    const favfood = document.querySelectorAll(".favfood");
    const countrystate = document.querySelector(".countrystate").value;
    const country = document.querySelector(".country").value;

    const resulttable = document.querySelector(".table tbody");


    favfoodcount = 0
    for (let i=0; i<favfood.length; i++) {
        if(favfood[i].checked) {
            favfoodcount += 1;
        }
    };

    if(favfoodcount >= 2) {
        const row = resulttable.insertRow();
        const col1 = row.insertCell(0);
        const col2 = row.insertCell(1);
        const col3 = row.insertCell(2);
        const col4 = row.insertCell(3);
        const col5 = row.insertCell(4);
        const col6 = row.insertCell(5);
        const col7 = row.insertCell(6);
        const col8 = row.insertCell(7);

        col1.innerText = firstname;
        col2.innerText = lastname;
        col3.innerText = address;
        col4.innerText = pincode;
    
        for (let i=0; i<gender.length; i++) {
            if(gender[i].checked) {
                col5.innerText = gender[i].value;
                break;
            }
        };
        for (let i=0; i<favfood.length; i++) {
            if(favfood[i].checked) {
                col6.innerText += ` "${favfood[i].value}" `;
            }
        };

        col7.innerText = countrystate;
        col8.innerText = country;
        form.reset();
    } else {
        alert("Please select any two fav food");
        return false;
    }
});