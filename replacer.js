const replace = require("replace-in-file");

const basePath = "/politics-on-social";

const options = {
  //you may need to modify the file address to suite your project
  files: "./out/**",
  from: [/\/design_assets/g, /\\\/politics-on-social\/design_assets/g],
  to: [`${basePath}/design_assets`, `\\\/politics-on-social\\\/design_assets`],
};
(async function () {
  try {
    const results = await replace(options);
    console.log("Replacement results:", results);
  } catch (error) {
    console.error("Error occurred:", error);
  }
})();
