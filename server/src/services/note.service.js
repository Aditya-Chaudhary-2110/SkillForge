import Note from "../models/note.model.js";
import Folder from "../models/folder.model.js";
import ApiError from "../utils/ApiError.js";

export const createNote = async (userId, noteData) => {
  const { folder, title } = noteData;

  const existingFolder = await Folder.findById(folder);

  if (!existingFolder) {
    throw new ApiError(404, "Folder not found");
  }

  const existingNote = await Note.findOne({
    folder,
    title,
  });

  if (existingNote) {
    throw new ApiError(409, "Note already exists");
  }

  return await Note.create({
    user: userId,
    ...noteData,
  });
};

export const getUserNotes = async (userId) => {
  return await Note.find({ user: userId })
    .populate("folder", "name")
    .sort({ updatedAt: -1 });
};

export const getNotesByFolder = async (folderId) => {
  return await Note.find({ folder: folderId }).sort({
    updatedAt: -1,
  });
};

export const getNoteById = async (userId, noteId) => {
  const note = await Note.findOne({
    _id: noteId,
    user: userId,
  }).populate("folder", "name");

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
  ).populate("folder", "name");

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
