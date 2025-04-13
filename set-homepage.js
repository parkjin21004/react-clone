const fs = require("fs");
const pkg = require("./package.json");

const env = process.env.REACT_APP_ENV;
const homepage =
  env === "prod" ? "https://parkjin21004.github.io/react-clone-movie" : "";

pkg.homepage = homepage;
fs.writeFileSync("package.json", JSON.stringify(pkg, null, 2));
