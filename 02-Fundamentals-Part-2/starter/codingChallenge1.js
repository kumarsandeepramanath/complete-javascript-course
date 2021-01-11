/*
const dolphine_score1 = 44
const dolphine_score2 = 23
const dolphine_score3 = 71
const koalas_score1 = 65
const koalas_score2 = 54
const koalas_score3 = 49
*/

const dolphine_score1 = 85;
const dolphine_score2 = 54;
const dolphine_score3 = 41;
const koalas_score1 = 23;
const koalas_score2 = 34;
const koalas_score3 = 27;

let dolphinAvgScore = 0;
let koalaAvgScore = 0;

const calcAvg = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};

function calcAvgScores() {
  dolphinAvgScore = calcAvg(dolphine_score1, dolphine_score2, dolphine_score3);
  koalaAvgScore = calcAvg(koalas_score1, koalas_score2, koalas_score3);

  console.log(`The Dolphin Avg score is ${dolphinAvgScore}`);
  console.log(`The Koala Avg score is ${koalaAvgScore}`);
}
calcAvgScores();

function checkWinner(dolphinAvgScore, koalaAvgScore) {
  if (dolphinAvgScore > koalaAvgScore && dolphinAvgScore > koalaAvgScore * 2) {
    console.log(`Dolphins win (${dolphinAvgScore} vs ${koalaAvgScore})`);
  } else if (
    koalaAvgScore > dolphinAvgScore &&
    koalaAvgScore > dolphinAvgScore * 2
  ) {
    console.log(`Koalas win (${koalaAvgScore} vs ${dolphinAvgScore})`);
  } else {
    console.log("Sorry..Nobody wins!!");
  }
}

checkWinner(dolphinAvgScore, koalaAvgScore);

const friends = ["a", "b", "c"];
console.log(friends);
friends[0] = "d";
console.log(friends);
friends.push("s");
console.log(friends);
console.log(friends.length);
