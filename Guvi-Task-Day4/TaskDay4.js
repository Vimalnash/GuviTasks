
// -----------1. Do the below programs in anonymous function & IIFE -----------

const inputarr = [1, 2, 3, 5, 7, 8, 9, 10, 12, 15]

// 1.a. Print odd numbers in an array
// Using Anonymous Function method

const oddfunc = function(arr) {
    console.log("1.a. Question -> Input Array is", arr)
    console.log("1.a. Printing odd numbers Using Anonymous Method : ")
    let oddnoarr = [];
    for (let i=0; i<arr.length; i++) {
        if (arr[i]%2 !== 0) {
            oddnoarr.push(arr[i]);
        }
    }
    return oddnoarr;
}
console.log(oddfunc(inputarr));

// 1.a. Print odd numbers in an array
// Using IIFE Function method
(function (arr) {
    console.log("1.a. Printing odd numbers Using IIFE Method : ")
    let oddnoarr = [];
    for (let i=0; i<arr.length; i++) {
        if (arr[i]%2 !== 0) {
            oddnoarr.push(arr[i]);

        }
    }
    console.log(oddnoarr);
})(inputarr);



// 1.b. Convert All the Strings to title caps in a string array
const inputstrarr = ["Name1", "Name2", 3, true, "Name4"];

// Using Anonymous Function method
const capsString = function (strarr) {
    strarrcaps1 = [];
    console.log("1.b. Question -> Input Array is", strarr)
    for (let i=0; i<strarr.length; i++) {
        if(typeof strarr[i] == "string") {
            strarrcaps1.push(strarr[i].toUpperCase());
        } else {
            strarrcaps1.push(strarr[i]);
        }
    }
    return strarrcaps1;
}
console.log("1.b. All strings to capital using Anonymous Function", capsString(inputstrarr)); //["Name1", "Name2", 3, true, "Name4"]

// 1.b. Convert All the Strings to title caps in a string array
// Using IIFE Function method
(function (strarr) {
    strarrcaps2 = [];
    for (let i=0; i<strarr.length; i++) {
        if(typeof strarr[i] == "string") {
            strarrcaps2.push(strarr[i].toUpperCase());
        } else {
            strarrcaps2.push(strarr[i]);
        }
    }
    console.log("1.b. All strings to capital using IIFE Function", strarrcaps2); //["Name1", "Name2", 3, true, "Name4"]
})(inputstrarr)



//1.c. Sum of all numbers in an array
// Using Anonymous Function method

const sumArrFunc = function (arr) {
    console.log("1.c. Question -> Input Array is", arr);
    let sum = 0;
    for (let i=0; i<arr.length; i++) {
        sum += arr[i];
    }
    return "1.c. Sum of all numbers in an arr using Anonymous Function: " + sum;
}
console.log(sumArrFunc(inputarr)); //72

//1.c. Sum of all numbers in an array
// Using IIFE Function method

(function (arr) {
    let sum = 0;
    for (i=0; i<arr.length; i++) {
        sum += arr[i];
    }
    console.log("1.c. Sum of all numbers in an arr using IIFE Function:", sum); //72
})(inputarr);



//1.d. Return all the prime numbers in an array
// Using Anonymous Function Method,

const primeFunc = function (arr) {
    console.log("1.d. Question -> Input Array is", arr);
    let primenos = [];
    for (let i=0; i<arr.length; i++) {
        let isdivisible = [];
        for (let j=1; j<=arr[i]; j++) {
            if (arr[i]%j === 0) {
                isdivisible.push(j);
            }
        }
        if (isdivisible.length == 2) {
            primenos.push(arr[i]);
        }
    }
    return primenos;
}
console.log("1.d. Prime Nos From Array Using Anonymous Function Method : ", primeFunc(inputarr));

//1.d.Return all the prime numbers in an array
// Using IIFE Function method,

