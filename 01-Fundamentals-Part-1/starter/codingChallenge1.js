// Test Data 1
/*const markMassInKg = 78
const johnMassInKg = 92
const markHeightInMtrs = 1.69
const johnHeightInMtrs = 1.95 */

// Test Data 2

const markMassInKg = 95
const johnMassInKg = 85
const markHeightInMtrs = 1.88
const johnHeightInMtrs = 1.76

const markBMI = markMassInKg / (markHeightInMtrs * markHeightInMtrs);
const johnBMI = johnMassInKg / (johnHeightInMtrs * johnHeightInMtrs);

console.log("Mark BMI: " + markBMI)
console.log("John BMI: " + johnBMI)

let markHigherBMI = false

if (markBMI > johnBMI) {
    markHigherBMI = true
}

console.log("Is Mark higher BMI ? " + markHigherBMI)
