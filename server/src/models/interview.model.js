import mongoose from "mongoose";

const interviewQuestionSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
      trim: true,
    },

    answer: {
      type: String,
      required: true,
      trim: true,
    },

    difficulty: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
      default: "Easy",
    },

    tags: [
      {
        type: String,
        trim: true,
      },
    ],
  },
  {
    _id: false,
  },
);

const interviewSchema = new mongoose.Schema(
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
      type: [interviewQuestionSchema],
      required: true,
      validate: {
        validator: (value) => value.length > 0,
        message: "Interview must contain at least one question.",
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

const Interview = mongoose.model("Interview", interviewSchema);

export default Interview;
