/*
const dolphine_score1 = 96
const dolphine_score2 = 108
const dolphine_score3 = 89
const koalas_score1 = 88
const koalas_score2 = 91
const koalas_score3 = 110


const dolphine_score1 = 97
const dolphine_score2 = 112
const dolphine_score3 = 101
const koalas_score1 = 109
const koalas_score2 = 95
const koalas_score3 = 123
*/

const dolphine_score1 = 97
const dolphine_score2 = 112
const dolphine_score3 = 101
const koalas_score1 = 109
const koalas_score2 = 95
const koalas_score3 = 106


const avgDolphinScore = (dolphine_score1 + dolphine_score2 + dolphine_score3) / 3
console.log(`The Dolphin avg score is ${avgDolphinScore}`)
const avgKoalasScore = (koalas_score1 + koalas_score2 + koalas_score3) / 3
console.log(`The average Koala score is ${avgKoalasScore}`)

if (avgDolphinScore > avgKoalasScore) console.log("Dolphines win !")
else if (avgDolphinScore < avgKoalasScore) console.log("Koalas win !")
else console.log("They have a draw")

const minScore = 100
if ((avgDolphinScore > avgKoalasScore) && (avgDolphinScore >= 100)) console.log("Dolphines win with an avg higher than 100!")
else if ((avgDolphinScore < avgKoalasScore) && (avgKoalasScore >= 100)) console.log("Koalas win with an avg higher than 100!")
else console.log("They have a draw with a avg value greater than 100")

if ((avgDolphinScore > avgKoalasScore) && (avgDolphinScore >= 100)) console.log("Dolphines win with an avg higher than 100 and with a min value of 100!")
else if ((avgDolphinScore < avgKoalasScore) && (avgKoalasScore >= 100)) console.log("Koalas win with an avg higher than 100 and with a min value of 100!")
else if ((avgDolphinScore === avgKoalasScore) && (avgDolphinScore >= 100 && avgKoalasScore >= 100)) console.log("They have a draw with a min value of 100")
else console.log("Its not a draw as the scores are less than 100")
