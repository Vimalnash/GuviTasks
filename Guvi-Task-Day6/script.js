console.log("Task-Day-6")

// ---------------Movie Class---------------
console.log("---------------Movie Class---------------")

class Movie {
    constructor (title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    getPG(movie) {
        console.log("Array of Movie Instances",movie);
        let newArr = [];
        for (let i=0; i<movie.length; i++) {
            if (movie[i].rating === "PG") {
                newArr.push(movie[i].title);
            }
        }
        return newArr;
    }

    getMovieDetails () {
        console.log("d - Answer - ");
        console.log(`
        Movie_Title : ${this.title}, 
        Movie_Studio : ${this.studio}, 
        Movie_Rating : ${this.rating}
        `);
    }
}


console.log("a - Question - Setting respective Movie class properties");
const moviename1 = new Movie("Inception", "CrewStudio", "PG-13");
console.log("a - Answer - Setted Movie Class Properties using constructor : ", moviename1);


console.log("b - Question - To set default rating PG when no rating is provided");
const moviename2 = new Movie("Inception", "CrewStudio");    // without rating argument
console.log("b - Answer - Default rating PG setted", moviename2);


console.log("c - Question - Create method getPG, takes array of Movie instance object, returns new array has rating PG only ");
const movieArr = moviename2.getPG ([
    {title: "Inception", studio: "CrewStudio", rating: "PG-13"},
    {title: "Predator", studio: "CrewStudio", rating: "PG"},
    {title: "Inception3", studio: "CrewStudio", rating: "PG-13"},
    {title: "Inception4", studio: "CrewStudio", rating: "PG-13"},
    {title: "Terminator", studio: "CrewStudio", rating: "PG"},
]);
console.log(`c - Answer - PG Rated Movies : ${movieArr}`);


console.log("d - Question - CreatingInstance of the given MovieDetails");
const movieCasinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG­13");
movieCasinoRoyale.getMovieDetails();




// ---------------Circle Class---------------
console.log("---------------Circle Class---------------")
class Circle {
    constructor (radius = 1, color = "red") {
        this._radius = radius
        this._color = color;
    }
    // getRadius() {
    //     console.log(this.radius);
    // }

    get radius() {
        return this._radius;
    }

    // setRadius(radius) {
    //     this.radius = radius
    // }
    set radius(radius) {
        this._radius = radius;
    }

    get color() {
        return this._color;
    }

    set color(color) {
        this._color = color
    }

    toString() {
        console.log(`Circle[radius=${this.radius}, color=${this.color}]`);
    }

    getArea() {
        const circleArea = (22/7) * this.radius * this.radius;
        console.log("Area of Circle : ", Math.floor(circleArea));
    }

    getCircumference() {
        const circleCircumference = 2 * (22/7) * this.radius;
        console.log("Circumference of Circle : ",Math.floor(circleCircumference));
    }
    
}

const circle = new Circle(2, "grey");
console.log(circle);
console.log(circle.radius=3);
console.log(circle.radius=4, "," , circle.color="brown");
console.log("Radius : ", circle.radius);
circle.radius = 5;
console.log("Color : ",circle.color);
circle.color = "green";
circle.toString();
circle.getArea();
circle.getCircumference();




// ---------------Person Class---------------
console.log("---------------Person Class---------------")
class Person {
    constructor (firstName, lastName, sex, phoneNo, email, maritalStatus, nationality, state, currLocation) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.sex = sex;
        this.phoneNo = phoneNo;
        this.email = email;
        this.maritalStatus = maritalStatus;
        this.nationality = nationality;
        this.state  = state;
        this.currLocation = currLocation;
    }
}
const Avinash = new Person("Avinash", "A", "Male", "9999977777", "98765@gmail.com", "Married", "Indian", "Tamilnadu", "Tirupur")
console.log(Avinash);




// ---------------Uber Price Calculating Class---------------
console.log("---------------Uber Price Calculating Class---------------")
class Uber {
    constructor() {
        this.LocationArray = [
            {loc : "beach", km : 0},
            {loc : "park", km : 10},
            {loc : "chetpet", km : 20},
            {loc : "mambalam", km : 50},
            {loc : "guindy", km : 90},
            {loc : "chromepet", km : 100},
            {loc : "thambaram", km : 150}
        ]
    }

    getUberPrice (fromLoc, toLoc) {
        let distance = 0;
        let uberPrice = 0;
        for (let i=0; i<this.LocationArray.length; i++) {
            if (fromLoc === this.LocationArray[i].loc) {
                for (let j=0; j<this.LocationArray.length; j++) {
                    if (toLoc === this.LocationArray[j].loc) {
                        distance = Math.abs(this.LocationArray[i].km - this.LocationArray[j].km);
                        if ( distance <= 50) {
                            uberPrice = 2000;
                        } else if (distance <= 100) {
                            let tollgate = 50;
                            uberPrice = tollgate + 4000;
                        } else if (distance <= 150) {
                            let tollgate = 50;
                            uberPrice = tollgate + 6000;
                        }
                    }
                }
            }
        };

        if (distance === 0) {
            console.log(`
            Select Available Locations Only
            `);
        } else {
            console.log(`
            From : ${fromLoc}, 
            To : ${toLoc},
            TravelDistance : ${distance} km,
            Uber Price - Rs. ${uberPrice}
            `);
        }
    }
}

const travelprice = new Uber();
console.log(travelprice);
travelprice.getUberPrice("beach", "chetpet");
travelprice.getUberPrice("beach", "chromepet");
travelprice.getUberPrice("guindy", "thambaram");
travelprice.getUberPrice("thambaram", "park");          // Reverse Direction
travelprice.getUberPrice("thambaram", "nunkambakkam");  // Reverse Direction