const asyncHandler = require("express-async-handler");
const inquiryService = require("../services/inquiryService");

// @desc    Get all inquiries
// @route   GET /api/inquiries
// @access  Private
const getInquiries = asyncHandler(async (req, res) => {
  const inquiries = await inquiryService.getAllInquiries();
  res.json(inquiries);
});

// @desc    Get a single inquiry by ID
// @route   GET /api/inquiries/:id
// @access  Private
const getInquiry = asyncHandler(async (req, res) => {
  const inquiry = await inquiryService.getInquiryById(req.params.id);

  if (inquiry) {
    res.json(inquiry);
  } else {
    res.status(404);
    throw new Error("Inquiry not found");
  }
});

// @desc    Create a new inquiry
// @route   POST /api/inquiries
// @access  Private
const createInquiry = asyncHandler(async (req, res) => {
  const inquiry = await inquiryService.createInquiry(req.body);
  res.status(201).json(inquiry);
});

// @desc    Update an inquiry
// @route   PUT /api/inquiries/:id
// @access  Private
const updateInquiry = asyncHandler(async (req, res) => {
  const inquiry = await inquiryService.updateInquiry(req.params.id, req.body);

  if (inquiry) {
    res.json(inquiry);
  } else {
    res.status(404);
    throw new Error("Inquiry not found");
  }
});

// @desc    Delete an inquiry
// @route   DELETE /api/inquiries/:id
// @access  Private
const deleteInquiry = asyncHandler(async (req, res) => {
  const inquiry = await inquiryService.deleteInquiry(req.params.id);

  if (inquiry) {
    res.status(204).end();
  } else {
    res.status(404);
    throw new Error("Inquiry not found");
  }
});

module.exports = {
  getInquiries,
  getInquiry,
  createInquiry,
  updateInquiry,
  deleteInquiry,
};