(function (arr) {
    let primenos = [];
    for (let i=0; i<arr.length; i++) {
        let isdivisible = [];
        for (let j=1; j<=arr[i]; j++) {
            if (arr[i]%j === 0) {
                isdivisible.push(j);
            }
        }

        if (isdivisible.length == 2) {
            primenos.push(arr[i]);
        }
    }
    console.log("1.d. Prime Nos from Array Using IIFE Function Method : ", primenos);
})(inputarr);



//1.e. Return all the palindromes in an array
// Using Anonymous Function method

const strArrWithPalindromes = ["wow", "noon", "name1", "rotor", "name2"];

const palindromefunct1 = function (arr) {
    console.log("1.e. Question -> Input Array is:", arr);
    let palindromeArray = [];
    for (let i=0; i<arr.length; i++) {
        const reversedStr = arr[i].split("").reverse().join("");
        if (arr[i] === reversedStr) {
            palindromeArray.push(arr[i])
        }
    }
    return palindromeArray;
}
console.log("1.e. Palindrome From Array Using Anonymous Function Method : ", palindromefunct1(strArrWithPalindromes));

//1.e. Return all the palindromes in an array
// Using IIFE Function method
(function (arr) {
    let palindromeArray = [];
    for (let i=0; i<arr.length; i++) {
        const reversedStr = arr[i].split("").reverse().join("");
        if (arr[i] === reversedStr) {
            palindromeArray.push(arr[i])
        }
    }
    console.log("1.e. Palindrome From Array Using IIFE Function Method : ", palindromeArray);
})(strArrWithPalindromes);



//1.f. Return median of two sorted arrays of same size.
// Using Anonymous Function method

const array1 = [3, 4, 5, 6, 15];
const array2 = [7, 8, 9, 11, 1];

const medianfunc = function (arr1, arr2) {
    console.log("1.f. Question -> Input Arrays are:", arr1, arr2);
    let mergedarr = arr1.concat(arr2);
    mergedarr.sort((a,b) => a-b);
    let median = 0;
    // console.log(mergedarr);
    if (arr1.length == arr2.length) {
        if (mergedarr.length%2 == 0) {
            let half1 = (mergedarr.length/2)-1;
            let half2 = half1+1;
            median = (mergedarr[half1] + mergedarr[half2])/2;
        }
    }
    return median;
}
console.log("1.f. Median of 2 sorted arrays Using Anonymous Function Method : ", medianfunc(array1, array2));

// 1.f. Return median of two sorted arrays of same size.
// Using IIFE Function method
(function (arr1, arr2) {
    let mergedarr = arr1.concat(arr2);
    mergedarr.sort((a,b) => a-b);
    let median = 0;
    if (arr1.length == arr2.length) {
        if (mergedarr.length%2 == 0) {
            let half1 = (mergedarr.length/2)-1;
            let half2 = half1+1;
            median = (mergedarr[half1] + mergedarr[half2])/2;
        }
    }
    console.log("1.f. Median of 2 sorted arrays Using IIFE Function Method : ", median);
})(array1, array2);



// 1.g. Remove duplicates from an array
// Using Anonymous Function method

let duplicatearr = [1, 2, 3, "name", 1, "name", "name1", 3, 9];

const removeDuplicateFunc = function (arr) {
    console.log("1.g. Question -> Input Array is:", arr);
    let noduplicate = [];
    let temp = {};
    for (let i=0; i<arr.length; i++) {
        const newvalue = arr[i];
        if (!temp[newvalue]) {
            temp[newvalue] = true;
            noduplicate.push(arr[i]);
        }
    }
    return noduplicate;
}
const noduplicatearr = removeDuplicateFunc(duplicatearr);
console.log("1.g. Duplicates Removed in array using AnonymousFunctionMethod", noduplicatearr);

// Using IIFE Function method
(function (arr) {
    let noduplicate = [];
    let temp = {};
    for (let i=0; i<arr.length; i++) {
        const newvalue = arr[i];
        if (!temp[newvalue]) {
            temp[newvalue] = true;
            noduplicate.push(arr[i]);
        }
    }
    console.log("1.g. Duplicates Removed in array using IIFE method", noduplicate);
})(duplicatearr)

 

