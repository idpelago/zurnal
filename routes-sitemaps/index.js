let posts = require("./sitemap"),
  utilRoutes = require("./utils");

module.exports = [...posts, ...utilRoutes];
