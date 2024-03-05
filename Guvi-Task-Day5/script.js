// Resume in JSON Format
const aviResume = {
    firstName : "Avinash",
    lastName : "A",
    education : "B.E.-E.E.E",
    dob : "15-12-1985",
    sex : "Male",
    maritalStatus : "Married",
    languages : ["Tamil","English"],
    nationality : "Indian",
    nativePlace : "Chennai",
    currLocation : "Tirupur",
    experience : "IT-ServiceSector",
    currWorking : "NotWorking",
    skills : ["English-Typing-JuniorGrade", "SQL", "MS-Office", "Hardware&Networking", "HouseWiring"],
    coursesUndergoing : "FSD-MernStackDeveloper"
};

console.log("JSON Resume Object", aviResume);

// To Loop through the object
// First Converting Object keys and Object values(if required) into separate arrays
const myResumeKeys = Object.keys(aviResume);
// const myResumeValues = Object.values(aviResume);
// console.log(myResumeKeys);   // checking the output
// console.log(myResumeValues); // checking the output

// Using For Loop Method
// Looped through the Array which has keys of JSON object - aviResume
console.log("----------Using for loop Method----------")
for (let i=0; i<myResumeKeys.length; i++) {
    console.log(`My ${myResumeKeys[i]} - ${aviResume[`${myResumeKeys[i]}`]}`);
};


//Using for in Method
console.log("----------Using for in Method----------")
for (key in aviResume) {
    console.log(`My ${key} - ${aviResume[`${key}`]}`);
}


//Using for of Method
// Looped through the Array which has keys of JSON object - aviResume
console.log("----------Using for of Method----------")
for (key of myResumeKeys) {
    console.log(`My ${key} - ${aviResume[`${key}`]}`);
}


//Using forEach Method
// Looped through the Array which has keys of JSON object - aviResume
console.log("----------Using forEach Method----------")
myResumeKeys.forEach((keyName) => {
    console.log(`My ${keyName} - ${aviResume[`${keyName}`]}`);
});


