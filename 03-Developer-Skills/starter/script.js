// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const tempeature = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

function getLowestTemperature(tempArray) {
  let lowestTemp = tempArray[0];
  for (let i = 0; i < tempArray.length - 1; i++) {
    console.log(tempArray[i], lowestTemp);
    if (tempArray[i] < lowestTemp) {
      lowestTemp = tempArray[i];
      console.log(tempArray[i], lowestTemp);
    }
  }
  return lowestTemp;
}

console.log(`Lowest Temperature is ${getLowestTemperature(tempeature)}`);
function getHighestTemperature(tempArray) {
  let highestTemp = tempArray[0];
  for (let i = 0; i < tempArray.length - 1; i++) {
    if (tempArray[i] > highestTemp) {
      highestTemp = tempArray[i];
      console.log(tempArray[i], highestTemp);
    }
  }
  return highestTemp;
}

console.log(`Highest Temperature is ${getHighestTemperature(tempeature)}`);

const getTempAmplitude = () =>
  getHighestTemperature(tempeature) - getLowestTemperature(tempeature);
console.log(`Temperature Amplitude is ${getTempAmplitude()}`);
