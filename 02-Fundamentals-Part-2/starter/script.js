'use strict';

let hasDriversLicense = false
const passTest = true

if (passTest) hasDriversLicense = true
if (hasDriversLicense) console.log("You can drive !!")

function calcAge(birthYear) {
    return 2020 - birthYear
}

const myAge = calcAge(1989)
console.log(`I am ${myAge} years old`)

const age = function (birthYear) {
    return 2021 - birthYear
}

console.log(`The age of the person is ${age(1989)} years`)

const birthYear = 1989
const age4 = birthYear => 2021 - birthYear
console.log(`Through an Arrow function, the age is ${age4(birthYear)}`)

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2021 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(`The number of years until retirement is ${yearsUntilRetirement(1989, 'Kumar Sandeep')}`) 