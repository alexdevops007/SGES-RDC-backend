const User = require("../models/userModel");

const getAllUsers = async () => {
  return await User.find({});
};

const getUserById = async (id) => {
  return await User.findById(id);
};

const createUser = async (userData) => {
  const { name, email, password, role } = userData;
  const userExists = await User.findOne({ email });

  if (userExists) {
    throw new Error("User already exists");
  }

  const user = await User.create({ name, email, password, role });
  return user;
};

const updateUser = async (id, userData) => {
  const user = await User.findById(id);

  if (!user) {
    throw new Error("User not found");
  }

  Object.assign(user, userData);
  return await user.save();
};

const deleteUser = async (id) => {
  try {
    console.log(`Attempting to delete user with id: ${id}`);
    const user = await User.findByIdAndDelete(id);

    if (!user) {
      console.log("User not found");
      throw new Error("User not found");
    }

    console.log("User deleted successfully");
    return { message: "User deleted successfully" };
  } catch (error) {
    console.error("Error deleting user:", error);
    throw new Error("Could not delete user");
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
