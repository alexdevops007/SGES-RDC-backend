const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const requireAdmin = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user._id);

  if (user && user.role === "admin") {
    next();
  } else {
    res.status(403);
    throw new Error("Not authorized as an admin");
  }
});

module.exports = {
  requireAdmin,
};
