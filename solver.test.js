const solve = require("./solver");

const scenarios = [
  ["T__ta___l", ["Tentacool"]],
  ["____ler", ["Kingler", "Dottler"]],
];

it.each(scenarios)("returns the expected name(s)", (hint, expected) => {
  const results = solve(hint);
  console.log(results);
  expect(results).toStrictEqual(expected);
});
