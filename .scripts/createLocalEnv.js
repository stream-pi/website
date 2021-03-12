const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const environment = process.argv.slice(2)[0];

const prod_env = {
  host: "",
  port: "n",
};

switch (environment) {
  case "production":
    rl.question(
      "What is the HOST / URL? (include http(s)://)\n",
      function (host) {
        rl.question("What is the port? (type 'n' for none)\n", function (port) {
          prod_env.host = host;
          prod_env.port = port === "n" ? "" : `:${port}`;
          rl.close();
        });
      }
    );

    // rl.on("SIGINT", function () {
    //   console.log("INTERRUPT");
    //   process.exit(0);
    // });

    rl.on("close", function () {
      // if (!fs.existsSync(".env.production.local")) {
      fs.writeFileSync(
        ".env.production.local",
        'NEXT_PUBLIC_BASE_URL="http://localhost:8080"'
      );
      // } else {
      //   console.log("File already exists");
      // }
      process.exit(0);
    });
    break;

  case "help":
    console.log("Printing Help");
    process.exit(0);

  default:
    console.log("Case Not Built");
    process.exit(0);
}
