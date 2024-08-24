const Inquiry = require("../models/inquiryModel");

const getAllInquiries = async () => {
  return await Inquiry.find().populate("assignedTo");
};

const getInquiryById = async (id) => {
  return await Inquiry.findById(id).populate("assignedTo");
};

const createInquiry = async (inquiryData) => {
  return await Inquiry.create(inquiryData);
};

const updateInquiry = async (id, inquiryData) => {
  return await Inquiry.findByIdAndUpdate(id, inquiryData, { new: true });
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
