const express = require("express");

const postController = require("../controllers/postController");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

router
  .route("/")
  .get(protect, postController.getAllPosts)
  .post(protect, postController.createPost);

router
  .route("/:id")
  .get(protect, postController.getSinglePost)
  .patch(protect, postController.updatePost)
  .delete(protect, postController.deleteSinglePost);

module.exports = router;
