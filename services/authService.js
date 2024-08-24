const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const Role = require("../models/roleModel");
const bcrypt = require("bcryptjs");
const config = require("../config");

const generateToken = (id) => {
  return jwt.sign({ id }, config.jwtSecret, {
    expiresIn: "30d",
  });
};

const registerUser = async (name, email, password, role) => {
  const userExists = await User.findOne({ email });

  if (userExists) {
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
    role,
  });

  return {
    _id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    token: generateToken(user._id),
  };
};

const loginUser = async (email, password) => {
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    return {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id),
    };
  } else {
    throw new Error("Invalid email or password");
  }
};

module.exports = {
  registerUser,
  loginUser,
};
