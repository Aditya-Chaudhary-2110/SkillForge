import mongoose from "mongoose";

const aiHelperSchema = new mongoose.Schema(
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

    simple: {
      type: String,
      required: true,
      trim: true,
    },

    example: {
      type: String,
      required: true,
      trim: true,
    },

    memory: {
      type: String,
      required: true,
      trim: true,
    },

    mistake: {
      type: String,
      required: true,
      trim: true,
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

const AIHelper = mongoose.model("AIHelper", aiHelperSchema);

export default AIHelper;
