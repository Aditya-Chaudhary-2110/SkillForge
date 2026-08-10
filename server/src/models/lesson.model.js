import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema(
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
      index: true,
    },

    content: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },

    provider: {
      type: String,
      required: true,
      default: "groq",
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

// One lesson per Skill + Module + Topic + Version
lessonSchema.index(
  {
    skill: 1,
    module: 1,
    topic: 1,
    version: 1,
  },
  {
    unique: true,
  },
);

const Lesson = mongoose.model("Lesson", lessonSchema);

export default Lesson;
