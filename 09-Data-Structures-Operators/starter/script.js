'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainMenuIndex) {
    return [this.mainMenu[mainMenuIndex], this.starterMenu[starterIndex]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`This is the delicious pasta with ${ing1},${ing2},${ing3}`);
  },
};

// Destructuring of Array1
let [main, secondary] = restaurant.categories;
console.log(main, secondary); //Italian , Pizzeria

//Swap Main and Secondary
[secondary, main] = [main, secondary];
console.log(main, secondary); // Pizzeria, Italian

// Recieve 2 values from a function and store in variables
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(`Starter is ${starter} and the main course is ${mainCourse}`);
// Destructuring of Array2
const [started, , mainC] = restaurant.categories;
console.log(started, mainC);

// Destructuring of Nested Array
const arr1 = [2, 3, [4, 5]];
const [x, , [y, z]] = arr1;
console.log(x, y, z);

// Destructuring of Object. The name of the properties has to be the same of what is there in the actual object
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: Hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, Hours, tags);

console.log(openingHours);

const { sat } = openingHours;
console.log(sat);

// Destructuring of Nested Object
const {
  sat: { open, close },
} = openingHours;
console.log(open, close);

// Spread Operator
const arr = [7, 8, 9];
const newArr = [7, 8, 9, ...arr];
console.log(newArr);

console.log(...newArr);

//Copying Array - Shallow copy
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// Join 2 or more arrays

const arr3 = [1, 2, 3];
const arr4 = [4, 5, 6];
const newJoinedArr = [...arr3, ...arr4];
console.log(newJoinedArr);

const ingredients = ['a', 'b', 'c'];
restaurant.orderPasta(...ingredients);

// Rest is the opposite of Spread operator
const myArray1 = [1, 2, 3, 4, 5];
const [g, h, ...others] = myArray1;

console.log(g, h, others); // o/p => [1,2,[3,4,5]]

///Function with variable number of arguments
function add(...numbers) {
  console.log(numbers);
}

add(1, 2);
add(1, 2, 3, 4);
add(1, 2, 3, 4, 5, 6, 7, 8, 9);

//Short-circuiting using ||

console.log(undefined || 0 || '' || 'Hello' || 23);
//o/p => Hello , since it is the first truthy value

//Nullish:  null and undefined
restaurant.guessNum = 0;
const guessCorrect = restaurant.guessNum ?? 10;
console.log(guessCorrect);

// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. 
    For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, 
    and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. 
  Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  printGoals: function (...players) {
    for (let i = 0; i < players.length; i++) {
      console.log(players[i]);
    }
  },
  whoWins: function (odd1, odd2) {
    odd1 > odd2 && console.log('Odd wins');
    odd1 < odd2 && console.log('Odd looses');
  },
};

const [players1, players2] = game.players;
console.log(players1);
console.log(players2);
const [gk, ...otherPlayers] = players1;
console.log(gk);
console.log(otherPlayers);
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
const subPlayers1 = ['Thiago', 'Coutinho', 'Perisic'];
const players1Final = [...players1, ...subPlayers1];
console.log(players1Final);

const {
  odds: { team1 }, //: { team1, x: odd, team2 },
} = game;
// console.log(team1, odd, team2);
console.log(team1);

game.printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
game.printGoals(...game.scored);

game.whoWins(game.odds.team1, game.odds.team2);
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);

for (const item of menu.entries()) console.log(item);

console.log(restaurant.openingHours.mon?.openingHours);

for (const days of Object.keys(restaurant.openingHours)) console.log(days);

for (const values of Object.values(restaurant.openingHours))
  console.log(values);

console.log('Gives Keys + Values');
for (const x of Object.entries(restaurant.openingHours)) console.log(x); // THIS WILL GIVE KEY + VALUES

// console.log(Object.entries(restaurant.openingHours))
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number 
   (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages,
   you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). 
HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, 
and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

const game2 = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//Task 1
//1. Loop over the game.scored array and print each player name to the console, along with the goal number
// (Example: "Goal 1: Lewandowski")

for (const [index, item] of game2.scored.entries())
  console.log(`Goal ${index + 1}: ${item}`);

//Task 2
//2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages,
//you can go check if you don't remember)

let avgOdd = 0;
for (const oddVal of Object.values(game2.odds)) avgOdd += oddVal;
console.log(avgOdd / Object.values(game2.odds).length);

// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw").
// HINT: Note how the odds and the game objects have the same property names 😉

for (const item of Object.entries(game2.odds)) {
  // console.log(`Odd of victory ${game2[item[0]]} is ${item[1]}`);
  // console.log(item, item[0], item[1]);
  let teamName = game2[item[0]] || 'draw';
  let teamPoints = item[1];
  console.log(`Odd of victory ${teamName} : ${teamPoints}`);
}

//Using the destructuring instead of the [0],[1] logic

for (const [item, odd] of Object.entries(game2.odds)) {
  let teamName = game[item] || 'draw';
  let teamPoints = odd;
  console.log(`Odd of victory ${teamName} : ${teamPoints}`);
}
// BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties,
// and the number of goals as the value. In this game, it will look like this:
// {
//   Gnarby: 1,
//   Hummels: 1,
//   Lewandowski: 2
// }

// let scorers = {};
// for (const [index, player] of game2.scored.entries()) {
//   if (player in scorers) scorers[player] = console.log(player);
//   scorers[player] = 1;
// }
// console.log(scorers);
const staff = ['waiter', 'chef', 'waiter', 'master'];
const uniqueSet = new Set(staff);
console.log(uniqueSet);
const uniqueSetAsArray = [...new Set(staff)];
console.log(uniqueSetAsArray);
