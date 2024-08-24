/*
const express = require("express");
const {
  getInquiries,
  getInquiry,
  createInquiry,
  updateInquiry,
  deleteInquiry,
} = require("../controllers/inquiryController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.route("/").get(protect, getInquiries).post(protect, createInquiry);

router
  .route("/:id")
  .get(protect, getInquiry)
  .put(protect, updateInquiry)
  .delete(protect, deleteInquiry);

module.exports = router;
*/

const express = require("express");
const {
  getInquiries,
  getInquiry,
  createInquiry,
  updateInquiry,
  deleteInquiry,
} = require("../controllers/inquiryController");
const router = express.Router();

router.route("/").get(getInquiries).post(createInquiry);

router
  .route("/:id")
  .get(getInquiry)
  .put(updateInquiry)
  .delete(deleteInquiry);

module.exports = router;