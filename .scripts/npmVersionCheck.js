const exec = require("child_process").exec;

exec("npm -v", function (err, stdout) {
  if (err) throw err;

  const ver = parseFloat(stdout.slice(0));

  if (ver < 6) {
    console.log("\x1b[31m\x1b[47m%s\x1b[0m", "There was an Error:");
    throw new Error("This project requires npm 6 or greater");
  }

  if (ver > 6) {
    console.log(
      "\x1b[33m%s\x1b[0m",
      "This project has not been tested on NPM versions newer than 6, please report any problems to:\nhttps://github.com/stream-pi/website/issues"
    );
    console.log("\x1b[33m%s\x1b[0m", `You are using ${stdout}`);
  }
});
