"use strict";
//Test Data 1
const testData = [17, 21, 23];
//Test Data 1 testData = [12,5,-5,0,4]

function printForecast(testData) {
  let printStr = "";
  for (let i = 0; i <= testData.length - 1; i++) {
    printStr += `${testData[i]} deg celcius in ${i + 1} days ... `;
  }
  return printStr;
}

console.log(printForecast(testData));
