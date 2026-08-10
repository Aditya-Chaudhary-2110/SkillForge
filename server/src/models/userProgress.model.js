import mongoose from "mongoose";

const completedTopicSchema = new mongoose.Schema(
  {
    topic: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Topic",
      required: true,
    },

    completedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    _id: false,
  },
);

// NEW
const dailyStudySchema = new mongoose.Schema(
  {
    date: {
      type: String, // YYYY-MM-DD
      required: true,
    },

    minutes: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  {
    _id: false,
  },
);

const userProgressSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
      index: true,
    },

    completedTopics: {
      type: [completedTopicSchema],
      default: [],
    },

    studyHours: {
      type: Number,
      default: 0,
      min: 0,
    },

    currentStreak: {
      type: Number,
      default: 0,
      min: 0,
    },

    longestStreak: {
      type: Number,
      default: 0,
      min: 0,
    },

    // NEW
    dailyStudy: {
      type: [dailyStudySchema],
      default: [],
    },

    lastVisitedSkill: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Skill",
      default: null,
    },

    lastVisitedModule: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Module",
      default: null,
    },

    lastVisitedTopic: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Topic",
      default: null,
    },

    lastVisitedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  },
);

const UserProgress = mongoose.model("UserProgress", userProgressSchema);

export default UserProgress;