//1.h. Rotate an array by k times
// Using Anonymous function method
const rotatearrfunc = function (arr) {
    console.log("1.h. Question -> Input Array is: ", arr)
    rotatedarr = Object.assign([], arr);
    let rotationno_k = 8;

    for (let i=1; i<=rotationno_k; i++) {
        const arrlastdigit = rotatedarr.pop();
        rotatedarr.unshift(arrlastdigit)
    }
    return rotatedarr
}
console.log("1.h. Rotated an array by k times using Anonymous method: ", rotatearrfunc(inputarr));

// Using IIFE function method
(function (arr) {
    rotatedarrlist = Object.assign([], arr);
    requiredrotation = 5
    for (i=requiredrotation; i>=1; i--) {
        const lastdigit = rotatedarrlist.pop();
        rotatedarrlist.unshift(lastdigit);
    }
    console.log("1.h. Rotated an arr by k times using IIFE method", rotatedarrlist)
})(inputarr)




//---------------------------------------------------------------------------

//2. Do the below programs in arrow functions

//2.a. Print odd numbers in an array
let inputarr1 = [101, 122, 133, 145, 157, 178, 129, 110, 212, 315]

const oddnosfunc = (arr) => {
    console.log("2.a. Question -> Input Arr", arr);
    let oddnoarr = [];
    for (let i=0; i<arr.length; i++) {
        if (arr[i]%2 !== 0) {
            oddnoarr.push(arr[i]);
        }
    }
    return oddnoarr;
}
console.log("2.a. Printing oddnos from an array: using ArrowFunction ", oddnosfunc(inputarr1));


// 2.b. Convert All the Strings to title caps in a string array
const inputstrarr1 = ["Name1", "Name2", "3", "true", "Name4"];

const strarrfunc = (arr) => {
    console.log("2.b. Question -> Input Arr", arr);
    let strcaparr = [];
    for (let i=0; i<arr.length; i++) {
        strcaparr.push(arr[i].toUpperCase());
    }
    return strcaparr;
}
console.log("2.b. All Strings to capital using ArrowFunction", strarrfunc(inputstrarr1));


//2.c. Sum of all numbers in an array

const sumfunc = (arr) => {
    console.log("2.c. Question -> Input Arr", arr);
    let sum = 0;
    for (let i=0; i<arr.length; i++) {
        sum += arr[i];
    }
    return "2.c. Sum of array no using ArrowFunction: " + sum;
}
console.log(sumfunc(inputarr1));


//2.d. Return all the prime numbers in an array

const primenofunc = (arr) => {
    console.log("2.d. Question -> Input Arr", arr);
    let primenoarr = [];
    for (let i=0; i<arr.length; i++) {
        let isdivisible = [];
        for (let j=1; j<=arr[i]; j++) {
            if (arr[i]%j === 0) {
                isdivisible.push(j);
            }
        }
        if (isdivisible.length == 2) {
            primenoarr.push(arr[i]);
        }
    }
    return primenoarr;
}
console.log("2.d. Prime Nos From Array Using Arrow Function Method : ", primenofunc(inputarr1));


//2.e. Return all the palindromes in an array
//
const strArrWithPalindrome = ["wow", "noon", "name1", "rotor", "name2"];

const palindromefunct = (arr) => {
    console.log("2.e. Question -> Input Array is:", strArrWithPalindrome);
    let palindromeArray = [];
    for (let i=0; i<arr.length; i++) {
        const reversedStr = arr[i].split("").reverse().join("");
        if (arr[i] === reversedStr) {
            palindromeArray.push(arr[i])
        }
    }
    return palindromeArray;
}
console.log("2.e. Palindrome From Array Using Arrow Function Method : ", palindromefunct(strArrWithPalindrome));