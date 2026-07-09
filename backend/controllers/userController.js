const User = require("../models/User");

// ===============================
// Create User
// ===============================
const createUser = async (req, res) => {
  try {
    console.log("========== REQUEST ==========");
    console.log(req.body);

    const { name, email, phone, village, state, farmSize, crop } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    const user = await User.create({
      name,
      email,
      phone,
      village,
      state,
      farmSize,
      crop,
    });

    console.log("========== SAVED ==========");
    console.log(user);

    return res.status(201).json({
      success: true,
      message: "Farmer Profile Created Successfully",
      user,
    });

  } catch (error) {
    console.log("========== ERROR ==========");
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ===============================
// Get User
// ===============================
const getUser = async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.params.email,
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User Not Found",
      });
    }

    return res.status(200).json({
      success: true,
      user,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ===============================
// Update User
// ===============================
const updateUser = async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      {
        email: req.params.email,
      },
      req.body,
      {
        new: true,
      }
    );

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User Not Found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Profile Updated Successfully",
      user,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createUser,
  getUser,
  updateUser,
};