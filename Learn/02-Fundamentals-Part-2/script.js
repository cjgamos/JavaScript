'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive');

// const interface = 'Audio';
/*
function logger() {
    console.log('My name is Carl');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

console.log(fruitProcessor(3, 4));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

/*
// Function declaration and Expression
function calcAge1(birthYear) {
    return 2021 - birthYear;
}

const calcAge2 = function (birthYear){
    return 2021 - birthYear;
}

console.log(calcAge2(2001), calcAge1(2000));
*/

/*
// Arrow function

const calcAge3 = birthYear => 2021 - birthYear;
console.log(calcAge3(2000))

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2021 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(2000, 'Carl'));
*/

/*
const cutFruitPieces = (fruit) => {
    return fruit * 3;
}

const fruitProccess = (apples, oranges) => { 
    const applesPieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    console.log(apples, oranges);
    const juice = `Juice with ${applesPieces} apples pieces and ${orangePieces} oranges pieces.`;
    return juice;
}

console.log(fruitProccess(3, 4));
*/

/*
const calcAge = (birthYear) => {
    return 2021 - birthYear;
}

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired!`);
        return -1;
    }

    // return ;
}

console.log(yearsUntilRetirement(1950, 'Carl'));
*/

// const friends = ['Harvey', 'Van', 'Nil', 'Jer'];
// console.log(friends);

// const years = new Array(2000, 1999, 2001, 2000);
// console.log(years)

// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[1] = 'Carl';
// console.log(friends);
/*
// Exercise
const calcAge = (birthYear) => 2037 - birthYear;

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
*/

/*
const friends = ['Harvey', 'Van', 'Nil', 'Jer'];

// Add element
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength)

friends.unshift('Carl');
console.log(friends);

// Remove Elements
friends.pop();
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf('Nil'));
console.log(friends.indexOf('Jack'));

console.log(friends.includes('Nil'));
console.log(friends.includes('Jack'));
*/

/*
// Arrays
const carlArray = [
    'Carl',
    'Gamos',
    2021-2000,
    'student',
    ['Harvey', 'Van', 'Nil', 'Jer']
];
*/

// Objects
const carl = {
    firstName: 'Carl',
    lastName: 'Gamos',
    age: 2021 - 2000,
    job: 'student',
    friends: ['Harvey', 'Van', 'Nil', 'Jer']
};

console.log(carl);

console.log(carl.lastName);
console.log(carl['lastName']);

const nameKey = 'Name';
console.log(carl['first' + nameKey]);
console.log(carl['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Carl? Choose between firstName, lastName, age, job, and friends.');

// if (carl[interestedIn]) {
//     console.log(carl[interestedIn]);
// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job, and friends.');
// }

// carl.location = 'Philippines';
// carl['twitter'] = '@ItisMeGamos';
// console.log(carl);

// 'Carl has 3 friends, and his best friend is called Harvey'
console.log(`${carl.firstName} has ${carl.friends.length}, and his best friend is called ${carl.friends[1]}`);

