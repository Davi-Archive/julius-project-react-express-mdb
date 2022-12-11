const express = require("express");

const router = express.Router();
const controller = require("../controller");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(controller.getPost).post(protect, controller.postPost);

// Protected routes for Production
// router.route("/").get(controller.getPost).post(protect, controller.postPost);
// router
//   .route("/:id")
//   .put(protect, controller.putPost)
//   .delete(protect, controller.deletePost)
//   .get(controller.getOnePost);

router
  .route("/:id")
  .put(protect, controller.putPost)
  .delete(protect, controller.deletePost)
  .get(controller.getOnePost);

module.exports = router;
