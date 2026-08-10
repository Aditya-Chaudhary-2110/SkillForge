import mongoose from "mongoose";

const moduleSchema = new mongoose.Schema(
  {
    skill: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Skill",
      required: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    folder: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    order: {
      type: Number,
      default: 0,
    },

    isPublished: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

moduleSchema.index({ skill: 1, name: 1 }, { unique: true });

moduleSchema.index({ skill: 1, slug: 1 }, { unique: true });

const Module = mongoose.model("Module", moduleSchema);

export default Module;
