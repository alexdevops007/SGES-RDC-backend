const mongoose = require("mongoose");

const inquirySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    urgency: {
      type: String,
      enum: ["Basse", "Moyenne", "Élevée"],
      default: "Moyenne",
    },
    status: {
      type: String,
      enum: ["En cours", "Complété", "Urgent"],
      default: "En cours",
    },
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    attachments: [
      {
        filename: String,
        filepath: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Inquiry = mongoose.model("Inquiry", inquirySchema);
module.exports = Inquiry;
