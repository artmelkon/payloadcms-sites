const path = require("path");
require("dotenv").config();

module.exports = {
  //   publicRuntimeConfig: {
  //     SERVER_URL: process.env.CMS_URI,
  //   },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
