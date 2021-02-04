/*
// Values and Variables
let country = 'Philippines';
let continent = 'Asia';
let population = 20;
console.log(country);
console.log(continent);
console.log(population);

// Data Types
// let isIsland = true;
let language;
// console.log(typeof(isIsland));
console.log(typeof(population));
console.log(typeof(country));
console.log(typeof(language));

// Let, Const and Var 
language = 'Filipino';
const language2 = 'Tagalog';
const isIsland = false;
// isIsland = true;
console.log(language);
console.log(language2);

const now = 2021;
const ageCarl = now - 2000;
const ageElla = now - 2005;
console.log(ageCarl, ageElla)
*/

/*
const firstName = 'Carl';
const job = 'programmer';
const birthYear = 2000;
const year = 2021;

const carl = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(carl);

// Javascript Template Literals
const carlNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(carlNew);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
with multiple
lines`);
*/

/*
const age = 15;

if (age >= 18){
    console.log('Carl can start driving license.');
} else {
    const yearsLeft = 18 - age;
    console.log(`Carl is to young. Wait another ${yearsLeft} years.`)
}

const birthYear = 2021;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/

// Type Conversion
const inputYear = '2000';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Carl'));
console.log(typeof NaN);

console.log(String(23), 23);

// Type Coercion
console.log('I am ' + 23 + ' years old');
console.log('I am ' + '23' + ' years old');
console.log('23' - '10' - 3);
console.log('23' + '10' + 3);
console.log('23' * '2');
console.log('23' / '2');
console.log('23' > '2');

 let n = '1' + 1; // '11'
 n = n - 1;
 console.log(n);

 
