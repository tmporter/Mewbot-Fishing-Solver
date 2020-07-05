const solve = require("./solver");
const prompt = require("prompt-sync")({ sigint: true });

while (true) {
  const hint = prompt("hint: ");
  const results = solve(hint);
  console.log(results);
}