const post = require("./postController.js");
const user = require("./userController");

module.exports = {
  ...user,
  ...post
};
