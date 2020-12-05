const { yellow, red, green, bold } = require("chalk");
const { readFileSync } = require("fs");

const cWarn = (msg) => console.log(yellow(msg));
const cError = (msg) => console.log(red.bgWhite.bold(msg));
const cSuccess = (msg) => console.log(green(msg));
const cBold = (msg) => bold(msg);

const readPackageJSON = () => {
  const data = readFileSync("./package.json");
  return JSON.parse(data);
};

module.exports = {
  cWarn,
  cError,
  cSuccess,
  readPackageJSON,
  cBold,
};
