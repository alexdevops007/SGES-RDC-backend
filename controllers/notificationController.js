const NotificationService = require("../services/notificationService");

class NotificationController {
  async getNotifications(req, res) {
    try {
      const notifications = await NotificationService.getAllNotifications();
      res.json(notifications);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async markAsRead(req, res) {
    try {
      const notification = await NotificationService.markAsRead(req.params.id);
      res.json(notification);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new NotificationController();
