import {
  createNote,
  getUserNotes,
  getNoteById,
  updateNote,
  deleteNote,
  getTodayNotesStats,
} from "../services/note.service.js";

import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";

export const create = asyncHandler(async (req, res) => {
  const note = await createNote(req.user._id, req.body);

  return res
    .status(201)
    .json(new ApiResponse(201, { note }, "Note created successfully"));
});

export const saveAIToNotes = asyncHandler(async (req, res) => {
  const { topic, title, slug, content } = req.body;

  const note = await createNote(req.user._id, {
    topic,
    title,
    slug,
    content,
    type: "ai",
  });

  return res
    .status(201)
    .json(new ApiResponse(201, { note }, "AI note saved successfully"));
});

export const getAll = asyncHandler(async (req, res) => {
  const notes = await getUserNotes(req.user._id);

  return res
    .status(200)
    .json(new ApiResponse(200, { notes }, "Notes fetched successfully"));
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

// =====================================================
// Dashboard Stats
// =====================================================

export const getTodayStats = asyncHandler(async (req, res) => {
  const stats = await getTodayNotesStats(req.user._id);

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        stats,
        "Today's note statistics fetched successfully",
      ),
    );
});
