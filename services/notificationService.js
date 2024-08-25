const Notification = require("../models/notificationModel");

class NotificationService {
  async createNotification(data) {
    const notification = new Notification(data);
    return await notification.save();
  }

  async getAllNotifications() {
    return await Notification.find().sort({ createdAt: -1 });
  }

  async markAsRead(notificationId) {
    return await Notification.findByIdAndUpdate(
      notificationId,
      { isRead: true },
      { new: true }
    );
  }
}

module.exports = new NotificationService();
