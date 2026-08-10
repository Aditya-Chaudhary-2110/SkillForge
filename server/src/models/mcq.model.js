import mongoose from "mongoose";

const optionSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      trim: true,
    },

    text: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    _id: false,
  },
);

const mcqQuestionSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
      trim: true,
    },

    options: {
      type: [optionSchema],
      required: true,
      validate: {
        validator: (value) => value.length === 4,
        message: "Each MCQ must contain exactly 4 options.",
      },
    },

    correctAnswer: {
      type: String,
      required: true,
      trim: true,
    },

    explanation: {
      type: String,
      required: true,
      trim: true,
    },

    difficulty: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
      default: "Easy",
    },
  },
  {
    _id: false,
  },
);

const mcqSchema = new mongoose.Schema(
  {
    skill: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Skill",
      required: true,
      index: true,
    },

    module: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Module",
      required: true,
      index: true,
    },

    topic: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Topic",
      required: true,
      unique: true,
      index: true,
    },

    questions: {
      type: [mcqQuestionSchema],
      required: true,
      validate: {
        validator: (value) => value.length > 0,
        message: "MCQ must contain at least one question.",
      },
    },

    provider: {
      type: String,
      required: true,
    },

    model: {
      type: String,
      required: true,
    },

    version: {
      type: Number,
      default: 1,
    },

    generatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  },
);

const MCQ = mongoose.model("MCQ", mcqSchema);

export default MCQ;
