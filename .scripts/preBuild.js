const { readPackageJSON, cSuccess } = require("./nodeHelper");

const getBuildVersion = () => {
  try {
    const parsed = readPackageJSON();
    cSuccess(`Version: ${parsed.version}`);
  } catch (error) {
    cWarn("Unable to parse version");
  }
};

cSuccess("Preparing to build stream-pi.com...");
getBuildVersion();
