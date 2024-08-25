const express = require("express");
const router = express.Router();
const NotificationController = require("../controllers/notificationController");

router.get("/", NotificationController.getNotifications);
router.put("/:id/read", NotificationController.markAsRead);

module.exports = router;
