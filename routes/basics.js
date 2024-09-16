const express = require("express");

const basicsController = require("./../controllers/basics");

const router = express.Router();

// Routes
router
  .route("/")
  .get(basicsController.getAllUsers)
  .post(basicsController.createUser);
router
  .route("/:id")
  .get(basicsController.getUser)
  .put(basicsController.updateUser)
  .delete(basicsController.deleteUser);

module.exports = router;
