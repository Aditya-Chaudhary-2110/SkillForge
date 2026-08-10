import mongoose from "mongoose";

const studySessionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    skill: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Skill",
      required: true,
    },

    module: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Module",
      required: true,
    },

    topic: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Topic",
      required: true,
    },

    startedAt: {
      type: Date,
      required: true,
      default: Date.now,
    },

    endedAt: {
      type: Date,
      default: null,
    },

    durationMinutes: {
      type: Number,
      default: 0,
      min: 0,
    },

    isCompleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

// Useful indexes for analytics and dashboard
studySessionSchema.index({ user: 1, startedAt: -1 });
studySessionSchema.index({ user: 1, skill: 1 });
studySessionSchema.index({ user: 1, module: 1 });
studySessionSchema.index({ user: 1, topic: 1 });

const StudySession = mongoose.model("StudySession", studySessionSchema);

export default StudySession;
