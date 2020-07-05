const fs = require("fs");

const solve = (hint) => {
  try {
    const data = fs.readFileSync("./pokemon.txt", "utf8");
    const names = data.split(/\n/);
    const pattern = new RegExp(`^${hint.replace(/_/g, ".")}$`);

    return names.filter((name) => name.match(pattern));
  } catch (err) {
    console.error(err);
  }
};

module.exports = solve;
