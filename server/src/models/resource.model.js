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
      enum: ["note", "coding", "mcq", "interview", "ai"],
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    content: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
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

resourceSchema.index({ topic: 1, type: 1 }, { unique: true });

const Resource = mongoose.model("Resource", resourceSchema);

export default Resource;
