import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    folder: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Folder",
      required: true,
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    content: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  },
);

noteSchema.index({ folder: 1, title: 1 }, { unique: true });

const Note = mongoose.model("Note", noteSchema);

export default Note;
