const express = require("express");

const router = express.Router();

const {
  createUser,
  getUser,
  updateUser,
} = require("../controllers/userController");

router.post("/", createUser);

router.get("/:email", getUser);

router.put("/:email", updateUser);

module.exports = router;