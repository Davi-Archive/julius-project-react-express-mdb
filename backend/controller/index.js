const post = require("./postController");
const user = require("./userController");

module.exports = {
  ...user,
  ...post,
};
