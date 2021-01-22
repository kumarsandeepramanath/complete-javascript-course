'use strict';
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  //console.log(firstName);

  function printAge() {
    const output = `You are the ${age} born in ${birthYear}`;
    console.log(output);
    if (birthYear >= 1981 && birthYear <= 1996) {
      const str = `Oh, and you are a millenial, ${firstName}`;
      console.log(str);
    }
  }
  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1991);

console.log(this);

const calcAge2 = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAge2(1989);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAge2(1989);
calcAgeArrow(1988);

const jonas = {
  name: 'Jonas',
  age: '34',
  calcAge: function () {
    console.log(this);
  },
};

jonas.calcAge();
