/*
  Basic Set 2.3: Finding all matching objects in an array
    Given an array of players (objects), return the names of all players that have a score above 100.
    DO NOT use .filter() in your solution.
    DO use a for loop.
    TRY solving it with non-mutative recursion, only after you’ve solved it using a for loop.
    Examples
      Input
        players: [ { "name": "Alice", "score": 88 }, { "name": "Bob", "score": 120 } ]
    	Output
        [ "Bob" ]
*/

let players = [
  { name: 'Alice', score: 88 },
  { name: 'Bob', score: 120 },
];

function findPlayers(players) {
  let result = [];
  for (let i = 0; i < players.length; i++) {
    if (players[i].score > 100) {
      result.push(players[i].name);
    }
  }
  return result;
}

console.log(findPlayers(players));
