import mongoose from "mongoose";

const analysisSchema = new mongoose.Schema(
  {
    atsScore: {
      type: Number,
      default: 0,
    },

    summary: {
      type: String,
      default: "",
    },

    strengths: {
      type: [String],
      default: [],
    },

    weaknesses: {
      type: [String],
      default: [],
    },

    skillsDetected: {
      type: [String],
      default: [],
    },

    missingSkills: {
      type: [String],
      default: [],
    },

    projectsFeedback: {
      type: [String],
      default: [],
    },

    educationFeedback: {
      type: String,
      default: "",
    },

    experienceFeedback: {
      type: String,
      default: "",
    },

    overallSuggestions: {
      type: [String],
      default: [],
    },
  },
  {
    _id: false,
  },
);

const resumeSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },

    originalName: {
      type: String,
      required: true,
    },

    fileUrl: {
      type: String,
      required: true,
    },

    publicId: {
      type: String,
      required: true,
    },

    fileSize: {
      type: Number,
      required: true,
    },

    fileType: {
      type: String,
      required: true,
    },

    extractedText: {
      type: String,
      default: "",
    },

    uploadedAt: {
      type: Date,
      default: Date.now,
    },

    analysis: {
      type: analysisSchema,
      default: null,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Resume", resumeSchema);
