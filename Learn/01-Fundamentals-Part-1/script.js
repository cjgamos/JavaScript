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

/*
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
*/

// 5 falsy values: 0, '', undefined, null, NaN
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Carl'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 1;
if (money){
    console.log("Don't spend it all.");
} else {
    console.log('You should get a job!');
}

let height = 0;
if (height){
    console.log('YAY! Height is defined.');
} else {
    console.log('Height is UNDEFINED.');
} 
*/

/*
const age = '18';
if (age === 18) console.log('You just became an adult.');

if (age == 18) console.log('You just became an adult. (loose)');

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite == 23) { // 23 === 23 - FALSE
    console.log("Nice!");
} else if (favorite === 7) {
    console.log("7 is nice!");7
} else {
    console.log('Nothing.');
}

if (favorite !== 23) {
    console.log('Why not 23?!');
}
*/

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) { 
//     console.log('Carl is able to drive!');
// } else {
//     console.log('Someone else should drive..');
// }

const isTired = false; // C
console.log(hasDriversLicense && hasDriversLicense && isTired);

if (shouldDrive && hasGoodVision && !isTired) { 
    console.log('Carl is able to drive!');
} else {
    console.log('Someone else should drive..');
}