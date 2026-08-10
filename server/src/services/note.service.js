import Note from "../models/note.model.js";
import ApiError from "../utils/ApiError.js";

export const createNote = async (userId, noteData) => {
  const {
    title,
    type = "manual",
    topic = null,
    slug = null,
    content,
  } = noteData;

  // AI notes → update existing note for the same topic
  if (type === "ai") {
    const existingNote = await Note.findOne({
      user: userId,
      topic,
      slug,
      type: "ai",
    });

    if (existingNote) {
      existingNote.content = content;
      existingNote.updatedAt = new Date();

      await existingNote.save();

      return existingNote;
    }
  }

  // Manual notes → allow duplicate titles
  return await Note.create({
    user: userId,
    title,
    type,
    topic,
    slug,
    content,
  });
};

export const getUserNotes = async (userId) => {
  return await Note.find({
    user: userId,
  })
    .populate("topic", "name slug")
    .sort({ updatedAt: -1 });
};

export const getNoteById = async (userId, noteId) => {
  const note = await Note.findOne({
    _id: noteId,
    user: userId,
  }).populate("topic", "name slug");

  if (!note) {
    throw new ApiError(404, "Note not found");
  }

  return note;
};

export const updateNote = async (userId, noteId, noteData) => {
  const note = await Note.findOneAndUpdate(
    {
      _id: noteId,
      user: userId,
    },
    noteData,
    {
      new: true,
      runValidators: true,
    },
  ).populate("topic", "name slug");

  if (!note) {
    throw new ApiError(404, "Note not found");
  }

  return note;
};

export const deleteNote = async (userId, noteId) => {
  const note = await Note.findOneAndDelete({
    _id: noteId,
    user: userId,
  });

  if (!note) {
    throw new ApiError(404, "Note not found");
  }

  return note;
};

// =====================================================
// Dashboard - Today's Notes & AI Saves
// =====================================================

export const getTodayNotesStats = async (userId) => {
  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0);

  const todayEnd = new Date();
  todayEnd.setHours(23, 59, 59, 999);

  const [todayNotes, todayAISaves] = await Promise.all([
    Note.countDocuments({
      user: userId,
      createdAt: {
        $gte: todayStart,
        $lte: todayEnd,
      },
    }),

    Note.countDocuments({
      user: userId,
      type: "ai",
      createdAt: {
        $gte: todayStart,
        $lte: todayEnd,
      },
    }),
  ]);

  return {
    todayNotes,
    todayAISaves,
  };
};
