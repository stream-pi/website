const { writeFileSync } = require("fs");
const { readPackageJSON } = require("./nodeHelper");

console.log(
  `\x1b[33m$%s\x1b[0m`,
  "Please be sure your package.json file does not currently have unsaved changes\n"
);

// get user input to continue

try {
  const parsed = readPackageJSON(); // whole file
  const scripts = parsed.scripts; // scripts

  for (const prop in scripts) {
    if (scripts[prop].includes("node ./.scripts")) {
      delete parsed.scripts[prop];
      console.log("Script", `\x1b[33m${prop}\x1b[0m`, "Removed");
    }
  }

  writeFileSync("./package.json", JSON.stringify(parsed, null, 2) + "\n");
} catch (error) {
  console.log("\x1b[31m\x1b[47m%s\x1b[0m", "There was an Error:");
  console.log(error);
}
