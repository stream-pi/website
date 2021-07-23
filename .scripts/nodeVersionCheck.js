const exec = require("child_process").exec;

exec("node -v", function (err, stdout) {
  if (err) throw err;

  const ver = parseFloat(stdout.slice(1));

  if (ver < 14) {
    console.log(
      "\x1b[31m\x1b[47m",
      "This project requires node 14 or greater",
      "\x1b[0m"
    );
    throw new Error("Node Version not supported");
  }
});
