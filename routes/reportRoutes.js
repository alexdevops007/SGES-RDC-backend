const express = require("express");
const router = express.Router();
const reportController = require("../controllers/reportController");
//const authMiddleware = require("../middleware/authMiddleware");

/*
router.post("/", authMiddleware, reportController.generateReport);
router.get("/", authMiddleware, reportController.getReports);
router.get("/:id", authMiddleware, reportController.getReportById);
*/
router.post("/", reportController.generateReport);
router.get("/", reportController.getReports);
router.get("/:id", reportController.getReportById);

module.exports = router;
