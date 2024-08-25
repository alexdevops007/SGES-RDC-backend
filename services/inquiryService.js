const Inquiry = require("../models/inquiryModel");
const NotificationService = require("./notificationService");

const getAllInquiries = async () => {
  return await Inquiry.find().populate("assignedTo");
};

const getInquiryById = async (id) => {
  return await Inquiry.findById(id).populate("assignedTo");
};

const createInquiry = async (inquiryData) => {
  const inquiry = await Inquiry.create(inquiryData);

  // Envoi d'une notification lors de la création de l'enquête
  await NotificationService.createNotification({
    message: `Nouvelle enquête créée: ${inquiry.title}`,
    type: "Création d’enquête",
  });

  return inquiry;
};

const updateInquiry = async (id, inquiryData) => {
  const inquiry = await Inquiry.findByIdAndUpdate(id, inquiryData, {
    new: true,
  });

  // Envoi d'une notification lors de la mise à jour de l'état de l'enquête
  await NotificationService.createNotification({
    message: `L'état de l'enquête ${inquiry.title} a été mis à jour`,
    type: "Mise à jour d’état",
  });

  return inquiry;
};

const deleteInquiry = async (id) => {
  return await Inquiry.findByIdAndDelete(id);
};

module.exports = {
  getAllInquiries,
  getInquiryById,
  createInquiry,
  updateInquiry,
  deleteInquiry,
};
