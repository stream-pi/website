const exec = require("child_process").exec;

exec("npm -v", function (err, stdout) {
  if (err) throw err;

  const ver = parseInt(stdout.slice(0));

  if (ver < 6) {
    console.log("\x1b[31m\x1b[47m", "There was an Error:", "\x1b[0m");
    throw new Error("This project requires npm 6 or greater");
  }

  if (ver > 6) {
    console.log(
      "\x1b[33m",
      "We are slowly trying to upgrade to 7, please use LTS / 6 for now",
      "\x1b[0m"
    );
  }
});
