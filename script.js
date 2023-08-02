'use strict'
/*
function logger() {
    console.log('My name is Mike');
}

//invoking, calling, running the function.
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(6, 0);
console.log(appleJuice);
const appleOrangeJuice = fruitProcessor(4, 8);
console.log(appleOrangeJuice);
*/

/*
//Part 2 - declaration of functions
function describeCountry(country, population, capitalCity) {
    const description = `${country} has ${population} million people and its capital city is ${capitalCity} `;
    return description;
}

const myCountry = describeCountry('Finland', 6, 'Helsinki');
const Country = describeCountry('Ghana', 13, 'Accra');
const country = describeCountry('Germany', 20, 'Berlin');
console.log(myCountry);
console.log(Country);
console.log(country);


// expression of a function
const place = function (country) {
    return `${country} is a beautiful place.`;
}
const tour = place('Kenya');
console.log(tour);
*/
/*
function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}
const one = percentageOfWorld1(320000);
const two = percentageOfWorld1(130000000);
const three = percentageOfWorld1(2000000);

console.log('function', one);
console.log('function', two);
console.log('function', three);

const world = function (population) { return (population / 7900) * 100; }
const world1 = world(20000);
const world2 = world(30000000);
const world3 = world(80000000);
console.log(world1, world2, world3);



// arrow function USED FOR  one parament and one line of code.
const calAge = birthYear => 2035 - birthYear;
const age = calAge(2001);
console.log(age);
*/
/*const yearsUntilRetirement = age => 67 - age;
const yearsLeft = yearsUntilRetirement(26);
console.log(yearsLeft);

const yearsUntilRetirement = birthYear => 67 - (2025 - birthYear);
const yearsLeft = yearsUntilRetirement(2002);
console.log(yearsLeft);

const yearsUntilRetirement = birthYear => {
    const age = 2023 - birthYear;
    const retirement = 65 - age;
    return retirement;
}
console.log(yearsUntilRetirement(1996));

const worldPercentage = population => (population / 7900) * 100;
console.log(worldPercentage(3000000));
*/

/*
// functions calling functions
const cutPieces = function (fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}
console.log(fruitProcessor(2, 3));

function describePopulation(country, population) {
    const worldPercentage = percentageOfWorld1(population);
    return `${country} has ${population} million people, which is about ${worldPercentage} of the world`;
}
console.log(describePopulation('Ghana', 320000));
console.log(describePopulation('Kenya', 1030000));
console.log(describePopulation('Germany', 4000000));


//arrays

const populations = [320000, 6000000, 780000, 150000000];
console.log(populations);
console.log(populations.length === 4);
const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3]),];
console.log(percentages);


const neighCountries = ['Ghana', 'Togo', 'Nigeria', 'Burkinafaso'];
console.log(neighCountries);
const neighbours = ['Togo', 'Nigeria', 'Burkinafaso', 'Sweden'];
console.log(neighbours);
neighCountries.push('Utopia');
neighCountries.pop('Utopia');
console.log(neighCountries);
if (neighbours != 'Germany') {
    console.log('Probably not a central European country :D');
}
neighbours[3] = 'Republic of Sweden';
console.log(neighbours);
console.log(neighbours.indexOf('Nigeria'));

*/
const myCountry = {
    country: 'Finland',
    capital: 'Helsinki',
    language: ['English', 'Ga', 'Twi', 'Fante', 'Dagomba', 'Ewe', 'Akan', 'finnish-speaking'],
    population: 6,
    neighbours: ['Togo', 'Nigeria', 'Burkinafaso'],
    describe: function () {
        console.log(`${this.country} has ${this.population} million people ${this.language[7]}, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital} .`);
    },
    checkIsland: function () {
        this.isIsland = this.neighbours.length === 0 ? true : false;
        console.log(this.isIsland);

    }
};

myCountry.describe();
myCountry.checkIsland();
//console.log(`${myCountry.country} has ${myCountry['population'] += 2} million people ${myCountry.language[7]} , ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital} .`);

