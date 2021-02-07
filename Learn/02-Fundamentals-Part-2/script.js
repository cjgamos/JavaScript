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

