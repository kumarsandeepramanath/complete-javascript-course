const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function calculateTip(bill) {
  const tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
  return tip;
}

for (let i = 0; i < bills.length - 1; i++) {
  const currentTip = calculateTip(bills[i]);
  tips.push(currentTip);
  //console.log(tips)
}

for (let i = 0; i < tips.length - 1; i++) {
  console.log(`Tip ${i + 1} = ${tips[i]}`);
}

function calcAvg(tipsArr) {
  let tipSum = 0;
  for (let i = 0; i < tipsArr.length - 1; i++) {
    tipSum += tipsArr[i];
  }
  return tipSum / tipsArr.length;
}

const tipsAvg = calcAvg(tips);
console.log(`The Avg tip amount is ${tipsAvg}`);

const x = 23;

const y = "43";
x;
console.log("In the Live server");
