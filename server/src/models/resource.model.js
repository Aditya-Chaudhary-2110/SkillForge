import mongoose from "mongoose";

const resourceSchema = new mongoose.Schema(
  {
    topic: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Topic",
      required: true,
    },

    type: {
      type: String,
      enum: ["note", "practice", "mcq", "interview", "ai", "resource"],
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      default: "",
      trim: true,
    },

    content: {
      type: Object,
      required: true,
    },

    order: {
      type: Number,
      default: 0,
    },

    isPublished: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

resourceSchema.index({ topic: 1, type: 1 }, { unique: true });

const Resource = mongoose.model("Resource", resourceSchema);

export default Resource;
