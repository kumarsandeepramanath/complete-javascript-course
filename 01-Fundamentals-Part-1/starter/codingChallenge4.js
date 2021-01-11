const bill = 275;
// const bill = 40
// const bill = 430

const tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
console.log(
  `The bill is ${bill} and the actual tip is ${tip} and hence the total bill is ${
    bill + tip
  }`
);
