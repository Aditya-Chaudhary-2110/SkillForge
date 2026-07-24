import {
  createBookmark,
  getUserBookmarks,
  getBookmarkById,
  deleteBookmark,
} from "../services/bookmark.service.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";

export const create = asyncHandler(async (req, res) => {
  const bookmark = await createBookmark(req.user._id, req.body);

  return res
    .status(201)
    .json(new ApiResponse(201, { bookmark }, "Bookmark created successfully"));
});

export const getAll = asyncHandler(async (req, res) => {
  const bookmarks = await getUserBookmarks(req.user._id);

  return res
    .status(200)
    .json(
      new ApiResponse(200, { bookmarks }, "Bookmarks fetched successfully"),
    );
});

export const getById = asyncHandler(async (req, res) => {
  const bookmark = await getBookmarkById(req.user._id, req.params.id);

  return res
    .status(200)
    .json(new ApiResponse(200, { bookmark }, "Bookmark fetched successfully"));
});

export const remove = asyncHandler(async (req, res) => {
  await deleteBookmark(req.user._id, req.params.id);

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Bookmark deleted successfully"));
});
