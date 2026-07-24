import mongoose from "mongoose";

const topicSchema = new mongoose.Schema(
  {
    module: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Module",
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

    description: {
      type: String,
      required: true,
      trim: true,
    },

    estimatedTime: {
      type: Number,
      default: 0,
    },

    difficulty: {
      type: String,
      enum: ["Beginner", "Intermediate", "Advanced"],
      default: "Beginner",
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

topicSchema.index({ module: 1, name: 1 }, { unique: true });

topicSchema.index({ module: 1, slug: 1 }, { unique: true });

const Topic = mongoose.model("Topic", topicSchema);

export default Topic;
