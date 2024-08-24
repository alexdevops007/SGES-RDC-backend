const express = require("express");
const authRoutes = require("./authRoutes");
const inquiryRoutes = require("./inquiryRoutes");
const userRoutes = require("./userRoutes");

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/inquiries", inquiryRoutes);
router.use("/users", userRoutes);

module.exports = router;
