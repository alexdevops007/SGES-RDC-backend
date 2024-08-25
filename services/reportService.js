const Report = require("../models/reportModel");

const generateReport = async (type, data, userId) => {
  console.log("Génération du rapport:", { type, data, userId });
  const report = new Report({ type, data, generatedBy: userId });
  return await report.save();
};

const getAllReports = async () => {
  return await Report.find().populate("generatedBy", "name");
};

const getReportById = async (id) => {
  return await Report.findById(id).populate("generatedBy", "name");
};

module.exports = {
  generateReport,
  getAllReports,
  getReportById,
};
