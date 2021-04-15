const axios = require("axios").default;
const path = require("path");
const fs = require("fs");

console.log("\x1b[33m", "MUST BE RUN IN DEVELOPMENT", "\x1b[0m");

const recent_release = path.join(process.cwd(), "src/components/Page/Install/Helper");
const ser_cli = process.argv.slice(2)[0];

if (ser_cli.toUpperCase() === "SERVER") {
  axios
    .get("http://localhost:3000/api/get_latest?TYPE=SERVER")
    .then((res) => {
      fs.writeFileSync(
        `${recent_release}/server.ts`,
        `export default ${JSON.stringify(res.data)}`,
        "utf-8"
      );
    })
    .catch((err) => console.error(err));
} else if (ser_cli.toUpperCase() === "CLIENT") {
  axios
    .get("http://localhost:3000/api/get_latest?TYPE=CLIENT")
    .then((res) => {
      fs.writeFileSync(
        `${recent_release}/client.ts`,
        `export default ${JSON.stringify(res.data)}`,
        "utf-8"
      );
    })
    .catch((err) => console.error(err));
} else {
  console.log("INVALID ARGUMENT");
  process.exit(0);
}
