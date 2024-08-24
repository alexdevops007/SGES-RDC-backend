// backend/controllers/authController.js
const asyncHandler = require("express-async-handler");
const { registerUser, loginUser } = require("../services/authService");

// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
const register = asyncHandler(async (req, res) => {
  const { name, email, password, role } = req.body;

  const user = await registerUser(name, email, password, role);

  res.status(201).json(user);
});

// @desc    Authenticate a user
// @route   POST /api/auth/login
// @access  Public
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await loginUser(email, password);

  res.json(user);
});

module.exports = {
  register,
  login,
};
