const reportService = require("../services/reportService");
const inquiryService = require("../services/inquiryService");

const generateReport = async (req, res) => {
  try {
    const { type, userId } = req.body; // Récupère l'userId depuis la requête
    const inquiries = await inquiryService.getAllInquiries();
    const data = {
      total: inquiries.length,
      byStatus: inquiries.reduce((acc, inquiry) => {
        acc[inquiry.status] = (acc[inquiry.status] || 0) + 1;
        return acc;
      }, {}),
      byUrgency: inquiries.reduce((acc, inquiry) => {
        acc[inquiry.urgency] = (acc[inquiry.urgency] || 0) + 1;
        return acc;
      }, {}),
    };
    const report = await reportService.generateReport(type, data, userId);
    res.status(201).json(report);
  } catch (error) {
    console.error("Erreur lors de la génération du rapport:", error);
    res.status(500).json({ error: error.message });
  }
};

const getReports = async (req, res) => {
  try {
    const reports = await reportService.getAllReports();
    res.status(200).json(reports);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getReportById = async (req, res) => {
  try {
    const report = await reportService.getReportById(req.params.id);
    res.status(200).json(report);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  generateReport,
  getReports,
  getReportById,
};
