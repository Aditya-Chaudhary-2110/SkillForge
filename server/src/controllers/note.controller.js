import {
  createNote,
  getUserNotes,
  getNotesByFolder,
  getNoteById,
  updateNote,
  deleteNote,
} from "../services/note.service.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";

export const create = asyncHandler(async (req, res) => {
  const note = await createNote(req.user._id, req.body);

  return res
    .status(201)
    .json(new ApiResponse(201, { note }, "Note created successfully"));
});

export const getAll = asyncHandler(async (req, res) => {
  const notes = await getUserNotes(req.user._id);

  return res
    .status(200)
    .json(new ApiResponse(200, { notes }, "Notes fetched successfully"));
});

export const getByFolder = asyncHandler(async (req, res) => {
  const notes = await getNotesByFolder(req.params.folderId);

  return res
    .status(200)
    .json(new ApiResponse(200, { notes }, "Folder notes fetched successfully"));
});

export const getById = asyncHandler(async (req, res) => {
  const note = await getNoteById(req.user._id, req.params.id);

  return res
    .status(200)
    .json(new ApiResponse(200, { note }, "Note fetched successfully"));
});

export const update = asyncHandler(async (req, res) => {
  const note = await updateNote(req.user._id, req.params.id, req.body);

  return res
    .status(200)
    .json(new ApiResponse(200, { note }, "Note updated successfully"));
});

export const remove = asyncHandler(async (req, res) => {
  await deleteNote(req.user._id, req.params.id);

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Note deleted successfully"));
});
