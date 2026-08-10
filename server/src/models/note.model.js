import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    type: {
      type: String,
      enum: ["manual", "ai"],
      default: "manual",
    },

    topic: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Topic",
      default: null,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      trim: true,
      lowercase: true,
      default: null,
    },

    content: {
      type: String,
      default: "",
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

noteSchema.index(
  {
    user: 1,
    title: 1,
  },
  {
    unique: true,
    partialFilterExpression: {
      type: "manual",
    },
  },
);

const Note = mongoose.model("Note", noteSchema);

export default Note;