//console.log(myCountry.language[-2]);
/*
// dot notation & bracket notation
const my_self = {
    firstName: 'Jonas',
    friends: ['Michael', 'John', 'Prince'],
};

console.log(`${my_self.firstName}  has ${my_self.friends.length}  friends, and his best friend is, 
 ${my_self.friends[0]}`);


//object methods
/*
const my_self = {
    firstName: 'Floxy',
    lastName: 'Narteh',
    birthYear: 1996,
    hasDriversLicense: false,
    job: 'student',

    calcAge: function () {
        this.age = 2023 - this.birthYear;
        return this.age;

    },

    hasLicense: function () {
        if (this.hasDriversLicense === true)
            this.canDrive = "she has a driver's license.";
        else
            this.canDrive = "she has no driver's license."
        return this.canDrive;
    },
    /*getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and ${this.hasLicense()}`
    }
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and she has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }

}
console.log(my_self.calcAge());
console.log(my_self.hasLicense());

console.log(`${my_self.firstName} ${my_self.lastName} is ${my_self.calcAge()} and drivers license is ,` + my_self.hasDriversLicense);

console.log(my_self.getSummary());


// for loop keeps running whiles condition is true
for (let rep = 1; rep <= 10; rep++) {
    console.log(`lifting weight repetion ${rep}`);
}
*/




const my_self = [
    'Floxy',
    'Narteh',
    2032 - 1996,
    'student',
    ['Philip', 'Claudia', 'Ohemaa'],
    'boyfriend'

];
const type = []

//reading from my_self
for (let i = 0; i < my_self.length; i++) {
    console.log(my_self[i], typeof my_self[i]);
    // filling an array
    // type[i] = typeof my_self[i];
    type.push(typeof my_self[i]);
}

console.log('type: ', type);

// calculate age
const year = [1940, 1956, 1997, 2000];
const age = [];

for (let i = 0; i < year.length; i++) {
    age.push(2034 - year[i]);

}
console.log("Ages", age);


//for (let voter = 1; voter <= 50; voter++) {console.log(`Voter number ${voter} is currently voting`);}

//implementing continue keyword
console.log('----ONLY STRINGS---')
for (let i = 0; i < my_self.length; i++) {
    if (typeof my_self[i] !== 'string') continue;
    console.log(my_self[i], typeof my_self[i]);
}

//implementing break keyword
console.log('----BREAK WITH NUMBERS---')
for (let i = 0; i < my_self.length; i++) {
    if (typeof my_self[i] === 'number') break;
    console.log(my_self[i], typeof my_self[i]);

}

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}
const populations = [320000, 6000000, 780000, 150000000];

const percentages2 = [];
for (let population = 0; population < populations.length; population++) {
    console.log("ppp", population);

    percentages2.push(percentageOfWorld1(populations[population]));
}
console.log('print', percentages2);

//looping backwards and loops in loops
for (let i = my_self.length - 1; i >= 0; i--) {
    console.log('new loop', my_self[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`------ Starting Exercise -----${exercise}`)
    for (let rep = 1; rep < 6; rep++) {
        console.log(`lifting weight repetition ${rep}`)
    }
}

/*1. Store this array of arrays into a variable called 'listOfNeighbours'
[['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
'Russia']];
2. Log only the neighbouring countries to the console, one by one, not the entire
arrays. Log a string like 'Neighbour: Canada' for each country
3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't
worry if it's too difficult for you! But you can still try to figure this out anyway �*/

const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for (let list = 0; list < listOfNeighbours.length; list++)
    for (let lists = 0; lists < listOfNeighbours[list].length; lists++)
        console.log(`Neighbour : ${listOfNeighbours[list][lists]} `);

//While loop


for (let rep = 1; rep <= 10; rep++) {
    console.log(`lifting weight repetion ${rep}`);
}

let rep = 1;
while (rep <= 10) {
    console.log(`lifting weight repetion ${rep}`);
    rep++;
}