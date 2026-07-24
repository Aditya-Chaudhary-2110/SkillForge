import {
  createFolder,
  getUserFolders,
  getFolderById,
  updateFolder,
  deleteFolder,
} from "../services/folder.service.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";

export const create = asyncHandler(async (req, res) => {
  const folder = await createFolder(req.user._id, req.body);

  return res
    .status(201)
    .json(new ApiResponse(201, { folder }, "Folder created successfully"));
});

export const getAll = asyncHandler(async (req, res) => {
  const folders = await getUserFolders(req.user._id);

  return res
    .status(200)
    .json(new ApiResponse(200, { folders }, "Folders fetched successfully"));
});

export const getById = asyncHandler(async (req, res) => {
  const folder = await getFolderById(req.user._id, req.params.id);

  return res
    .status(200)
    .json(new ApiResponse(200, { folder }, "Folder fetched successfully"));
});

export const update = asyncHandler(async (req, res) => {
  const folder = await updateFolder(req.user._id, req.params.id, req.body);

  return res
    .status(200)
    .json(new ApiResponse(200, { folder }, "Folder updated successfully"));
});

export const remove = asyncHandler(async (req, res) => {
  await deleteFolder(req.user._id, req.params.id);

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Folder deleted successfully"));
});
