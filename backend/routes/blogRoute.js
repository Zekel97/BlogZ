const express = require("express");

const postController = require("./../controllers/postController");
const loginController = require("./../controllers/loginController");

const router = express.Router();

router
  .route("/")
  .get(postController.getAllPosts)
  .post(postController.createPost)

router
  .route("/:id")
  .get(postController.getPost)

router
  .route("/login")
  .post(loginController.login)

module.exports = router;