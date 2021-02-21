const exec = require("child_process").exec;

exec("node -v", function (err, stdout) {
  if (err) throw err;

  const ver = parseFloat(stdout.slice(1));

  if (ver < 12) {
    console.log("\x1b[31m\x1b[47m", "There was an Error:", "\x1b[0m");
    throw new Error("This project requires node 12 or greater");
  } else if (ver === 13) {
    console.log("\x1b[31m\x1b[47m", "There was an Error:", "\x1b[0m");
    throw new Error(
      "As of NextJS 10.0.6, Node 13 no longer works, please upgrade to LTS"
    );
  }

  if (ver < 14) {
    console.log(
      "\x1b[33m",
      "It is recommended that you use the most recent LTS build of node: https://nodejs/org/en/download/",
      "\x1b[0m"
    );
    console.log("\x1b[33m", `You are using ${stdout}`, "\x1b[0m");
  }
});
