const { readPackageJSON } = require("./nodeHelper");
const { writeFileSync } = require("fs");

console.log(
  `\x1b[33m$%s\x1b[0m`,
  "Please be sure your package.json file does not currently have unsaved changes\n"
);

const scripts = {
  preinstall: "node ./.scripts/nodeVersionCheck.js",
  predev: "node ./.scripts/startUpMessage.js ",
  prebuild: "node ./.scripts/preBuild.js",
};

try {
  const parsed = readPackageJSON();

  parsed.scripts = { ...parsed.scripts, ...scripts };

  writeFileSync("./package.json", JSON.stringify(parsed, null, 2) + "\n");

  console.log(`\x1b[33m%s\x1b[0m`, "Scripts added");
} catch (error) {
  console.log("\x1b[31m\x1b[47m%s\x1b[0m", "There was an Error:");
  console.log(error);
}
