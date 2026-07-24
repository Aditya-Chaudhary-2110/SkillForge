import Bookmark from "../models/bookmark.model.js";
import Resource from "../models/resource.model.js";
import ApiError from "../utils/ApiError.js";

export const createBookmark = async (userId, bookmarkData) => {
  const { resource } = bookmarkData;

  const existingResource = await Resource.findById(resource);

  if (!existingResource) {
    throw new ApiError(404, "Resource not found");
  }

  const existingBookmark = await Bookmark.findOne({
    user: userId,
    resource,
  });

  if (existingBookmark) {
    throw new ApiError(409, "Bookmark already exists");
  }

  const bookmark = await Bookmark.create({
    user: userId,
    resource,
  });

  return bookmark;
};

export const getUserBookmarks = async (userId) => {
  return await Bookmark.find({ user: userId })
    .populate({
      path: "resource",
      populate: {
        path: "topic",
        select: "name slug",
      },
    })
    .sort({ createdAt: -1 });
};

export const getBookmarkById = async (userId, bookmarkId) => {
  const bookmark = await Bookmark.findOne({
    _id: bookmarkId,
    user: userId,
  }).populate({
    path: "resource",
    populate: {
      path: "topic",
      select: "name slug",
    },
  });

  if (!bookmark) {
    throw new ApiError(404, "Bookmark not found");
  }

  return bookmark;
};

export const deleteBookmark = async (userId, bookmarkId) => {
  const bookmark = await Bookmark.findOneAndDelete({
    _id: bookmarkId,
    user: userId,
  });

  if (!bookmark) {
    throw new ApiError(404, "Bookmark not found");
  }

  return bookmark;
};
