const express = require("express");
const authRoutes = require("./authRoutes");
const inquiryRoutes = require("./inquiryRoutes");
const notificationRoutes = require("./notificationRoutes");
const userRoutes = require("./userRoutes");
const reportRoutes = require("./reportRoutes");

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/inquiries", inquiryRoutes);
router.use("/notifications", notificationRoutes);
router.use("/users", userRoutes);
router.use("/reports", reportRoutes);

module.exports = router;
