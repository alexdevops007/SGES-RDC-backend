const express = require("express");
const authRoutes = require("./authRoutes");
const inquiryRoutes = require("./inquiryRoutes");
const notificationRoutes = require("./notificationRoutes");
const userRoutes = require("./userRoutes");

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/inquiries", inquiryRoutes);
router.use("/notifications", notificationRoutes);
router.use("/users", userRoutes);

module.exports = router;
