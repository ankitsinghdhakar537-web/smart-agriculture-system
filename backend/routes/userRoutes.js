const express = require("express");

const router = express.Router();

const {
  createUser,
  getAllUsers,
  getUser,
  updateUser,
} = require("../controllers/userController");

// Create Farmer
router.post("/", createUser);

// Get All Farmers
router.get("/", getAllUsers);

// Get Single Farmer
router.get("/:email", getUser);

// Update Farmer
router.put("/:email", updateUser);

module.exports = router;